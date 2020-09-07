import React, {useState} from 'react';
import {View, Button, Text } from 'react-native';
import style from '../styles';
import Filho from './Filho'

export default (props) => {
    const [texto, setTexto] = useState("");
    const [numero, setNumero] = useState(0);

    function mostrar(value, text){
        setNumero(value);
        setTexto(text);
    }
    return (
        <>
        <Text style={style.txtLarge}>{texto} {numero}</Text>
            <Filho min={1} max={60} func={mostrar}/>
        </>
    )
}