import React from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';
import Filho from './Filho'

export default (props) => {
    let x = 13;
    let y = 100;

    return (
        <>
            <Filho a={x} b={y}/>
            <Filho a={x + 100} b={y + 200}/>
        </>
    )
}