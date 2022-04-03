import React from "react";
import RegistroHistorial from "./RegistroHistorial"


class Historia extends React.Component {
  constructor(props) {
    super(props);
    this.stateIncial = this.props.data.find( hst => hst.id === "1");
    this.state = {
      id: this.stateIncial.id,
      historia: this.stateIncial.historia,
      a: this.stateIncial.opciones.a,
      b: this.stateIncial.opciones.b,
      historialOpcionesElegidas: []
    };

  }

  componentDidMount() {
    // console.log("Se montó correctamente el componente");
  }
  
  componentDidUpdate(prevProps, prevState){
    // console.log("Hubo una actualizacion en el componente");
  } 
  
  agregarOpcionElegidaAlHistorial = opcionElegida => this.state.historialOpcionesElegidas.push(opcionElegida)

  opcionSeleccionadaHandler(e){
    const opcionElegida = e.target.id
    const idSiguienteHistoria = `${Number(this.state.id[0]) + 1 + opcionElegida}`
    const siguienteHistoria = this.props.data.find( nxt => nxt.id === idSiguienteHistoria)
    this.agregarOpcionElegidaAlHistorial(idSiguienteHistoria)
    
    if(!siguienteHistoria){
      return
    }
    

    const nuevoState = {
      id: siguienteHistoria.id,
      historia: siguienteHistoria.historia,
      a: siguienteHistoria.opciones.a,
      b: siguienteHistoria.opciones.b,
      historialOpcionesElegidas: this.state.historialOpcionesElegidas
    }

    this.setState(nuevoState)
    console.log(idSiguienteHistoria);
  }
  
  render() {
    return <React.Fragment>
      <h1 className="historia">{this.state.historia}</h1>
      <div className="opciones">
        <div className="opcion">
          <button id="a" type="button" className="botones" onClick={ e => this.opcionSeleccionadaHandler(e)}>A</button>
          <h2>{this.state.a}</h2>
        </div>
        <div className="opcion">
          <button id="b" type="button" className="botones" onClick={ e => this.opcionSeleccionadaHandler(e)}>B</button>
          <h2>{this.state.b}</h2>
        </div>
      </div>
      <RegistroHistorial historial={this.state.historialOpcionesElegidas}/>
    </React.Fragment>
  }
}

export default Historia;
