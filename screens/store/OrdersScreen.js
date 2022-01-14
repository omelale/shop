import React from "react";
import {StyleSheet,Text,View,FlatList} from "react-native";
import {useSelector} from "react-redux";

const OrdersScreen = (props) => {
    const orders = useSelector(state => state.orders.orders);
    return (
        <FlatList data={orders} renderItem={item => <Text>{item.totalAmount}</Text>}/>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   txt : {
    fontSize:20,
    fontFamily:'SplineSans-Bold'
  }
});
export default OrdersScreen