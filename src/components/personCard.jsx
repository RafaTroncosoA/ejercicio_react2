import React, { Component} from 'react'


class PersonCard extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            numero:this.props.edad,
        }
    }

    clickEdad = () => {
        this.setState({
            numero:this.state.numero+1
        }

        )
    }
    
    
    render() {
    return(
        <div>
            <h3>{this.props.nombre} {this.props.apellido}</h3>
            <ul>Edad: {this.state.numero}</ul>
            <ul>Color de Pelo: {this.props.pelo}</ul>
            <button onClick={this.clickEdad}>Aumentar Edad</button>
        </div>
    )}
}

export default PersonCard