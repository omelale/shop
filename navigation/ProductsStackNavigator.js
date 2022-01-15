import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {StyleSheet} from "react-native";
import ProductListScreen from "../screens/store/ProductsListScreen";
import ProductDetailsScreen from "../screens/store/ProductDetailsScreen";
import CartScreen from "../screens/store/CartScreen";
import OrdersScreen from "../screens/store/OrdersScreen";
import HeaderButton from "../components/HeaderButton";
import SearchScreen from "../screens/store/SearchScreen";
import userProducts from "../screens/user/UserProducts";
import editProducts from "../screens/user/EditProducts";
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

const SearchStackNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Group screenOptions={{
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: 'Search Products',
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

const ManageProductsStackNavigator = () => {
    return (<Stack.Navigator>
        <Stack.Group screenOptions={{
            headerShown: false,
            headerStyle: styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle
        }}>
            <Stack.Screen
                name="userProducts"
                component={userProducts}
                options={{
                    title: false,
                }}
            />
            <Stack.Screen
                name="editProducts"
                component={editProducts}
                options={({route}) => ({
                    title: 'Edit '+route.params.product.title,
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

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontFamily:'SplineSans-Bold'
    }
})

export {ProductStackNavigator, CartStackNavigator, SearchStackNavigator,ManageProductsStackNavigator}