import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

export default ({num}) => {
    return (
        <View style={style.conteiner}>
            <Text style={style.valor}>{num}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    conteiner: {
        width: 50,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#333"
    },
    valor: {
        color: "#fff",
        textAlign: "center",
        fontSize: 30
    }
})