import React from "react";
import {FlatList} from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import * as cartActions from '../../store/actions/cart'


const UserProducts = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();
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
                            console.log('display')
                        }
                    }
                />}
        />
    )
}

export default UserProducts