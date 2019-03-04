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
import { getAllCustomers } from '../actions/customerActions';
import _ from 'lodash';

class Customers extends Component {
    constructor(props) {
        super(props);
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

  render() {
    return (
      <Content>
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
                            <Button danger onPress={() => alert("Trash")}>
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
    getAllCustomers: bindActionCreators(getAllCustomers, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Customers);
