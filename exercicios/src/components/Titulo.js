import React from 'react';
import { Text, View } from 'react-native';
import style from './styles';

export default (props) => {
    return (
        <React.Fragment>
            <Text style={style.txtLarge}>{props.principal}</Text>
            <Text style={style.txtSmall}>{props.segundario}</Text>
        </React.Fragment>
    )
}