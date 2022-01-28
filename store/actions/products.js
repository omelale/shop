import Product from "../../models/Product";

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

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

export const fetchProducts = () => {
    return async dispatch => {
        //here we can put any async code we want
        const response = await fetch('https://shop-348b2-default-rtdb.europe-west1.firebasedatabase.app/products.json');
        const resData = await response.json();
        console.log(resData);
        const loadedProducts = [];
        for (const resDataKey in resData) {
            let currentObject = resData[resDataKey];
            loadedProducts.push(new Product(resDataKey, 'u1', currentObject.title, currentObject.imageUrl, currentObject.description, currentObject.price));
        }
        dispatch({
            type: SET_PRODUCTS, products: loadedProducts
        });
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
                        title: product.title,
                        description: product.description,
                        imageUrl: product.imageUrl,
                        price: product.price
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