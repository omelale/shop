import React , {useLayoutEffect}from "react";
import {FlatList,Alert} from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import * as cartActions from '../../store/actions/cart'
import * as productActions from '../../store/actions/products'
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const UserProducts = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
    useLayoutEffect(
        () => {
            props.navigation.setOptions({
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            iconName='ios-add-circle-outline'
                            onPress={() => {
                                props.navigation.navigate('addProducts')
                            }}
                        />
                    </HeaderButtons>
                )
            })
        }
    );

    const deleteHandler = (prodId) => {
        Alert.alert(
            "Delete confirmation",
            "Are you sure you would like to delete this product?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                },
                {text: "OK", onPress: () => {
                    dispatch(productActions.deleteProduct(prodId))
                    }}
            ]
        );

    }
    return (
        <FlatList
            data={userProducts}
            renderItem={itemData =>
                <ProductItem
                    product={itemData.item}
                    onViewDetails={() => {
                        props.navigation.navigate('ProductDetailsScreen', {product: itemData.item});
                    }}
                    onAddToCart={() => {
                        dispatch(cartActions.addToCart(itemData.item))
                    }}
                    onEdit={
                        ()=>{
                            props.navigation.navigate('editProducts', {product: itemData.item});
                        }
                    }
                    onDelete={() => {
                        deleteHandler(itemData.item.id)
                    }}
                />}
        />
    )
}

export default UserProducts