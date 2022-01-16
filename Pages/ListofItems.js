import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../Colors';
import CustomBtn from '../Componants/CustomBtn';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListofItems = () => {

    const navigation = useNavigation();
    const [Product, setProducts] = useState();
    const [nCartItem, setnCartItem] = useState(0);
    const [cartItems, setcartItems] = useState([]);

    const AddIntoCart = (t, p, img) => {

        const T = t;
        const P = p;
        const Img = img;
        setcartItems(currentlist => [...currentlist, { key: Math.random(), title: T, price: P, imgage: Img }]);

    };

    const GetProducts = async () => {
        // setloding(true);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const json = await response.json();
            setProducts(json);
            //console.log(json);
        } catch (error) {
            console.log(error)
        } finally {


        }

    };

    useEffect(() => {


        navigation.setOptions({

            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("order", {
                            Alldata: cartItems
                        })
                    }}>
                        <Icon name='shopping-cart' size={35} color={Colors.myblue} />
                    </TouchableOpacity>
                    <View style={{ position: 'absolute', marginStart: 10, marginTop: 4, height: 40, width: 40, }}>
                        <Text style={{ marginStart: 10, fontSize: 12, marginBottom: 10, color: Colors.secoundrycolor, fontWeight: 'bold' }}>{nCartItem}</Text>
                    </View>
                </View >
            )
        });



        GetProducts();
        const cardItem = () => {
            setnCartItem(nCartItem + 1);

        }

    }, [nCartItem]);
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={Product}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item }) => (
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={styles.card}>
                            <View style={{ alignItems: 'center', }}>
                                <ImageBackground style={{ height: 280, width: 200, marginTop: 10 }} source={{ uri: item.image }} />
                                <View style={styles.title}>
                                    <Text style={{ color: Colors.myblue, fontSize: 22, fontWeight: 'bold', alignSelf: 'center' }}>{item.title}</Text>
                                    <Text style={{ color: Colors.secoundrycolor, fontWeight: 'bold', fontSize: 18 }}>Price : {item.price}$</Text>
                                    <Text style={{ marginTop: 10 }}>Category : {item.category}</Text>
                                    <Text style={{ marginTop: 10, color: 'black', marginEnd: 10, marginStart: 10 }}>Description : {item.description}</Text>
                                </View>
                                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 20 }}>
                                    <CustomBtn title="Add to Cart" style={styles.btn} TextStyle={styles.text}

                                        onPress={() => {
                                            setnCartItem(nCartItem + 1);
                                            AddIntoCart(item.title, item.price, item.image);

                                        }}
                                    />
                                    <CustomBtn title="Buy" style={styles.btn} TextStyle={styles.text}

                                    // onPress={() => { LoginUser(); }}
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    card: {
        width: "95%",
        elevation: 6,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    img: {
        marginTop: 5,
        marginStart: 5,
        height: 130,
        borderRadius: 5,
        width: 120,
    },
    name: {
        color: "#070661",
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 10,
        marginStart: 10
    },
    mob: {
        marginStart: 10
    },
    title: {
        alignItems: 'center',
        marginTop: 20,
        marginStart: 10,
        overflow: 'hidden',
        width: '100%'
    }, btn: {
        height: 50,
        width: 120,
        backgroundColor: Colors.myblue,
        marginTop: 20,
        borderRadius: 5,
        alignItems: 'center'
    },
    text: {
        color: Colors.primarycolor,
        fontFamily: 'Poppins-Bold',
        fontSize: 20, fontWeight: 'bold'
    },
})
export default ListofItems;
