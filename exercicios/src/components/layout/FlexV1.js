import React from 'react';
import { View, StyleSheet } from 'react-native';
import Quadrado from './Quadrado';

export default (props) => {
    return (
        <View style={style.FlexV1}>
            <Quadrado cor='#800' />
            <Quadrado cor='#080' />
            <Quadrado cor='#008' />
            <Quadrado cor='#088' />
            <Quadrado cor='#808' />
            <Quadrado cor='#7f8' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        backgroundColor: '#222',
        flex: 1,
        justifyContent: 'space-between'
    }
});