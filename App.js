import React, {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./store/reducers/products";
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFont';
import TabMainNavigation from "./navigation/TabMainNavigation";



const rootReducer = combineReducers({
    products: productsReducer
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
    return (
        <Provider store={store}><NavigationContainer>
        <TabMainNavigation/>
        </NavigationContainer></Provider>
    );
}

