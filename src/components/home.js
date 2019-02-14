import React, { Component } from 'react';
import { Image, ScrollView, View, Dimensions } from 'react-native';
import { Container, Card, CardItem, Body, Text, Header, Right, Button, Icon, Title, Item, Input} from 'native-base';

const { height } = Dimensions.get('window');

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenHeight: 0,
        }
    }
    contentSizeChange = (contentWidth, contentHeight) => {
        this.setState({
            screenHeight: contentHeight,
        });
    }
    render() {
        const scrollEnabled = this.state.screenHeight > height;
        console.log(this.props)
        return(
        <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('AddProduct')}>
            <Icon name="add" />
          </Button>
          </Right>
        </Header>
        <Item rounded style={{ marginBottom:0, marginTop: 10, marginLeft: 10, marginRight: 10}}>
            <Input placeholder="Search"/>
        </Item>
        <ScrollView
        contentContainerStyle={styles.container}
        scrollEnabled={scrollEnabled}
        onContentSizeChange={this.contentSizeChange}
        > 
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
          <View style={{width: '50%'}}>
          <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem footer>
                        <Text>Hello</Text>
                    </CardItem>
                </Card>
          </View>
        </ScrollView>
      </Container>
        )
    }
}

const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'stretch', 
      justifyContent: 'space-around'
    },
  }

export default Home;
