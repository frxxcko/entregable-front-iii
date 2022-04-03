import React from "react";

class RegistroHistorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historialOpcionesElegidas: props.historial,
    };
  }

  render() {
    return <div className="recordatorio">
        <h3>Selección anterior: {!this.state.historialOpcionesElegidas.at(-1)? "" : this.state.historialOpcionesElegidas.at(-1)[1].toUpperCase()}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.state.historialOpcionesElegidas.map( (el, index) => {
            return <li key={index}>{el[1].toUpperCase()}</li>
          })}
        </ul>
    </div>;
  }
}

export default RegistroHistorial;
