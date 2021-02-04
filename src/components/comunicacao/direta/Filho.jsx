import React from 'react'

export default function Filho(props){
    return  <>
                <h2>{props.children} {props.sobrenome}</h2>
            </>
}