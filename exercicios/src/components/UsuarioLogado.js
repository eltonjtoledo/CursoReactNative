import React from 'react';
import {View, Button, Text } from 'react-native';
import style from './styles';
import If from './If'

export default ({usuario = {}}) => {
    return (
        <If teste={usuario && usuario.nome && usuario.email}>
        <Text>Usuario Logado:</Text>
        <Text>
            {usuario.nome} - {usuario.email}
        </Text>
        </If>
    )
}