import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, StyleSheet, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart'
import * as productActions from "../../store/actions/products";
import Colors from "../../constants/colors";

const ProductListScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);
            await dispatch(productActions.fetchProducts());
            setIsLoading(false);
        }
        loadProducts();
    }, [dispatch])

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size='large' color={Colors.primaryColor}/>
            </View>
        )
    }

    return (<FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem
            product={itemData.item}
            onViewDetails={() => {
                props.navigation.navigate('ProductDetailsScreen', {product: itemData.item});
            }}
            onAddToCart={() => {
                dispatch(cartActions.addToCart(itemData.item))
            }}
        />}
    />)
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    }, text: {
        fontSize: 20, fontFamily: 'SplineSans-Bold'
    }, centered :{
        flex:1,justifyContent:"center",alignItems:"center"
    }
});
export default ProductListScreen