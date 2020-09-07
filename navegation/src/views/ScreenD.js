import React from 'react';
import CenterText from '../components/CenterText';
import { View, Button } from 'react-native';

export default props => {
    const r = props.route;
    const numero = r.params && r.params.numero ? props.route.params.numero : 0
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                <Button title="Abrir" onPress={() => {
                    props.navigation.openDrawer()
                    setTimeout(() => {
                        props.navigation.closeDrawer()
                    setInterval(()=> props.navigation.toggleDrawer(), 1000)
                    }, 3000)
                }
                } />
            </View>
            <View style={{ flex: 1 }}>
                <CenterText background="#33fa72" color="#000">Tela D</CenterText>
            </View>
        </View>
    )
};