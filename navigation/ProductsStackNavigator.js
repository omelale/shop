import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {StyleSheet} from "react-native";
import ProductListScreen from "../screens/store/ProductsListScreen";
import ProductDetailsScreen from "../screens/store/ProductDetailsScreen";
import CartScreen from "../screens/store/CartScreen";
import OrdersScreen from "../screens/store/OrdersScreen";
import HeaderButton from "../components/HeaderButton";
import colors from "../constants/colors";
const Stack = createStackNavigator();


const ProductStackNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Group screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
            <Stack.Screen
                name="ProductListScreen"
                component={ProductListScreen}
                options={{
                    title: 'All Products',
                }}
            />
            <Stack.Screen
                name="ProductDetailsScreen"
                component={ProductDetailsScreen}
                options={({route}) => ({
                    title: route.params.product.title,
                    headerRight: () =>
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item iconName='ios-star' onPress={() => {
                            }}/>
                        </HeaderButtons>
                    ,
                })}
            />
        </Stack.Group>
    </Stack.Navigator>);
}


const CartStackNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Group screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    title: 'Cart',
                }}
            />
            <Stack.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={{
                    title: 'Order'
                }}
            />
        </Stack.Group>
    </Stack.Navigator>);
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontWeight: 'bold',
    }
})

export {ProductStackNavigator, CartStackNavigator}