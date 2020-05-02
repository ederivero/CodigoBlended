import React, { Component } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

let titulo = "AppTitle";
let parrafo = "loremsfbnasiuhfuasihfuiashfuiasfsanfdsiuofghdsuioghsduighdsuigds";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header texto={titulo}/>
        {parrafo}
        <hr/>
        <Footer/>
      </div>
    )
  }
}
