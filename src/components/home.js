import _ from "lodash";
import React, { Component } from "react";
import { Image, View, Dimensions, ScrollView, Text } from "react-native";
import { Card, CardItem, Item, Input, Left, Right } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DetailProduct from "./detailProduct";
import { getAllProducts, getProductByName } from "../actions";

const { height } = Dimensions.get("window");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenHeight: 0,
      showModal: false,
      products: [],
      productDetail: {},
    };

    this.willFocus = this.props.navigation.addListener("willFocus", payload => {
      this.props.getAllProducts();
      // console.log('will focus', payload);
    });
  }

  componentDidMount() {
    this.props.getAllProducts();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    });
  }

  componentWillUnmount() {
    this.willFocus.remove();
  }

  handleOpenModal(value) {
    this.setState({
      showModal: true,
      productDetail: value,
    });
  }

  async goToEdit(productId) {
    await this.setState({
      showModal: false
    });

    this.props.navigation.navigate("DetailProduct", {
      productId: productId //TODO: change with real id from props
    });
  }

  handleSearch(value) {
    if(value === ''){
      this.props.getAllProducts()
    } else {
      this.props.getProductByName(value);
    }
  }

  render() {
    const scrollEnabled = this.state.screenHeight > height;

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
          <Input placeholder="Search" onSubmitEditing={(event) => {this.handleSearch(event.nativeEvent.text)}}/>
        </Item>

        <ScrollView>
          <View style={styles.container}>
            {_.map(this.props.products, (data, i) => {
              return (
                <View style={styles.containerItem} key={i}>
                  <Card>
                    <CardItem
                      cardBody
                      button
                      onPress={() => this.handleOpenModal(data)}
                    >
                      <Image
                        source={{
                          uri: data.image
                        }}
                        style={{ height: 200, width: null, flex: 1 }}
                      />
                    </CardItem>
                    <CardItem footer>
                      <Left>
                        <Text>{data.productName}</Text>
                      </Left>
                      <Right>
                        <Text>{data.sellingPrice}</Text>
                      </Right>
                    </CardItem>
                  </Card>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <DetailProduct
          showModal={this.state.showModal}
          goToEdit={(productId) => this.goToEdit(productId)}
          productData={this.state.productDetail}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "stretch"
  },
  containerItem: {
    width: "50%"
  }
};

const mapStateToProps = state => ({
  products: state.products.products.values
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: bindActionCreators(getAllProducts, dispatch),
  getProductByName: bindActionCreators(getProductByName, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
