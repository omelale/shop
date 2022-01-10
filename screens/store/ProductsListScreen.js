import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductListScreen = (props) => {
  const addToCart = () => {
    console.log('Add To Cart')
  }
  const products = useSelector(state => state.products.availableProducts);
  return (<FlatList data={products} keyExtractor={item => item.id} renderItem={itemData => <ProductItem product={itemData.item} onViewDetails={()=>{props.navigation.navigate('ProductDetailsScreen', {product: itemData.item});}} onAddToCart={addToCart}/>}/>)
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