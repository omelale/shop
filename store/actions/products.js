export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addToFavourites = (product) => {
    return {
        type: ADD_TO_FAVOURITES,
        product: product
    }
}

export const deleteProduct = (product)=>{
    return {
        type: DELETE_PRODUCT,
        product: product
    }
}

export const createProduct = (product) => {
    return {
        type : CREATE_PRODUCT,
        product: product
    }
}

export const editProduct = (product) => {
    return {
        type : EDIT_PRODUCT,
        product: product
    }
}