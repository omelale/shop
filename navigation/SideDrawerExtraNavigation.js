import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FavouriteProducts from "../screens/user/FavouriteProducts";
import OrdersScreen from "../screens/store/OrdersScreen";
import {ProductStackNavigator} from "./ProductsStackNavigator";

const Drawer = createDrawerNavigator();

const SideDrawerExtraNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={ProductStackNavigator}/>
                <Drawer.Screen name="OrdersScreen" component={OrdersScreen}/>
                <Drawer.Screen name="FavouriteProducts" component={FavouriteProducts}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default SideDrawerExtraNavigation;