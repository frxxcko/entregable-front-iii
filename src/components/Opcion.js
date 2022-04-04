import React from "react";

class Opcion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            opcion: props.opcion,
            valor: props.valor,
            onPlayerClick: props.onPlayerClick
        };
    }

    render(){
        return(
            <div className="opcion">
                <button id={this.state.valor.toLowerCase()} type="button" className="botones" onClick={ e => this.state.onPlayerClick(e)}>{this.state.valor}</button>
                <h2>{this.state.opcion}</h2>
            </div>
        )
    }
}

export default Opcion;