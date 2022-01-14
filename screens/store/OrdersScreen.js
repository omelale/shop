import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import OrderItem from '../../components/shop/OrderItem';


const OrdersScreen = (props) => {
    const orders = useSelector(state => state.order.orders);
    return (
        <FlatList data={orders} renderItem={
            itemData => (
                <OrderItem
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                    items={itemData.item.items}
                />
            )
        }/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 20,
        fontFamily: 'SplineSans-Bold'
    }
});
export default OrdersScreen