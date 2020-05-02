import React, { Component, Fragment } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log("props",props);
    this.state = {
      titulo: props.texto,
    };
  }

  actualizarTitulo(e){
    e.preventDefault();
    this.setState({
      titulo:"Codigo con React y Patatas"
    })
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>{this.state.titulo}</h1>
          <small>más texto</small>
        </header>
        <nav>Links</nav>
        <button className="btn btn-primary" onClick={(e)=>{this.actualizarTitulo(e)}}>Actualizar</button>
      </Fragment>
    );
  }
}
