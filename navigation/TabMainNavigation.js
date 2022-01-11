import searchScreen from "../screens/store/SearchScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";
import {CartStackNavigator, ProductStackNavigator} from "./ProductsStackNavigator";
import {useSelector} from "react-redux";


const Tab = createBottomTabNavigator();

function TabMainNavigation() {
    const totalCartProducts = useSelector(state => state.cart.totalProducts)
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'ios-search-circle' : 'ios-search-circle-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    }
                    size = 27;
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: colors.accentColor,
                tabBarInactiveTintColor: colors.primaryColor,
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontFamily: 'SplineSans-Regular',
                }
            })}
        >
            <Tab.Screen name="Home" component={ProductStackNavigator} options={{headerShown: false}}/>
            <Tab.Screen name="Search" component={searchScreen} options={{headerShown: false}}/>
            <Tab.Screen name="Cart" component={CartStackNavigator} options={{
                headerShown: false,
                tabBarBadge: totalCartProducts,
                tabBarBadgeStyle: {left: 10, top: -1, fontSize: 12}
            }}/>
        </Tab.Navigator>
    );
}

export default TabMainNavigation