import React, { Component } from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

let titulo = "AppTitle";
let parrafo = "loremsfbnasiuhfuasihfuiashfuiasfsanfdsiuofghdsuioghsduighdsuigds";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header texto="Codigo" />
        <Header texto={titulo}/>
        {parrafo}
        <button className="btn btn-primary">Click!!</button>
      </div>
    )
  }
}
