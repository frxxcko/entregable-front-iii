import React from "react";
import RegistroHistorial from "./RegistroHistorial"
import Opcion from "./Opcion"

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
    // alert("Se montó correctamente el componente");
  }
  
  componentDidUpdate(prevProps, prevState){
    // alert("Hubo una actualizacion en el componente");
  } 
  
  agregarOpcionElegidaAlHistorial = opcionElegida => this.state.historialOpcionesElegidas.push(opcionElegida)

  opcionSeleccionadaHandler(e){
    
    const opcionElegida = e.target.id
    const idSiguienteHistoria = `${Number(this.state.id[0]) + 1 + opcionElegida}`
    const siguienteHistoria = this.props.data.find( nxt => nxt.id === idSiguienteHistoria)
    this.agregarOpcionElegidaAlHistorial(idSiguienteHistoria)
    
    if(!siguienteHistoria){
      alert("Fin.")
      return
    }

    const nuevoState = {
      id: siguienteHistoria.id,
      historia: siguienteHistoria.historia,
      a: siguienteHistoria.opciones.a,
      b: siguienteHistoria.opciones.b,
      historialOpcionesElegidas: this.state.historialOpcionesElegidas
    }
    debugger
    this.setState(nuevoState)
  }
  
  render() {
    return <React.Fragment>
      <h1 className="historia">{this.state.historia}</h1>
      <div className="opciones">
        <Opcion opcion={this.state.a} valor={'A'} onPlayerClick={ e => this.opcionSeleccionadaHandler(e)} />
        <Opcion opcion={this.state.b} valor={'B'} onPlayerClick={ e => this.opcionSeleccionadaHandler(e)} />
      </div>      
      <RegistroHistorial historial={this.state.historialOpcionesElegidas}/>
    </React.Fragment>
  }
}

export default Historia;
