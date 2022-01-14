import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Inputfield from "../Componants/Inputfield";
import { useNavigation } from '@react-navigation/native'
import CustomBtn from "../Componants/CustomBtn";
import CustomBtn2 from "../Componants/CustomBtn2";
import Colors from "../Colors";

const LoginScreen = () => {

    const [Username, setUsername] = useState("");
    const [pass, setpass] = useState("");


    const LoginUser = async () => {

        // setloding(true);

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        username: Username,
                        password: pass
                    })
            });
            const json = await response.json();
            console.log(json);
        } catch (error) {
            console.log(error)
        } finally {
            // setloding(false);

            setUsername("");
            setpass("");
            navigation.replace("list")

        }

    };
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <StatusBar
                backgroundColor="white"
                barStyle='dark-content'
                hidden={false}
            />
            <View style={styles.headercontainer}>
                <Image source={require("../images/Logo.png")} style={{ height: 250, width: 300 }} />
                <Text style={styles.welcometxt}>Welcome to MyShop</Text>
                <Text style={styles.txt}>Sign in to Continue</Text>
            </View>
            <View style={styles.form}>
                <Inputfield myicon="person-outline" placeholder="Username" onChangeText={(n) => {
                    setUsername(n);
                }} />
                <Inputfield myicon='lock-closed-outline'
                    placeholder="Password" secureTextEntry={true} onChangeText={(p) => {
                        setpass(p);
                    }} />
                <CustomBtn title="Sign in" style={styles.btn} TextStyle={styles.text}

                    onPress={() => { LoginUser(); }}
                />
                <CustomBtn title="Forgot Password?"
                    style={{ marginTop: 20, marginStart: 100 }}
                    TextStyle={{ color: Colors.secoundrycolor, fontFamily: 'Poppins-Bold' }} />
                <View style={styles.regcontainer}>
                    <Text>Don't have an account?</Text>
                    <CustomBtn title="Sign Up"
                        TextStyle={{ color: Colors.secoundrycolor, fontFamily: 'Poppins-Bold' }}
                        onPress={() => { navigation.navigate("Reg") }} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: Colors.primarycolor
    },
    headercontainer: {
        alignItems: 'center',
        marginTop: 40
    },
    welcometxt: {
        color: '#223263',
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 25
    },
    txt: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 6
    },
    form: {
        marginHorizontal: 10,
        justifyContent: 'center',

    },
    inputstyle: {
        borderColor: Colors.smallfont,
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
    },
    btn: {
        height: 50,
        backgroundColor: Colors.secoundrycolor,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    text: {
        color: Colors.primarycolor,
        fontFamily: 'Poppins-Bold',
        fontSize: 20, fontWeight: 'bold'
    },
    btn2: {
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 2,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        paddingEnd: 60
    },
    text2: {
        color: Colors.smallfont,
        fontFamily: 'Poppins-Light'
    },
    regcontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginStart: 50
    }

});
export default LoginScreen;