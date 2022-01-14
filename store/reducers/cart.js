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
            const prodTitle = addedProduct.title;
            let updatedOrNewCartItem;
            //check if product key exists in cart items
            if (state.items[addedProduct.id]) {
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    prodTitle,
                    addedProduct.imageUrl,
                    state.items[addedProduct.id].sum + productPrice
                );
            } else {
                updatedOrNewCartItem = new CartItem(1, productPrice, prodTitle, addedProduct.imageUrl, productPrice)
            }
            return {
                ...state,
                items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
                totalAmount: state.totalAmount + productPrice,
                totalProducts: state.totalProducts + 1
            }
        }
        case REMOVE_FROM_CART : {
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.productImage,
                    selectedCartItem.sum - selectedCartItem.productPrice,)
                updatedCartItems = {...state.items, [action.pid]: updatedCartItem}
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }
            return {
                ...state,
                items : updatedCartItems,
                totalAmount: state.totalAmount-selectedCartItem.productPrice,
                totalProducts: state.totalProducts - 1
            }
        }
        default  : {
            return state
        }
    }
}

export default cartReducer