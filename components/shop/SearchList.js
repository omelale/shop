import React from "react";
import {
    FlatList,
    Image,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from "react-native";

const Item = ({title, description, imageURL, onViewDetails}) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    return (
        <TouchableComponent onPress={onViewDetails} useForeground>
            <View style={styles.item}>
                <View>
                    <Image style={styles.image} source={{uri: imageURL}}/>
                </View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.details}>{description}</Text>
                </View>
            </View>
        </TouchableComponent>
    )
}

// the filter
const SearchList = (props) => {
    const renderItem = ({item}) => {
        // when no input, show all
        if (props.searchPhrase === "") {
            return (
                <Item title={item.title}
                      description={item.description}
                      imageURL={item.imageUrl}
                      onViewDetails={() => {
                          props.navigation.navigate('ProductDetailsScreen', {product: item});
                      }}
                />
            )
        }
        // filter of the title
        if (item.title.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return (
                <Item title={item.title}
                      description={item.description}
                      imageURL={item.imageUrl}
                      onViewDetails={() => {
                          props.navigation.navigate('ProductDetailsScreen', {product: item});
                      }}
                />
            )
        }
        // filter of the description
        if (item.description.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
            return (
                <Item
                    title={item.title}
                    description={item.description}
                    imageURL={item.imageUrl}
                    onViewDetails={() => {
                        props.navigation.navigate('ProductDetailsScreen', {product: item});
                    }}
                />
            )
        }
    };

    return (
        <SafeAreaView style={styles.list__container}>
            <View
                onStartShouldSetResponder={() => {
                    props.setClicked(false);
                }}
            >
                <FlatList
                    data={props.data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

export default SearchList;

const styles = StyleSheet.create({
    list__container: {
        margin: 0,
        height: "85%",
        width: "100%",
    },
    item: {
        margin: 15,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey",
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 10,
        marginRight: 10
    }
});