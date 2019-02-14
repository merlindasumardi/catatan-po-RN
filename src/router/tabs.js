import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../components/home';
import Customers from '../components/customers';
import Orders from '../components/orders';


const Tabs = createBottomTabNavigator({
    Home,
    Customers,
    Orders,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
        //   IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Customers') {
          iconName = 'ios-person';
        } else if (routeName === 'Orders') {
            iconName = 'ios-cart';
          }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Tabs);