import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Content,
    List,
    ListItem,
    Left,
    Body,
    Thumbnail,
    Right,
    Item,
    Input,
    Text
  } from "native-base";
  

class ChooseProduct extends Component {
    goToOrder() {
        this.props.navigation.push('AddOrder');
    }
    render() {
        return(
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
        <List>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          <ListItem thumbnail onPress={() => this.goToOrder()}>
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
            </Body>
          </ListItem>
          
        </List>
      </Content>
        );
    }
}

export default ChooseProduct;