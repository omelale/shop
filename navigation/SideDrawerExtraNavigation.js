import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FavouriteProducts from "../screens/user/FavouriteProducts";
import OrdersScreen from "../screens/store/OrdersScreen";
import {ProductStackNavigator,ManageProductsStackNavigator} from "./ProductsStackNavigator";
import userProducts from "../screens/user/UserProducts";

const Drawer = createDrawerNavigator();

const SideDrawerExtraNavigation = () => {
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={ProductStackNavigator}/>
                <Drawer.Screen name="OrdersScreen" component={OrdersScreen} options={{ title: 'Your Orders' }}/>
                <Drawer.Screen name="ManageProductsStackNavigator" component={ManageProductsStackNavigator} options={{ title: 'Manage Products' }}/>
                <Drawer.Screen name="FavouriteProducts" component={FavouriteProducts} options={{ title: 'Favourite Products' }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default SideDrawerExtraNavigation;