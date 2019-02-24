import React, { Component } from "react";
import {
  Container,
  Header,
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
  View
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
            <Input placeholder="Product Name" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Harga(Yen)" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Rate" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Harga(Rp)" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Jastip(Rp)" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Untung" />
          </Item>
          <Item regular style={styles.inputStyles}>
            <Input placeholder="Harga Jual" />
          </Item>
          <Form style={styles.inputStyles}>
            <Textarea rowSpan={5} bordered placeholder="Beli Dimana" />
          </Form>
          <Form style={styles.inputStyles}>
            <Textarea rowSpan={5} bordered placeholder="Notes" />
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
