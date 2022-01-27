import Product from "../../models/Product";

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addToFavourites = (product) => {
    return {
        type: ADD_TO_FAVOURITES, product: product
    }
}

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT, product: product
    }
}

export const createProduct = (product) => {
    return async dispatch => {
        //here we can put any async code we want
        const response = await fetch('https://shop-348b2-default-rtdb.europe-west1.firebasedatabase.app/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(
                    {
                        title : product.title,
                        description: product.description,
                        imageUrl : product.imageUrl,
                        price : product.price
                    }
                )
        });

        const resData = await response.json();
        console.log(resData);
        console.log(product);
        let prod = {...product}
        prod.id = resData.name
        console.log(prod);
        dispatch({
            type: CREATE_PRODUCT, product: prod
        });
    }
}

export const editProduct = (product) => {
    return {
        type: EDIT_PRODUCT, product: product
    }
}