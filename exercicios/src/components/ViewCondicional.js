import React from 'react';
import {View, Button, Text } from 'react-native';
import style from './styles';

export default (props) => {
    return (
    <Text style={style.txtLarge}>{
        props.num % 2 === 0 ? "Par" : "Impar"
    }</Text>
    )
}