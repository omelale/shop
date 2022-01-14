import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {SafeAreaView, StyleSheet, Text,View} from "react-native";
import SearchList from "../../components/shop/SearchList";
import SearchBar from "../../components/shop/SearchBar";

const SearchScreen = (props) => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    // const [fakeData, setFakeData] = useState();
    const products = useSelector(state=>state.products.availableProducts);
    // get data from the fake api endpoint
    // useEffect(() => {
    //     const getData = async () => {
    //         const apiResponse = await fetch(
    //             "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
    //         );
    //         const data = await apiResponse.json();
    //         setFakeData(data);
    //     };
    //     getData();
    // }, []);

    return (
        <SafeAreaView style={styles.root}>
            {/*{!clicked && <Text style={styles.title}>Search for a product</Text>}*/}
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
                style={styles.search}
            />
            <SearchList
                searchPhrase={searchPhrase}
                data={products}
                setClicked={setClicked}
                navigation={props.navigation}
            />
        </SafeAreaView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",
    }
});