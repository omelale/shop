import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";
import colors from "../constants/colors";
import {CartStackNavigator, ProductStackNavigator} from "./ProductsStackNavigator";
import SideDrawerNavigation from "./SideDrawerNavigation";
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
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    height: 90,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
                tabBarActiveTintColor: colors.accentColor,
                tabBarInactiveTintColor: colors.primaryColor,
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontFamily: 'SplineSans-Regular',
                    position:'relative',
                    top:-10
                }
            })}
        >
            <Tab.Screen name="Home" component={ProductStackNavigator} options={{headerShown: false}}/>
            <Tab.Screen name="Search" component={SideDrawerNavigation} options={{headerShown: false}}/>
            <Tab.Screen name="Cart" component={CartStackNavigator} options={{
                headerShown: false,
                tabBarBadge: totalCartProducts,
                tabBarBadgeStyle: {left: 10, top: 10, fontSize: 12}
            }}/>
        </Tab.Navigator>
    );
}

export default TabMainNavigation