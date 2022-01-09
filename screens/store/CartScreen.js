import React from "react";
import {StyleSheet,Text,View} from "react-native";

const CartScreen = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.txt}>This is the Cart screen</Text>
        </View>)
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
export default CartScreen