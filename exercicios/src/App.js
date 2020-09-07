import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
// import Primeiro from './components/Primeiro';
// import Original, {Comp01, Comp02} from './components/Mult';
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import Contador from './comp onents/contador/ContadorV2';
// import Diferenciador from './components/Diferenciador';
// import Condicional from './components/ViewCondicional';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro'
// import Usuario from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutos2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexV1 from './components/layout/FlexV1'
// import FlexV2 from './components/layout/FlexV2'
// import FlexV3 from './components/layout/FlexV3'
// import FlexV4 from './components/layout/FlexV4'
import Mega from './components/mega/Mega';
export default () => (
    <SafeAreaView style={style.App}>
        {/* <Primeiro />
        <Original />
        <Comp01 />
        <Comp02 />
        <MinMax min="3" max="20"/>
        <Aleatorio min={1} max={60}/>
        <Titulo principal="Meu Titulo" segundario="Meu SubTitulo" />
        <Botao></Botao>
        <Contador inicial={10}/>
        <Pai />
        <Contador />
        <Diferenciador />
        <Condicional  num={5}/> 
        <Familia>
            <Membro nome="Elton" sobrenome="Toledo"/>
            <Membro nome="Karina" sobrenome="Toledo"/>
            <Membro nome="Eva" sobrenome="Toledo"/>
        </Familia>
        <Usuario usuario={{nome: 'Gui', email: "gui@gui.com"}}/>
        <Usuario usuario={{nome: 'Elton'}}/>
        <ListaProdutos />
        <ListaProdutos2 />
        <DigiteSeuNome />
    <FlexV1 />
    <FlexV2 />
    <FlexV3 />
    <FlexV4 />
*/}
<Mega qtdNumeros={7} />
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 20
    }
})