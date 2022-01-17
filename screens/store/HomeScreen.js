import React from "react";
import {StyleSheet, Text, View} from "react-native";

const HomeScreen = () => {
  return (<View style={styles.container}><Text className={styles.texto}>This is the home screen</Text></View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }, texto: {
    fontSize: 30, fontFamily: 'SplineSans-Bold'
  }
});
export default HomeScreen