import React, {useState} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./store/reducers/products";
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFont';
import TabMainNavigation from "./navigation/TabMainNavigation";
import cartReducer from "./store/reducers/cart";

const rootReducer = combineReducers({
    products: productsReducer, cart: cartReducer
});

const store = createStore(rootReducer);

const LoadFonts = async () => {
    await useFonts();
}

export default function App() {
    const [IsReady, SetIsReady] = useState(false);

    if (!IsReady) {
        return (<AppLoading
            startAsync={LoadFonts}
            onFinish={() => SetIsReady(true)}
            onError={(err) => console.log(err)}
        />);
    }
    return (<Provider store={store}><NavigationContainer>
        <TabMainNavigation/>
    </NavigationContainer></Provider>);
}

