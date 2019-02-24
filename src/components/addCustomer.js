import React, { Component } from "react";
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
  Body,
} from "native-base";

class AddProduct extends Component {
    backToHome() {
        this.props.navigation.pop();
    }
  render() {
    return (
      <Container>
        <Content>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Customer Name" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Phone Number" />
          </Item>
          <ListItem>
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
          </ListItem>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="LineID" />
          </Item>
          <Form style={styles.inputStyles}>
            <Textarea rowSpan={5} bordered placeholder="Address" />
          </Form>
          <View style={styles.buttonStyles}>
            <Button iconLeft danger onPress={() => this.backToHome()}>
              <Icon name="trash" />
              <Text>Cancel</Text>
            </Button>
            <Button iconLeft primary>
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

export default AddProduct;