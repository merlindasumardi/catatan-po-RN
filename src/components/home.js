import React, { Component } from "react";
import {
    Image, View, Dimensions, ScrollView,
    Text
} from "react-native";
import {
    Card, CardItem,
    Item, Input
} from 'native-base';

import DetailProduct from "./detailProduct";

const { height } = Dimensions.get("window");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenHeight: 0,
      showModal: false,
      fake: [1, 2, 3, 4, 5, 6]
    };
  }
  contentSizeChange = (contentWidth, contentHeight) => {
    this.setState({
      screenHeight: contentHeight
    });
  };

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  async goToEdit() {
    await this.setState({
      showModal: false
    });

    this.props.navigation.navigate('DetailProduct', {
        productId: 1 //TODO: change with real id from props 
      });
  }

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    console.log(this.props.navigation);
    return (
        <View>
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
        
            <ScrollView>
                <View style={styles.container}>
                { 
                    this.state.fake.map(() => {
                        return (
                            <View style={styles.containerItem}>
                                <Card>
                                    <CardItem cardBody button onPress={() => this.handleOpenModal()}>
                                        <Image
                                        source={{
                                            uri:
                                            "https://facebook.github.io/react-native/docs/assets/favicon.png"
                                        }}
                                        style={{ height: 200, width: null, flex: 1 }}
                                        />
                                    </CardItem>
                                    <CardItem footer>
                                        <Text>Hello</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        );
                    })
                }
                </View>
            </ScrollView>
            <DetailProduct
                showModal={this.state.showModal}
                goToEdit={() => this.goToEdit()}
            />
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  containerItem: {
    width: '50%'
  }
};

export default Home;
