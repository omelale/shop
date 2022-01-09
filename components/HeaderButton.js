import React from "react";
import colors from "../constants/colors";
import {Platform} from "react-native";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
    return (<HeaderButton {...props} IconComponent={Ionicons} iconSize={23}
                          color={Platform.OS === 'android' ? '#fff' : colors.primaryColor}/>);
}

export default CustomHeaderButton;