import React, {useState} from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';
import Display from './ContadorDisplay'
import Botoes from './ComtadorBotes'

export default props => {
    const [num, setNum] = useState(0)
    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);


    return (
        <>
        <Text style={style.txtLarge}>
            ContadorV2
        </Text>
        <Display num={num}/>
        <Botoes inc={inc} dec={dec} />
        </>
    )
}