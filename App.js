import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./screens/store/HomeScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import productsReducer from "./store/reducers/products";
import AppLoading from 'expo-app-loading';


const rootReducer = combineReducers({
    products: productsReducer
});
const store = createStore(rootReducer);

export default function App() {
  return (
      <Provider store={store}><View style={styles.container}>
        <HomeScreen></HomeScreen>
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
});
