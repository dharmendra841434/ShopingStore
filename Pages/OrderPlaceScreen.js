import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ImageBackground, StyleSheet, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Colors';
import CustomBtn from '../Componants/CustomBtn';

const OrderPlaceScreen = (props) => {
    const [AllItems, setAllItems] = useState();
    const [nItems, setnItems] = useState(1);

    const AddItem = () => {
        setnItems(nItems + 1);

    };
    const SubItem = () => {
        setnItems(nItems - 1);

    }
    const Alldata = props.route.params;
    useEffect(() => {
        setAllItems(Alldata.Alldata);
        console.log(AllItems);


    });
    return (
        <ScrollView style={{ flex: 1 }}>
            <FlatList
                data={AllItems}
                keyExtractor={(item, index) => item.key}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.card}>
                            <ImageBackground style={{ width: 90, height: 130, marginVertical: 10, marginHorizontal: 10 }} source={{ uri: item.imgage }} />
                            <View style={styles.details}>
                                <Text style={{ width: "65%", fontSize: 15, color: Colors.myblue }}>{item.title}</Text>
                                <Text style={{ marginTop: 10, marginBottom: 20, color: Colors.secoundrycolor }}>Price: {item.price}$</Text>
                                <CustomBtn title='Remove' style={{
                                    backgroundColor: 'red',
                                    width: 80,
                                    height: 30,
                                    borderRadius: 6,
                                    justifyContent: 'center',
                                    alignItems: 'center', marginStart: 50

                                }} TextStyle={{ color: "white" }} />
                            </View>
                        </View>

                    </View>
                )}
            />
            <View>
                <Text style={{ color: Colors.myblue, fontSize: 22, fontWeight: 'bold', }}>Address</Text>
                <TextInput style={styles.input} multiline={true} numberOfLines={5} placeholder='for example : -
                city-
                street-
                number- zipcode' />
                <CustomBtn title='Save' style={styles.btn} TextStyle={styles.txt} />
                <View style={styles.place}>
                    <CustomBtn title='Place Order' style={styles.btn2} TextStyle={styles.txt} />
                    <Text style={{ fontSize: 10, marginBottom: 20 }}>Apply Term and Condition</Text>

                </View>
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    card: {

        marginVertical: 10,
        backgroundColor: 'white',
        elevation: 8,
        flexDirection: 'row'

    },
    details: {
        marginTop: 10,
        width: "100%",
        marginStart: 10,

    },
    input: {
        backgroundColor: 'white',
        borderRadius: 7,
        width: '95%',
        height: 150,
        marginHorizontal: 10,
        elevation: 7,
        fontSize: 18,
        paddingBottom: -5,
        paddingRight: 10,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        lineHeight: 20,
        textAlignVertical: 'top'
    },
    btn: {
        backgroundColor: Colors.secoundrycolor,
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
        marginStart: 130,
        marginBottom: 30
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    },
    place: {
        width: '100%',
        elevation: 7,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25

    },
    btn2: {
        backgroundColor: 'green',
        width: '80%',
        height: 45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        borderRadius: 6
    }
})

export default OrderPlaceScreen;
