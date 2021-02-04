import React from 'react'

import Products from '../../dados/Products.js'

export default props => {
    
    function getProdusctsListItem(){
        return Products.map( prod => {
            return <li key={prod.id}>{prod.id} -- {prod.name} -- R$ {prod.price}</li>
        })
    }

    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdusctsListItem()}
            </ul>
        </div>
    )
}