import React from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';

export default (props) => {
    return (
        <Text style={style.txtMedium}>
            {props.nome} {props.sobrenome}
        </Text>
    )
}