import React, { Component } from 'react'
import Navbar from "./Components/Navbar";
import Ciudades from "./Pages/Ciudades";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Ciudades/>
      </div>
    )
  }
}
