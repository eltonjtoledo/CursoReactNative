import React from 'react';
import { Text } from 'react-native';
import style from './styles'

export default () =>{
    return <Text style={style.txtMedium}>Comp #Oficial</Text>
}

export function Comp01(){
    return <Text style={style.txtMedium}>Comp #01</Text>
}

export function Comp02(){
    return <Text style={style.txtMedium}>Comp #02</Text>
}