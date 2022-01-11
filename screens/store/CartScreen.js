import React from "react";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import colors from "../../constants/colors";

const CartScreen = (props) => {
    const cartProducts = useSelector(state => state.cart);

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text>There are {cartProducts.totalProducts} products in the cart</Text>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>
                        Total:{' '}
                        <Text style={styles.amount}>${cartProducts.totalAmount.toFixed(2)}</Text>
                    </Text>
                    <Button
                        color={colors.accentColor}
                        title="Order Now"
                        disabled={cartProducts.totalProducts === 0}
                        onPress={() => props.navigation.navigate('OrdersScreen')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'SplineSans-Bold',
        fontSize: 18
    },
    amount: {
        color: colors.primary
    },
    txt: {
        fontSize: 20,
        fontFamily: 'SplineSans-Bold'
    }
});
export default CartScreen