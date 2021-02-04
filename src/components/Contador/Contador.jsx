import { render } from '@testing-library/react'
import React, {Component} from 'react'


export default class Contador extends Component{

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () =>{
        this.setState({valor: this.state.valor + this.state.passo})
    }

    dec = () => {
        this.setState({valor: this.state.valor - this.state.passo})
    }

    render(){
        return (
            <div>
                <h2>Contador</h2>
                <label for="inputPasso">Passo </label>
                <input 
                    type="number" 
                    id="inputPasso" 
                    value={this.state.passo}
                    onChange={e => this.setState({passo: +e.target.value})}
                />

                <p>Valor: {this.state.valor}</p>

                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )
    }
}