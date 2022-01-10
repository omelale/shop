import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";

const ProductListScreen = (props) => {
  const products = useSelector(state => state.products.availableProducts);
  return (<FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <Text>{itemData.item.title}</Text>}/>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'SplineSans-Bold'
  }
});
export default ProductListScreen