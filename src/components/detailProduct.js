import React, { Component } from "react";
import { View, Modal } from "react-native";
import {
  Content,
  Button,
  Thumbnail,
  H2,
  Icon,
  Text,
  Card,
  CardItem,
  Body
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

  editDetail() {
      this.props.goToEdit();
  }

  render() {
    return (
      <Modal visible={this.state.showModal}>
        <Content padder>
          <H2>Detail Page</H2>
          <Card transparent>
            <CardItem header>
              <Thumbnail
                large
                source={{
                  uri:
                    "https://facebook.github.io/react-native/docs/assets/favicon.png"
                }}
              />
            </CardItem>
            <CardItem>
              <Body>
                <Text>Product Name: Tes 123</Text>
                <Text>Price(Yen): 1000 yen</Text>
                <Text>Price (Rp): Rp 128.000</Text>
                <Text>Jastip (Rp): Rp 20.000</Text>
                <Text>Untung (Rp): Rp. 20.000</Text>
                <Text>Harga Jual (Rp): Rp. 150.0000</Text>
                <Text>
                  Beli Dimana: Drugstore osaka
                  blabadfadfsafdasfasfdasfsafdasdfsafasfsafasddfnsafnkasnfdsafdnksafaskfkafnafnakfnakf
                </Text>
                <Text>
                  Notes: afhadkfhakfhasdkfhaskfhaskfhakncknaklshdfjs
                  fhsahdfkanfjkaf askdfjsakfnas ckasfijaf a adhfadfksanf
                  afdkajhdfa
                </Text>
                <Button iconLeft transparent primary>
                  <Text>Customers:</Text>
                  <Icon name="person" />
                  <Text>10</Text>
                </Button>
              </Body>
            </CardItem>
            <CardItem footer>
              <Button danger iconLeft onPress={() => this.closeModal()}>
                <Icon name="close" />
                <Text>Close</Text>
              </Button>
              <Button primary iconLeft onPress={() => this.editDetail()}>
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

export default DetailProduct;
