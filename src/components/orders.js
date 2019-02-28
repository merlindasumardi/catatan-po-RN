import React, { Component } from "react";
import { Text } from "react-native";
import {
  Content,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Right
} from "native-base";

class Orders extends Component {
  render() {
    return (
      <Content>
        <List>
          <ListItem itemHeader first>
            <Left>
              <Text>Merlinda</Text>
            </Left>
            <Right>
              <Text>Total Price: 1.000.000</Text>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
          <ListItem thumbnail>
            <Left>
              <Thumbnail
                square
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </Left>
            <Body>
              <Text>SENKA PERFECT WHIP COLLAGEN</Text>
              <Text>TotalOrde: 3</Text>
              <Text>Price: 300.000</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default Orders;
