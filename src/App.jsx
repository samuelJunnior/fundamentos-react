import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/form/Input'
import Contador from './components/Contador/Contador'

export default function App(props) {
    return (
        <div className="App">
            <h2>Fundamentos React</h2>
            <div className="Cards">
                <Card titulo="#1 - Primeiro Componente" color="#69D2E7">
                    <Primeiro />
                </Card>

                <Card titulo="#2 - Componente com parametros" color="#FA6900">
                    <ComParametro titulo="Esse é o titulo"
                        subtitulo="Esse é o subtitulo">
                    </ComParametro>
                </Card>

                <Card titulo="#3 - Componente com filhos" color="#5A6A62">
                    <ComFilhos>
                        <ul>
                            <li>Ana</li>
                            <li>Maria</li>
                            <li>João</li>
                            <li>Thiago</li>
                        </ul>
                    </ComFilhos>
                </Card>
                <Card titulo="#4 - Repetição" color="#1FDA9A">
                    <Repeticao>

                    </Repeticao>
                </Card>
                <Card titulo="#5 - Condicional v1" color="#F2AE72">
                    <Condicional numero={11}></Condicional>
                </Card>
                <Card titulo="#6 - Condicional v2" color="#008BBA">
                    <CondicionalComIf numero={11}></CondicionalComIf>
                </Card>
                <Card titulo="#7 - Comunicação direta" color="#DA4624">
                    <Pai sobrenome="Mesquita"></Pai>
                </Card>
                <Card titulo="#8 - Comunicação indireta" color="#000">
                    <Super>
                    </Super>
                </Card>
                <Card titulo="#9 - Input" color="#000">
                    <Input></Input>
                </Card>
                <Card titulo="#10 - Contador" color="#000">
                    <Contador></Contador>
                </Card>
            </div>
        </div>
    );
}