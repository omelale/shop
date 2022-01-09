import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {StyleSheet} from "react-native";
import ProductListScreen from "../screens/store/ProductsListScreen";
import ProductDetailsScreen from "../screens/store/ProductDetailsScreen";
import HeaderButton from "../components/HeaderButton";
import {Ionicons} from "@expo/vector-icons";
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
                    title: 'Product List',
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

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: colors.primaryColor,
    }, headerTitleStyle: {
        fontWeight: 'bold',
    }
})

export default ProductStackNavigator