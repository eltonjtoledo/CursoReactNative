import React from 'react';
import { View, Button, Text } from 'react-native';
import style from '../styles';

export default (props) => {
    return (
        <>
            <Text style={style.txtLarge}>{props.a}</Text>
            <Text style={style.txtLarge}>{props.b}</Text>
        </>
    )
}