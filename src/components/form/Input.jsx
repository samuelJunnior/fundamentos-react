import React, { useState} from 'react';

export default function Input (params) {
    
    const [nome, setNome] = useState('Nome')

    return (
        <div>
            <h2>{nome}</h2>
            <input type="text" value={nome}
                onChange={e => setNome(e.target.value)} />
        </div>
    )
}