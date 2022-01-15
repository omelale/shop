import React, {useState} from "react";
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import colors from "../../constants/colors";
import Product from "../../models/Product";
import {useDispatch} from "react-redux";
import * as productActions from '../../store/actions/products'


const AddProducts = (props) => {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const addProduct = () => {
    const prod = new Product(
        Math.floor(Math.random() * 100), 'u1', title, imageUrl, description, Number(price)
    );
    console.log(prod);
    dispatch(productActions.createProduct(prod));
  }
  return (
      <ScrollView>
        <View style={styles.form}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={text => setTitle(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
                style={styles.input}
                value={imageUrl}
                onChangeText={text => setImageUrl(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={text => setPrice(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={text => setDescription(text)}
            />
          </View>
          <View>
            <Button
                color={colors.primaryColor}
                title="Add Product"
                onPress={addProduct}
            />
          </View>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 20
  },
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'SplineSans-Bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});

export default AddProducts