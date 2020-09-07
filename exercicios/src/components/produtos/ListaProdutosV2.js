import React from 'react';
import { Text, FlatList } from 'react-native';
import style from '../styles';

import Produtos from './Produtos';

export default (props) => {
    return (
        <>
            <Text style={style.txtLarge}>Lista De Produtos V2</Text>
            <FlatList data={Produtos} keyExtractor={i => `${i.id}`} renderItem={({item})=> {
                return (<Text>{item.id}) {item.nome} - R${item.preco}</Text>)
            }} />
        </>
    )
}