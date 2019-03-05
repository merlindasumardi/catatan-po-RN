import React, { Component } from "react";
import { Alert } from 'react-native';
import _ from 'lodash';
import {
  Container,
  Content,
  Input,
  Item,
  Form,
  Textarea,
  Button,
  Icon,
  Text,
  Grid,
  Row,
  View,
  ListItem,
  CheckBox,
  Body
} from "native-base";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCustomer } from '../actions';

class AddCustomer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            customerName: '',
            phoneNumber: '',
            lineId: '',
            address: '',
            isActive: 'yes'
        };
    }

    backToHome() {
        this.props.navigation.pop();
    }

    async _handleSubmit() {
        const customerData = this.state;
        const result = await this.props.addCustomer(customerData);
        console.log(result);
        if (_.isEqual(result.status, 200)) {
            this.props.navigation.navigate('Customers');
        }
    }
  render() {
    return (
      <Container>
        <Content>
          <Item regular style={styles.inputStyles}>
            <Input
                placeholder="Customer Name"
                onChangeText={text => {
                    this.setState({
                         customerName: text
                    })
                }}
            />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input
                placeholder="Phone Number"
                onChangeText={text => {
                    this.setState({
                        phoneNumber: text
                    })
                }}
            />
          </Item>
          {/* <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Whatsapp</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Line</Text>
            </Body>
          </ListItem> */}
          <Item regular style={styles.inputStyles}>
            <Input
                placeholder="LineID"
                onChangeText={text => {
                    this.setState({
                        lineId: text
                    })
                }}
            />
          </Item>
          <Form style={styles.inputStyles}>
            <Textarea
                rowSpan={5} bordered
                placeholder="Address"
                onChangeText={text => {
                    this.setState({
                        address: text
                    })
                }}
            />
          </Form>
          <View style={styles.buttonStyles}>
            <Button iconLeft danger onPress={() => this.backToHome()}>
              <Icon name="trash" />
              <Text>Cancel</Text>
            </Button>
            <Button iconLeft primary
                onPress={() => this._handleSubmit()}
            >
              <Icon name="checkmark" />
              <Text>Save</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  inputStyles: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  buttonStyles: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignContent: "space-around"
  }
};

const mapStateToProps = state => ({
    addCustomer: state.customers
});

const mapDispatchToProps = dispatch => ({
    addCustomer: bindActionCreators(addCustomer, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddCustomer);
