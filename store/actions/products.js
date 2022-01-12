export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export const addToFavourites = (product) => {
    return {
        type: ADD_TO_FAVOURITES,
        product: product
    }
}