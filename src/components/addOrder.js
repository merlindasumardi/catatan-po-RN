import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker } from "react-native";
import {
  Content,
  Form,
  Icon,
  Item,
  Label,
  Input,
  ListItem,
  CheckBox,
  Body,
  View,
  Button,
  Text
} from "native-base";

class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      product: 'Senka Perfect Whip'
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  onCancel() {
    this.props.navigation.navigate('OrderDetails');
  }

  onSave() {
      this.props.navigation.navigate('OrderDetails');
  }

  render() {
    return (
      <Content>
        <Form>
        <Item regular style={styles.inputStyles}>
            <Input value={this.state.product} disabled/>
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Amount" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Color" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Label>Type</Label>
            <Input placeholder="Type" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Size" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Weight" />
          </Item>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>DP</Text>
            </Body>
          </ListItem>

          <Item regular style={styles.inputStyles}>
            <Input placeholder="Amount of DP" />
          </Item>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Paid</Text>
            </Body>
          </ListItem>

          <Item regular style={styles.inputStyles}>
            <Input disabled placeholder="Total Price" />
          </Item>
        </Form>
        <View style={styles.buttonStyles}>
          <Button iconLeft danger onPress={() => this.onCancel()}>
            <Icon name="trash" />
            <Text>Cancel</Text>
          </Button>
          <Button iconLeft primary onPress={()=> this.onSave()}>
            <Icon name="checkmark" />
            <Text>Save</Text>
          </Button>
        </View>
      </Content>
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

export default AddOrder;
