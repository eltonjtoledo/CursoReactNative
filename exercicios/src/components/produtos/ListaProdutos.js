import React from 'react';
import { View, Button, Text } from 'react-native';
import style from '../styles';

import Produtos from './Produtos';

export default (props) => {
    function obterLista() {
       return( Produtos.map(p =>{
            return (<Text key={p.id}>{p.id}) {p.nome} Custa R${p.preco}</Text>)
        })) 
    }
    return (
        <>
            <Text>Lista De Produtos</Text>
            {obterLista()}
            {/* {Produtos.map(p=>{
                return <Text key={p.id}>{p.id}) {p.nome} Custa R${p.preco}</Text>
            })} */}
        </>
    )
}