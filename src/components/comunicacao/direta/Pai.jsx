import React from 'react'
import Filho from './Filho'

export default function Pai (props){
    return  <>
                {/* ...props pega todos os parametrametros do pai*/}
                <Filho {...props}>Suelem</Filho>
                <Filho {...props}>Shamara</Filho>
                <Filho {...props}>Samuel</Filho>
            </>
}