import React from "react";
import {StyleSheet,Text,View,Image,Button,ScrollView} from "react-native";

const ProductDetailsScreen = (props) => {
    return (<View className={styles.container}><Text>This is the Product Details screen</Text></View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProductDetailsScreen