import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Inputfield = (props) => {
    return (
        <View style={{ ...styles.screen, ...props.ContainerStyle }}>
            <Icon name={props.myicon} size={30} color='gray' />
            <TextInput style={{ ...styles.input, ...props.style }}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                maxLength={props.maxLength}
                value={props.value}
                ref={props.ref}
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText} />

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
        marginTop: 20

    },
    input: {
        width: '91%',
    },
    txt: {
        color: '#D3D3D3'
    }

});
export default Inputfield;