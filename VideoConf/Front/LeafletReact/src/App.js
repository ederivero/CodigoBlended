import React, { Component } from "react";
import "./App.css";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marcadores: [[-16.409046, -71.537453]],
    };
  }

  anadirMarcador(event) {
    let nuevosMarcadores = [...this.state.marcadores, event.latlng]; //push
    console.log(nuevosMarcadores);

    let objMarcador = { 
      latitud: event.latlng.lat, 
      longitud: event.latlng.lng 
    };

    let url = "https://5e22b9e7afee990014e59669.mockapi.io/mapas";
    let conf = {
      method: "POST",
      body: JSON.stringify(objMarcador),
      headers: { "Content-Type": "application/json" },
    };
    fetch(url,conf).then((rpta => {
      return rpta.json();
    })).then(marcadores => {
      console.log(marcadores)
      this.setState({
        marcadores: nuevosMarcadores,
      });
    })
  }

  render() {
    return (
      <div>
        <Map
          center={[-16.409046, -71.537453]}
          zoom={12}
          className="leaflet"
          onClick={(e) => {
            this.anadirMarcador(e);
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />

          {this.state.marcadores.map((marcador, i) => (
            <Marker position={marcador} key={i}>
              <Popup>
                <span>Marcador generado dinamicamente</span>
              </Popup>
            </Marker>
          ))}
          {/* <Marker position={[-16.409046,-71.537453]}>
            <Popup>
              <span>Hola esta es mi ciudad</span>
            </Popup>
          </Marker> */}
        </Map>
      </div>
    );
  }
}
