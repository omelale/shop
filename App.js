import React, {useState} from "react";
import 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./screens/store/HomeScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./store/reducers/products";
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFont';



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
        <Provider store={store}><View style={styles.container}>
            {/*<HomeScreen/>*/}
            <Text style={styles.test}>Init</Text>
        </View></Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    test: {
        fontFamily: 'SplineSans-Bold',
        fontSize:40
    }
});
