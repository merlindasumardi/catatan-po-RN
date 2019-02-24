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
  render() {
    return (
      <Container>
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
              <Button success onPress={() => alert("Add")}>
                <Icon active name="add" />
              </Button>
            }
            body={
              <Card>
                <CardItem header>
                  <Text>Merlinda</Text>
                  <Text>082114529397</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                    <Text>Jumlah barang: 3</Text>
                    <Text>Total Belanja: Rp 2.000.000</Text>
                    <Text>DP: Rp 1.000.000</Text>
                    <Text>Lunas: Belum</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>Add Order</Text>
                </CardItem>
              </Card>
            }
            right={
              <Button danger onPress={() => alert("Trash")}>
                <Icon active name="trash" />
              </Button>
            }
          />
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Merlinda</Text>
              <Text>082114529397</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Alamat: adfsadfadfafadfafasdfsaf</Text>
                <Text>Jumlah barang: 3</Text>
                <Text>Total Belanja: Rp 2.000.000</Text>
                <Text>DP: Rp 1.000.000</Text>
                <Text>Lunas: Belum</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Add Order</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Customers;
