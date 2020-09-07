import React from 'react';
import { View, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            {props.previus ? <Button title="Anterior" onPress={() => {
                props.navigation.goBack()
            }} /> : false}
            {props.next ? <Button title="Proxima" onPress={() => {
                props.navigation.push(props.next, props.nextParam || null)
            }} /> : false}
        </View>
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    </View>
);