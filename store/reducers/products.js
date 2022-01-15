import PRODUCTS from "../../data/dummy-data";
import {ADD_TO_FAVOURITES,DELETE_PRODUCT} from "../actions/products";

const initialState = {
    availableProducts: PRODUCTS,
    favouriteProducts: [],
    userProducts: PRODUCTS.filter(product => product.ownerId === 'u1')
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES : {
            const addedProduct = action.product;
            const existingIndex = state.favouriteProducts.findIndex(product => product.id === addedProduct);
            if (existingIndex >= 0) {
                const newFavs = [...state.favouriteProducts];
                const removed = newFavs.filter(product => product.id !== addedProduct)
                return {...state, favouriteProducts: removed}
            } else {
                return {
                    ...state,
                    favouriteProducts: state.favouriteProducts.concat(state.availableProducts.find(meal => meal.id === addedProduct))
                }
            }
        }
        case DELETE_PRODUCT : {
            return {
                ...state,
                availableProducts : state.availableProducts.filter(product=>product.id !== action.product),
                favouriteProducts : state.favouriteProducts.filter(product=>product.id !== action.product),
                userProducts: state.userProducts.filter(product=>product.id !== action.product)
            }
        }
        default : {
            return state;
        }
    }
}

export default productReducer