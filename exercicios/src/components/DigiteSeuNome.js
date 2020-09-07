import React, {useState} from 'react';
import {View, TextInput, Text } from 'react-native';
import style from './styles';

export default (props) => {
    let [nome, setNome] = useState("");
    return (
        <View>
            <Text>{nome}</Text>
            <TextInput placeholder="Digite Seu Nome" value={nome} onChangeText={nome => setNome(nome)}/>
        </View>
    )
}