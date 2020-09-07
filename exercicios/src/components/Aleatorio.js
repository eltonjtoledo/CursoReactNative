import React from 'react';
import { Text } from 'react-native';
import style from './styles';

export default ({min, max})=>{
    return (
    <Text style={style.txtMedium}>O Numero gerado é : {Math.floor(Math.random() * (max - min) + min)}</Text>
    )
}