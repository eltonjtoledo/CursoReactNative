import React from 'react';
import { Button, View } from 'react-native';
import style from '../styles';
export default (props) => {
    return (
        <View style={style.inline}>
            <Button style={style.txtLarge} title="-" onPress={()=> {props.dec()}} />
            <Button style={style.txtLarge} title="+" onPress={()=> {props.inc()}} />
        </View>
    )
}