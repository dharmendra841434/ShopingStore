import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomBtn = (props) => {
    return (
        <TouchableOpacity style={{ ...styles.screen, ...props.style }}
            onPress={props.onPress}
            activeOpacity={0.5}>
            {/* <Image source={require(props.url)} /> */}
            <Text style={props.TextStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center'
    }

});
export default CustomBtn;