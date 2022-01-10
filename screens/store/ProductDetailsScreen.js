import React from "react";
import {StyleSheet,Text,View,Image,Button,ScrollView} from "react-native";

const ProductDetailsScreen = (props) => {
      const product = props.route.params.product;
    return (<View style={styles.container}><Text>{product.title}</Text></View>)
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