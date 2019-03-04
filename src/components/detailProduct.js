import React, { Component } from "react";
import { Modal } from "react-native";
import {
  Content,
  Button,
  Thumbnail,
  H2,
  Icon,
  Text,
  Card,
  CardItem,
  Body,
  Left,
} from "native-base";

class DetailProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: props.showModal
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.showModal
    });
  }

  async closeModal() {
    await this.setState({
      showModal: false
    });
  }

  editDetail(productId) {
    this.props.goToEdit(productId);
  }

  render() {
    const productDetail = this.props.productData;
    return (
      <Modal visible={this.state.showModal}>
        <Content padder>
          <H2>Detail Page</H2>
          <Card transparent>
            <CardItem header>
              <Thumbnail
                large
                source={{
                  uri: productDetail.image
                }}
              />
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Product Name:</Text>
              <Left>
                <Text>{productDetail.productName}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Price(Yen):</Text>
              <Left>
                <Text>{productDetail.originalPrice} yen</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Price (Rp):</Text>
              <Left>
                <Text>Rp {productDetail.priceAfterConversion}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Jastip (Rp):</Text>
              <Left>
                <Text>Rp {productDetail.preOrderFee}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Untung (Rp):</Text>
              <Left>
                <Text>Rp. {productDetail.profit}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Harga Jual (Rp):</Text>
              <Left>
                <Text>Rp. {productDetail.sellingPrice}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Beli Dimana:</Text>
              <Left>
                <Text>{productDetail.whereToBuy}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Text style={styles.subtitle}>Notes:</Text>
              <Left>
                <Text>{productDetail.notes}</Text>
              </Left>
            </CardItem>
            <CardItem>
              <Button iconLeft transparent primary>
                <Text>Customers:</Text>
                <Icon name="person" />
                <Text>10</Text>
              </Button>
            </CardItem>
            <CardItem footer>
              <Button danger iconLeft onPress={() => this.closeModal()}>
                <Icon name="close" />
                <Text>Close</Text>
              </Button>
              <Button primary iconLeft onPress={() => this.editDetail(productDetail.id)}>
                <Icon name="create" />
                <Text>Edit</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Modal>
    );
  }
}

const styles = {
  subtitle: {
    fontWeight: 'bold',
  }
}

export default DetailProduct;
