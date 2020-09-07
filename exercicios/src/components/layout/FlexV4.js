import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

export default (props) => {
    return (
        <View style={style.FlexV4}>
            <View style={style.FlexItem1}></View>
            <View style={style.FlexItem2}></View>
            <View style={style.FlexItem3}></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#222',
        alignItems: "center"
    },
    FlexItem1: {
        backgroundColor: "#008",
        height: 300,
        width: 60
    },
    FlexItem2: {
        backgroundColor: "#808",
        flexGrow: 2,
        width: 60
    },
    FlexItem3: {
        backgroundColor: "#7f8",
        flexGrow: 4,
        width: 60
    }
});