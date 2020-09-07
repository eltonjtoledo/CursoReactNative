import React from 'react';
import { Text, Platform } from 'react-native';
import style from './styles';

export default _ => {
    if(Platform.OS == "android"){
        return (<Text style={style.txtLarge}>Android</Text>)
    }else if(Platform.OS == "ios"){
        return (<Text style={style.txtLarge}>IOS</Text>)
    }else{
        return (<Text style={style.txtLarge}>Oxi...</Text>)
    }
}