import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cart";
import CartItem from "../../models/Cart-Item";

const initialState = {
    totalProducts: 0,
    items: {},
    totalAmount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART : {
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            //check if product key exists in cart items
            if (state.items[addedProduct.id]) {
                const updatedItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    addedProduct.title,
                    addedProduct.imageUrl,
                    state.items[addedProduct.id].sum + productPrice
                );
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: updatedItem},
                    totalAmount: state.totalAmount + productPrice,
                    totalProducts: state.totalProducts + 1
                }
            } else {
                const cartItem = new CartItem(1, productPrice, addedProduct.title, addedProduct.imageUrl, productPrice)
                return {
                    ...state,
                    items: {...state.items, [addedProduct.id]: cartItem},
                    totalAmount: state.totalAmount + productPrice,
                    totalProducts: state.totalProducts + 1
                }
            }
        }
        case REMOVE_FROM_CART : {
            return state
        }
        default  : {
            return state
        }
    }
}

export default cartReducer