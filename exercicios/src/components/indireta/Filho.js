import React from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';

export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min
    return (
        <>
            <Button title="Gerar..." onPress={()=>{props.func(aleatorio, "Valor gerado: ")}}/>
        </>
    )
}