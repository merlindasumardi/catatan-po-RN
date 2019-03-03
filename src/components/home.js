import _ from "lodash";
import React, { Component } from "react";
import {
    Image, View, Dimensions,
    ScrollView, Text,
    RefreshControl
} from "react-native";
import { Card, CardItem, Item, Input, Left, Right } from "native-base";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import DetailProduct from "./detailProduct";
import Loading from './loading';
import { getAllProducts } from "../actions/productActions";

const { height } = Dimensions.get("window");

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      screenHeight: 0,
      showModal: false,
      products: [],
      refreshing: false,
      loading: true
    };
  }

  componentDidMount() {
    this.props.getAllProducts()
        .then(() => {
            this.setState({ loading: false });
        });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      products: nextProps.products
    });
  }

  handleOpenModal() {
    this.setState({
      showModal: true
    });
  }

  async goToEdit() {
    await this.setState({
      showModal: false
    });

    this.props.navigation.navigate("DetailProduct", {
      productId: 1 //TODO: change with real id from props
    });
  }

  // - onRefresh
  _onRefresh = () => {
      this.setState({ refreshing: true });
      this.props.getAllProducts()
        .then(() => {
            this.setState({ refreshing: false });
        });
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
          <Input placeholder="Search" />
        </Item>

          {
            this.state.loading ? <Loading />
            :
            <View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                <View style={styles.container}>
                    {_.map(this.props.products, (value, i) => {
                    return (
                        <View style={styles.containerItem} key={i}>
                        <Card>
                            <CardItem
                            cardBody
                            button
                            onPress={() => this.handleOpenModal()}
                            >
                            <Image
                                source={{
                                uri: value.image
                                }}
                                style={{ height: 200, width: null, flex: 1 }}
                            />
                            </CardItem>
                            <CardItem footer>
                            <Left>
                            <Text>{value.productName}</Text>
                            </Left>
                            <Right>
                            <Text>{value.sellingPrice}</Text>
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
                goToEdit={() => this.goToEdit()}
                />
            </View>
        }
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
  getAllProducts: bindActionCreators(getAllProducts, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
