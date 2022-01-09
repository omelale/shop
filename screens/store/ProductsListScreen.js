import React from "react";
import {StyleSheet,Text,View} from "react-native";

const ProductListScreen = () => {
    return (<View style={styles.container}><Text style={styles.text}>This is the product list screen</Text></View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    fontSize:20,
    fontFamily:'SplineSans-Bold'
  }
});
export default ProductListScreen