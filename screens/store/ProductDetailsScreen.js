import React, {useLayoutEffect} from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import colors from "../../constants/colors";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import {useDispatch, useSelector} from "react-redux";
import * as cartActions from '../../store/actions/cart'
import {addToFavourites} from "../../store/actions/products";

const ProductDetailsScreen = (props) => {
    const selectedProduct = props.route.params.product;
    const favProducts = useSelector((state) => state.products.favouriteProducts);
    const isFav = favProducts.some(favMeal => favMeal.id === selectedProduct.id);
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                    onPress={() => {
                        dispatch(addToFavourites(selectedProduct.id))
                    }}
                />
            </HeaderButtons>)
        })
    });
    return (<ScrollView>
        <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
        <View style={styles.actions}>
            <Button
                color={colors.primaryColor}
                title="Add to Cart"
                onPress={() => {
                    dispatch(cartActions.addToCart(selectedProduct))
                }}
            />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>)
}

const styles = StyleSheet.create({
    image: {
        width: '100%', height: 300, resizeMode: 'contain'
    }, actions: {
        marginVertical: 10, alignItems: 'center'
    }, price: {
        fontFamily: 'SplineSans-Bold', fontSize: 20, color: '#888', textAlign: 'center', marginVertical: 20
    }, description: {
        fontFamily: 'SplineSans-Regular', fontSize: 16, textAlign: 'center', marginHorizontal: 20
    }
});
export default ProductDetailsScreen