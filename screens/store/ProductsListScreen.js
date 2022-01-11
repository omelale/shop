import React from "react";
import {FlatList, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from '../../store/actions/cart'

const ProductListScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch()
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
                product={itemData.item}
                onViewDetails={() => {
                    props.navigation.navigate('ProductDetailsScreen', {product: itemData.item});
                }}
                onAddToCart={() => { dispatch(cartActions.addToCart(itemData.item))}}
            />}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
    }, text: {
        fontSize: 20, fontFamily: 'SplineSans-Bold'
    }
});
export default ProductListScreen