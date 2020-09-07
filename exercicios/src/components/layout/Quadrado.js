import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

export default (props) => {
    const lado = props.lado || 50;
    return (
        <View style={{height: lado, width: lado, backgroundColor: props.cor || '#222', borderRadius: 5, margin: 1}}>

        </View>
    )
}