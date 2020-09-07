import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import style from '../styles';

export default (props) => {
    return (
        <View style={Style2.display}>
        <Text style={[style.txtMedium, Style2.displayText]}>
            {props.num}
        </Text>
        </View>
    )
}

const Style2 = StyleSheet.create({
    display: {
        backgroundColor: '#222',
        width: '100%'
    },
    displayText: {
        color: '#fff',
        padding: 10
    }
});