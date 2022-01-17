import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import FavouriteProducts from "../screens/user/FavouriteProducts";
import OrdersScreen from "../screens/store/OrdersScreen";

const Drawer = createDrawerNavigator();

const SideDrawerNavigation = () => {
    return (<NavigationContainer independent={true}>
        <Drawer.Navigator initialRouteName="OrdersScreen">
            <Drawer.Screen name="OrdersScreen" component={OrdersScreen}/>
            <Drawer.Screen name="FavouriteProducts" component={FavouriteProducts}/>
        </Drawer.Navigator>
    </NavigationContainer>);
}

export default SideDrawerNavigation