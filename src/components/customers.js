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

class Customers extends Component {
   goToEdit() {
    this.props.navigation.navigate('AddCustomer', {
        customerId: 1,
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
        <SwipeRow
          leftOpenValue={75}
          rightOpenValue={-75}
          left={
            <Button onPress={() => alert("Add")}>
              <Icon active name="information-circle" />
            </Button>
          }
          body={
            <View style={{ marginLeft: 20 }}>
              <Text>Merlinda - 082114529397</Text>
              <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
              <Text>Jumlah barang: 3</Text>
              <Text>Total Belanja: Rp 2.000.000</Text>
              <Text>DP: Rp 1.000.000</Text>
              <Text>Lunas: Belum</Text>
            </View>
          }
          right={
              <>
            <Button warning onPress={() => this.goToEdit()}>
              <Icon active name="create" />
            </Button>
            <Button danger onPress={() => alert("Trash")}>
              <Icon active name="trash" />
            </Button>
            </>
          }
        />

      </Content>
    );
  }
}

export default Customers;
