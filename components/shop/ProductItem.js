import React from "react";
import {Button, Image, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import Colors from "../../constants/colors";

const ProductItem = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComponent onPress={props.onViewDetails} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.product.imageUrl}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.product.title}</Text>
                            <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button
                                color={Colors.primaryColor}
                                title="View Details"
                                onPress={props.onViewDetails}
                            />
                            <Button
                                color={Colors.primaryColor}
                                title="To Cart"
                                onPress={props.onAddToCart}
                            />
                        </View></View>
                </TouchableComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
    },
    touchable: {
        borderRadius: 10,
        overflow: "hidden"
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '19%',
        padding: 10
    },
    title: {
        fontFamily:'SplineSans-Bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontFamily:'SplineSans-Regular',
        fontSize: 14,
        color: '#888'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '20%',
        paddingHorizontal: 20
    }
})

export default ProductItem