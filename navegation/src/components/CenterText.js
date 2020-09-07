import React from 'react';
import { View, Text } from 'react-native';

export default props => (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.background || "#222"
    }}>
        <Text style={{
            fontSize: 35,
            color: props.color || "#fff"
            }}>{props.children}</Text>
    </View>
);