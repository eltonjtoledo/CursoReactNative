import React from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';
import Filho from './Membro';

export default (props) => {
    return (
        <>
        <Text>Membros da Familia: </Text>
            {props.children}
        </>
    )
}