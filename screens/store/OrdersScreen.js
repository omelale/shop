import React from "react";
import {StyleSheet,Text,View} from "react-native";

const OrdersScreen = () => {
    return (<View style={styles.container}><Text style={styles.txt}>This is the orders screen</Text></View>)
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