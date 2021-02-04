import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props => (
    <div className="App">
        <Card titulo="#1 - Primeiro Componente">
            <Primeiro/>
        </Card>

        <Card titulo="#2 - Componente com parametros">
            <ComParametro titulo="Esse é o titulo"
                        subtitulo="Esse é o subtitulo">
            </ComParametro>
        </Card>

        <Card titulo="#3 - Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Maria</li>
                    <li>João</li>
                    <li>Thiago</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#4 - Repetição">
            <Repeticao>

            </Repeticao>
        </Card>
        <Card titulo="#5 - Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>
        <Card titulo="#6 - Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
    </div>
);