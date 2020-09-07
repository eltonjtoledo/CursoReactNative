import React from 'react';
import { Button } from 'react-native';
import style from './styles';

export default (props) => {
    function executa() {
        console.warn('Exec #1!...')
    }
    return (
        <>
            <Button title="Um botão #1" onPress={executa} />
            <Button title="Um botão #2" onPress={()=> console.warn('Exec #2!...')} />
        </>
    )
}