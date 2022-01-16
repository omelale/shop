import React, {useState} from "react";
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import colors from "../../constants/colors";
import {useDispatch} from "react-redux";
import * as productActions from '../../store/actions/products'

const EditProducts = (props) => {
    const dispatch = useDispatch();
    const product = props.route.params.product;
    const [title, setTitle] = useState(product.title);
    const [imageUrl, setImageUrl] = useState(product.imageUrl);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const editProd = () => {
        product.title = title;
        product.imageUrl = imageUrl;
        product.price = Number(price);
        product.description = description;
        dispatch(productActions.editProduct(product))
        props.navigation.navigate('userProducts');
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
                        keyboardType='numeric'
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
                        title="Edit Product"
                        onPress={editProd}
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

export default EditProducts