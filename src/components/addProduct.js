import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories, addProduct, getProductById } from "../actions";
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
  View,
  Picker,
  Label
} from "native-base";

class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      categoryId: 1,
      productName: "",
      originalPrice: "",
      rate: 135,
      priceAfterConversion: "",
      preOrderFee: "",
      sellingPrice: "",
      profit: "",
      whereToBuy: "",
      notes: "",
      image: ""
    };
  }

  async componentDidMount() {
    const productId = this.props.navigation.getParam("productId");
    const categoryResult = await this.props.getAllCategories();
    console.log(categoryResult);
    this.setState({
      categories: categoryResult.data.values
    });

    if (productId !== undefined) {
      this.props.getProductById(productId);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      categoryId: _.get(nextProps.productDetail, "category", 1),
      productName: _.get(nextProps.productDetail, "productName", ""),
      originalPrice: _.get(nextProps.productDetail, "originalPrice", ""),
      rate: _.get(nextProps.productDetail, "rate", 135),
      priceAfterConversion: _.get(
        nextProps.productDetail,
        "priceAfterConversion",
        ""
      ),
      preOrderFee: _.get(nextProps.productDetail, "preOrderFee", ""),
      sellingPrice: _.get(nextProps.productDetail, "sellingPrice", ""),
      profit: _.get(nextProps.productDetail, "profit", ""),
      whereToBuy: _.get(nextProps.productDetail, "whereToBuy", ""),
      notes: _.get(nextProps.productDetail, "notes", ""),
      image: _.get(nextProps.productDetail, "image", "")
    });
  }

  backToHome() {
    this.props.navigation.pop();
  }

  async convertPrice(text) {
    const priceAfterConversion = Number(text) * this.state.rate;

    await this.setState({
      originalPrice: Number(text),
      priceAfterConversion
    });

    this.getJastipPrice(this.state.preOrderFee);
  }

  async getSellingPrice(text) {
    const hargaJual = Number(this.state.priceAfterConversion) + Number(text);

    await this.setState({
      preOrderFee: Number(text),
      sellingPrice: hargaJual
    });

    this.getUntung();
  }

  async getJastipPrice(text) {
    const jastip = Number(text) - Number(this.state.priceAfterConversion);

    await this.setState({
      preOrderFee: jastip,
      sellingPrice: text
    });

    this.getUntung();
  }

  getUntung() {
    const untung =
      Number(this.state.priceAfterConversion) -
      Number(this.state.originalPrice) * 126.28 +
      Number(this.state.preOrderFee);

    this.setState({
      profit: untung
    });
  }

  async handleSubmitProduct() {
    const productData = this.state;
    delete productData.categories;

    const result = await this.props.addProduct(productData);

    if (result.status === 200) {
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    console.log(this.state);
    return (
      <Container>
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={styles.inputStyles}
                placeholder="Select Category"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.categoryId}
                onValueChange={value => this.setState({ categoryId: value })}
              >
                {_.map(this.state.categories, (value, i) => {
                  return (
                    <Picker.Item
                      label={value.categoryName}
                      value={value.id}
                      key={i}
                    />
                  );
                })}
              </Picker>
            </Item>
          </Form>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Product Name</Label>
            <Input
              value={this.state.productName}
              onChangeText={text => {
                this.setState({
                  productName: text
                });
              }}
            />
          </Item>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Harga(Yen)</Label>
            <Input
              type="number"
              onChangeText={text => {
                this.convertPrice(text);
              }}
              keyboardType="numeric"
              value={this.state.originalPrice.toString()}
            />
          </Item>
          {/* <Item regular style={styles.inputStyles}>
            <Input
              placeholder="Rate"
              onChangeText={text => {
                this.setState({
                  rate: text,
                })
              }}
            />
          </Item> */}
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Harga(Rp)</Label>
            <Input
              type="number"
              disabled
              value={this.state.priceAfterConversion.toString()}
            />
          </Item>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Jastip(Rp)</Label>
            <Input
              onChangeText={text => {
                this.getSellingPrice(text);
              }}
              value={this.state.preOrderFee.toString()}
              keyboardType="numeric"
            />
          </Item>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Harga Jual</Label>
            <Input
              onChangeText={text => {
                this.getJastipPrice(text);
              }}
              keyboardType="numeric"
              value={this.state.sellingPrice.toString()}
            />
          </Item>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Untung</Label>
            <Input disabled value={this.state.profit.toString()} />
          </Item>
          <Item regular style={styles.inputStyles} stackedLabel>
            <Label>Image URL</Label>
            <Input
              value={this.state.image}
              onChangeText={text => {
                this.setState({
                  image: text
                });
              }}
            />
          </Item>
          <Form style={styles.inputStyles}>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Beli Dimana"
              value={this.state.whereToBuy}
              onChangeText={text => {
                this.setState({
                  whereToBuy: text
                });
              }}
            />
          </Form>
          <Form style={styles.inputStyles}>
            <Textarea
              value={this.state.notes}
              rowSpan={5}
              bordered
              placeholder="Notes"
              onChangeText={text => {
                this.setState({
                  notes: text
                });
              }}
            />
          </Form>
          <View style={styles.buttonStyles}>
            <Button iconLeft danger onPress={() => this.backToHome()}>
              <Icon name="trash" />
              <Text>Cancel</Text>
            </Button>
            <Button iconLeft primary onPress={() => this.handleSubmitProduct()}>
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

const mapStateToProps = state => ({
  categories: state.categories.categories.values,
  productDetail: state.products.productDetail.values
});

const mapDispatchToProps = dispatch => ({
  getAllCategories: bindActionCreators(getCategories, dispatch),
  addProduct: bindActionCreators(addProduct, dispatch),
  getProductById: bindActionCreators(getProductById, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
