import React from "react";
import {StyleSheet,Text,View,Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const CartScreen = (props) => {
    return (
        <View style={styles.container}>
          <Text style={styles.txt}>This is the Cart screen</Text>
          <Button
            title="Go to Orders Screen"
            onPress={() => props.navigation.navigate('OrdersScreen')}
          />
        </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   txt : {
    fontSize:20,
    fontFamily:'SplineSans-Bold'
  }
});
export default CartScreen