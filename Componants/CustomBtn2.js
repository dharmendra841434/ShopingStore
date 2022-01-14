import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CustomBtn2 = (props) => {
    return (
        <TouchableOpacity style={{ ...styles.screen, ...props.style }} activeOpacity={0.7}>
            <Image source={require('../images/google.png')} style={styles.iconstyle} />
            <Text style={props.TextStyle}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    iconstyle: {
        width: 25,
        height: 25
    }

});
export default CustomBtn2;