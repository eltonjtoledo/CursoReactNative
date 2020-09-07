import React from 'react';
import { Text } from 'react-native';
import style from './styles';


export default (props) => {
    return (
        <Text style={style.txtLarge}>
            O valor {props.max} é maior que o valor {props.min}
        </Text>)
}