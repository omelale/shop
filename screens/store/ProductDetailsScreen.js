import React from "react";
import {Button, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import colors from "../../constants/colors";

const ProductDetailsScreen = (props) => {
    const selectedProduct = props.route.params.product;
    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.actions}>
                <Button color={colors.primaryColor} title="Add to Cart" onPress={() => {
                }}/>
            </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        resizeMode:'contain'
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontFamily:'SplineSans-Bold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily:'SplineSans-Regular',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20
    }
});
export default ProductDetailsScreen