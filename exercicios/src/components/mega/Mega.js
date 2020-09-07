import React from 'react';
import { Text, TextInput, TouchableOpacity, FlatList, View, StyleSheet } from 'react-native';
import style from '../styles';
import NumeroComponente from './NumeroComponente';

export default class Mega extends React.Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    gerarNumero = () => {
        const numeros = Array(this.state.qtdNumeros)
            .fill()
            .reduce(n => [...n, this.numeroNaoContido(n)], []);

        this.setState({ numeros })
    }

    numeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.numeroNaoContido() : novo
    }

    imprimeLista = () => {
        return (<>
            <FlatList keyExtractor={(v, i) => `${i}`} data={this.state.numeros} renderItem={({ item }) => {
                return (<Text style={style.txtMedium}>{item}</Text>)
            }} />
        </>
        );
    }

    exibeNumeros = () => {
        const numeros = this.state.numeros;
        return numeros.map(valor => <NumeroComponente num={valor} />)
    }

    render() {
        return (
            <>
                <Text style={style.txtLarge}>Gerador De Mega-Sena</Text>
                <TextInput placeholder="Qtd De Numeros"
                    style={{ borderBottomWidth: 1 }}
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={text => { this.setState({ qtdNumeros: text }) }}
                    keyboardType="numeric" />

                <TouchableOpacity style={{ backgroundColor: '#088', width: '80%', padding: 15, marginTop: 20 }}
                    onPress={e => { this.gerarNumero() }}>
                    <Text style={{ color: '#fff', textAlign: "center" }}>Teste</Text>
                </TouchableOpacity>

                {/* {this.imprimeLista()} */}
                <View style={{flexWrap: "wrap", flexDirection: "row", backgroundColor: "#f00", width: "100%"}}>
                    {this.exibeNumeros()}
                </View>

            </>
        );
    }
}