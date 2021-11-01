import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/Layout/FlexBoxV4'
// import FlexBoxV3 from './components/Layout/FlexBoxV3'
// import FlexBoxV2 from './components/Layout/FlexBoxV2'
// import FlexBoxV1 from './components/Layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membros from './components/relacao/Membros'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'


export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={6} />
        {/* <FlexBoxV4 /> */}
        {/* <FlexBoxV3 /> */}
        {/* <FlexBoxV2 /> */}
        {/* <FlexBoxV1 /> */}
        {/* <Quadrado cor='#900'/>
        <Quadrado cor='#090'/>
        <Quadrado cor='#009'/> */}
        {/* <DigiteSeuNome /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <ListaProdutos /> */}
        {/* <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com' }}/>
        <UsuarioLogado usuario={{ nome: 'Ana' }}/>
        <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }}/>
        <UsuarioLogado usuario={null}/>
        <UsuarioLogado usuario={{}}/> */}
        {/* <Familia>
            <Membros nome="Bia" sobrenome="Arruda" />
            <Membros nome="Carlos" sobrenome="Arruda" />
        </ Familia>
        <Familia>
            <Membros nome="Ana" sobrenome="Silva" />
            <Membros nome="Julia" sobrenome="Silva" />
            <Membros nome="Gui" sobrenome="Silva" />
            <Membros nome="Rebeca" sobrenome="Silva" />
        </ Familia> */}
        {/* <ParImpar num={3}/> */}
        {/* <Diferenciar /> */}
        {/* <ContadorV2 /> */}
        {/* <Pai /> */}
        {/* <Pai /> */}
        {/* <Contador inicial={100} passo={13} />
        <Contador /> */}
        {/* <Botao /> */}
        {/* <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto"/> */}
        {/* <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} /> */}
        {/* <MinMax min={3} max={20} />
        <MinMax min={1} max={94} /> */}
        {/* <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
       flexGrow: 1,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20,
    }
})