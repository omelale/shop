import PRODUCTS from "../../data/dummy-data";
import {ADD_TO_FAVOURITES} from "../actions/products";

const initialState = {
    availableProducts : PRODUCTS,
    favouriteProducts : [],
    userProducts: PRODUCTS.filter(product=>product.ownerId === 'u1')
}

const productReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES : {
            const addedProduct = action.product;
            const existingIndex = state.favouriteProducts.findIndex(product => product.id === addedProduct.id);
            if(existingIndex >= 0){
                const newFavs = [...state.favouriteProducts];
                // const removed = newFavs.splice(existingIndex,1);
                const removed = newFavs.filter(product => product.id !== addedProduct.id)
                return {...state, favouriteProducts: removed}
            } else {
                return {...state,favouriteProducts: state.favouriteProducts.concat(state.availableProducts.find(meal=>meal.id===addedProduct))}
            }
        }
        default : {
            return state;
        }
    }
}

export default productReducer