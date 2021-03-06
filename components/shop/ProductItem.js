import React from "react";
import {Button, Image, Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native'
import Colors from "../../constants/colors";
import Card from "../Card";

const ProductItem = (props) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    const edit = props.onEdit;
    const del = props.onDelete;

    return (
        <Card style={styles.product}>
            <View>
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
                            {
                                edit || del ?
                                    <View style={styles.actions}>
                                        <Button
                                            color={Colors.alertColor}
                                            title="edit"
                                            onPress={edit}
                                        />
                                        <Button
                                            color={Colors.dangerColor}
                                            title="Delete"
                                            onPress={del}
                                        />
                                    </View>
                                    : <View style={styles.actions}>
                                        <Button
                                            color={Colors.primaryColor}
                                            title="View Details"
                                            onPress={props.onViewDetails}
                                        />
                                        <Button
                                            color={Colors.primaryColor}
                                            title="Add To Cart"
                                            onPress={props.onAddToCart}
                                        />
                                    </View>
                            }
                        </View>
                    </TouchableComponent>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    product: {
        height: 250,
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
        height: '100%',
        resizeMode: 'contain'
    },
    details: {
        alignItems: 'center',
        height: '19%',
        padding: 10
    },
    title: {
        fontFamily: 'SplineSans-Bold',
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontFamily: 'SplineSans-Regular',
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