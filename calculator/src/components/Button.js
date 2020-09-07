import React from 'react';
import {
    StyleSheet, Dimensions, TouchableHighlight, Text
} from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    }, operationButton: {
        color: "#fff",
        backgroundColor: "#fa8231",
    },
    doubleButton: {
        width: (Dimensions.get("window").width / 4) * 2,
    },
    tripleButton: {
        width: (Dimensions.get("window").width / 4) * 3,
    }
})

export default ({ onClick, label,double, triple, operation }) => {
    const stylesButton = [styles.button];
    if(double) stylesButton.push(styles.doubleButton);
    if(triple) stylesButton.push(styles.tripleButton);
    if(operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={()=> onClick(label)}>
            <Text style={stylesButton}>{label}</Text>
        </TouchableHighlight>
    );
}