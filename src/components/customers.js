import React, { Component } from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Item,
  Input,
  Button,
  Icon,
  SwipeRow,
  View
} from "native-base";
// - reducer
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getAllCustomers, removeCustomer
} from '../actions/customerActions';
import _ from 'lodash';
import { RefreshControl } from 'react-native';

class Customers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        }
    }

    componentDidMount() {
        // - fetch customers information
        this.props.getAllCustomers();
    }

   goToEdit(value) {
    this.props.navigation.navigate('AddCustomer', {
        customerId: value.id,
    });
   }

   goToOrder(value) {
    this.props.navigation.navigate('OrderDetails', {
        customerId: value.id,
    });  
   }

   // - delete customer
   async _removeCustomer(value) {
        const result = await this.props.removeCustomer(value);
        if (_.isEqual(result.status, 200)) {
            this._onRefresh();
        }
   }

   // - onRefresh
    _onRefresh = () => {
        this.setState({ refreshing: true });
        // - refetch customer data
        this.props.getAllCustomers()
            .then(() => {
                this.setState({ refreshing: false });
            });
    }

  render() {
    return (
      <Content
        refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
            />
        }
      >
        <Item
          rounded
          style={{
            marginBottom: 0,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10
          }}
        >
          <Input placeholder="Search" />
        </Item>
        {
            _.map(this.props.customers, (value, i) => {
                return (
                    <SwipeRow
                        key={i}
                        leftOpenValue={75}
                        rightOpenValue={-75}
                        left={
                            <Button onPress={() => this.goToOrder(value) }>
                            <Icon active name="information-circle" />
                            </Button>
                        }
                        body={
                            <View style={{ marginLeft: 20 }}>
                            <Text>{value.customerName} - {value.phoneNumber}</Text>
                            <Text>Alamat: {value.address}</Text>
                            <Text>Jumlah barang: 3</Text>
                            <Text>Total Belanja: Rp 2.000.000</Text>
                            <Text>DP: Rp 1.000.000</Text>
                            <Text>Lunas: Belum</Text>
                            </View>
                        }
                        right={
                            <>
                            <Button warning onPress={() => this.goToEdit(value)}>
                            <Icon active name="create" />
                            </Button>
                            <Button danger onPress={() => this._removeCustomer(value)}>
                            <Icon active name="trash" />
                            </Button>
                            </>
                        }
                        />
                );
            })
        }

      </Content>
    );
  }
}

const mapStateToProps = state => ({
    customers: state.customers.customers.values
});

const mapDispatchToProps = dispatch => ({
    getAllCustomers: bindActionCreators(getAllCustomers, dispatch),
    removeCustomer: bindActionCreators(removeCustomer, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers);
