import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ListofItems = () => {
    const [Product, setProducts] = useState();

    const GetProducts = async () => {
        // setloding(true);

        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const json = await response.json();

            setProducts(json);
            console.log(json);
        } catch (error) {
            console.log(error)
        } finally {


        }

    };

    useEffect(() => {
        GetProducts();

    }, []);
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
                            <View>
                                <Text style={styles.name}>{item.title}</Text>
                                <Text style={styles.mob}>price : {item.price}</Text>
                                <Text style={styles.mob}>category : {item.category}</Text>
                                <Text style={styles.mob}>id : {item.id}</Text>
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
        height: 120,
        width: "95%",
        elevation: 6,
        marginTop: 10,
        marginBottom: 10,
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
    }
})
export default ListofItems;
