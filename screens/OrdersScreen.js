import React from "react";
import {StyleSheet,Text,View} from "react-native";

const OrdersScreen = () => {
    return (<View className={styles.container}><Text>This is the orders screen</Text></View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default OrdersScreen