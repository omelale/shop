import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ProductListScreen from "../screens/store/ProductsListScreen";
import FavouriteProducts from "../screens/user/FavouriteProducts";
import {ProductStackNavigator} from "./ProductsStackNavigator";
import HomeScreen from "../screens/store/HomeScreen";

const Drawer = createDrawerNavigator();

const SideDrawerNavigation = () => {
    return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ProductStackNavigator} />
        <Drawer.Screen name="FavouriteProducts" component={FavouriteProducts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default SideDrawerNavigation