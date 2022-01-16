import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Image, ScrollView, } from 'react-native';
import Inputfield from "../Componants/Inputfield";
import { useNavigation } from '@react-navigation/native'
import CustomBtn from "../Componants/CustomBtn";
import Colors from "../Colors";

const RegistrationScreen = () => {

    const [username, setusername] = useState("");

    const [fname, setfname] = useState("");
    const [email, setemail] = useState("");
    const [mob, setmob] = useState("");
    const [pass, setpass] = useState("");
    const [pass2, setpass2] = useState("");

    const CreateUser = async () => {

        // setloding(true);

        try {
            const response = await fetch("https://fakestoreapi.com/users", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: email,
                        username: username,
                        password: pass,
                        name: {
                            firstname: fname,
                            lastname: ""
                        },
                        address: {
                            city: '',
                            street: '',
                            number: 3,
                            zipcode: '',
                            geolocation: {
                                lat: '',
                                long: ''
                            }
                        },
                        phone: mob
                    })
            });
            const json = await response.json();
            console.log(json.name);
            console.log(json);
        } catch (error) {
            console.log(error)
        } finally {
            // setloding(false);

            setusername("");
            setfname("");
            setemail("");
            setpass("");
            setpass2("");
            setmob("");

            alert("Signup Sucessfully...");
            navigation.navigate("Login")
        }

    };
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <StatusBar
                backgroundColor={Colors.primarycolor}
                barStyle='dark-content'
                hidden={false}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.headercontainer}>
                    <Text style={styles.welcometxt}>Let's Get Started</Text>
                    <Text style={styles.txt}>Create a new account</Text>
                </View>
                <View style={styles.form}>
                    <Inputfield myicon="person-outline" placeholder="Usename" onChangeText={(un) => {
                        setusername(un);
                    }} />
                    <Inputfield myicon="person-outline" placeholder="Full Name" onChangeText={(n1) => {
                        setfname(n1);
                    }} />
                    <Inputfield myicon="mail-outline" placeholder="Your Email" onChangeText={(e) => {
                        setemail(e);
                    }} />
                    <Inputfield myicon="call-outline" placeholder="Phone Number" onChangeText={(m) => {
                        setmob(m);
                    }} maxLength={10} keyboardType="number-pad" />
                    <Inputfield myicon='lock-closed-outline'
                        placeholder="Password" secureTextEntry={true} onChangeText={(p) => {
                            setpass(p);
                        }} />
                    <Inputfield myicon='lock-closed-outline'
                        placeholder="Password Again" secureTextEntry={true} onChangeText={(p2) => {
                            setpass2(p2);
                        }} />
                    <CustomBtn title="Sign Up"
                        style={styles.btn}
                        TextStyle={styles.text}
                        onPress={() => {
                            CreateUser();
                        }}
                    />
                    <View style={styles.regcontainer}>
                        <Text>have an account ? </Text>
                        <CustomBtn title="Sign in"
                            TextStyle={{ color: Colors.secoundrycolor, fontFamily: 'Poppins-Bold', }}
                            onPress={() => { navigation.navigate("Login") }} />
                    </View>
                </View>
            </ScrollView>
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
        marginTop: 20
    },
    welcometxt: {
        color: '#223263',
        fontFamily: 'Poppins-Bold',
        fontSize: 22,
        marginTop: 10,
        fontWeight: 'bold'
    },
    txt: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 3
    },
    form: {
        marginHorizontal: 10,
        justifyContent: 'center',

    },
    inputstyle: {
        borderColor: '#D3D3D3',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 10,
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
        marginTop: 10,
        marginStart: 80
    }

});
export default RegistrationScreen;