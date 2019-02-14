import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/home';
import AddProduct from '../components/addProduct';


const Route = createStackNavigator({
    Home: {
        screen: Home
    },
    AddProduct: {
        screen: AddProduct,
    }
});

export default createAppContainer(Route);