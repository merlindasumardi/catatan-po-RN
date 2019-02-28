import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, Icon } from "native-base";
import Home from "../components/home";
import Customers from "../components/customers";
import Orders from "../components/orders";
import AddProduct from "../components/addProduct";
import AddCustomer from '../components/addCustomer'; 
import AddOrder from '../components/addOrder';
import ChooseProduct from '../components/chooseProduct';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Home",
      headerRight: (
        <Button transparent onPress={() => navigation.push("AddProduct")}>
          <Icon name="add" />
        </Button>
      )
    })
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: () => ({
      headerTitle: "ADD PRODUCT"
    })
  },
  DetailProduct: {
    screen: AddProduct,
    navigationOptions: () => ({
      headerTitle: "Detail Product"
    })
  }
});

const CustomerStack = createStackNavigator({
  Customers: {
    screen: Customers,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Customers",
      headerRight: (
        <Button transparent onPress={() => navigation.push("AddCustomer")}>
          <Icon name="add" />
        </Button>
      )
    })
  },
  AddCustomer: {
    screen: AddCustomer,
    navigationOptions: () => ({
      headerTitle: "Add Customer"
    })
  },
  OrderDetails: {
    screen: Orders,
    navigationOptions: ({navigation}) => ({
      headerTitle: "Order Details",
      headerRight: (
        <Button transparent onPress={() => navigation.push("ChooseProduct")}>
          <Icon name="add" />
        </Button>
      )
    })
  },
  ChooseProduct: {
    screen: ChooseProduct,
    navigationOptions: () => ({
      headerTitle: "Choose Product",
    }),
  },
  AddOrder: {
    screen: AddOrder,
    navigationOptions: () => ({
      headerTitle: "Add Order",
    })
  },
})

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Customers: CustomerStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          //   IconComponent = HomeIconWithBadge;
        } else if (routeName === "Customers") {
          iconName = "ios-person";
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

export default createAppContainer(Tabs);
