import React, {useState} from 'react';
import { Button, Text } from 'react-native';
import style from './styles';

export default ({inicial = 1, passo = 2}) =>{
    // let numero = props.inicial;
    const [numero, setNumero] = useState(inicial);


    const inc = () => setNumero(numero + passo);
    const dec = () => setNumero(numero - passo);

    return (
        <>
            <Text style={style.txtLarge}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}
