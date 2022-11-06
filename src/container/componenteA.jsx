import React, { Component } from "react";
import { ComponenteB } from "./componenteB";

class Contenedor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Nombre: {this.props.nombre}</h1>
        <h1>Apellido: {this.props.apellido}</h1>
        <h1>Email: {this.props.email}</h1>
        <ComponenteB valor={false} />
      </div>
    );
  }
}

export default Contenedor;
