import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ViewLable = (props) => {
    return (
        <View style={{ ...styles.screen, ...props.style }}>
            <Icon name={props.myicon} size={30} color='gray' />
            <Text style={{ ...styles.input, ...props.TextStyle }}>{props.data}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        borderColor: '#D3D3D3',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 8,

    },
    input: {
        width: '91%',
        fontFamily: 'Poppins-Light',
        marginStart: 50
    },
    txt: {
        color: '#D3D3D3'
    }

});
export default ViewLable;