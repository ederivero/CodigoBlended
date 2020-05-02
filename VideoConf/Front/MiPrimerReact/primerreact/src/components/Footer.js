import React, { useState, useEffect } from "react";

export default function Footer() {
  let [texto, setTexto] = useState("Codigo con Pepsi");

  useEffect(()=> {
    fetch("https://5e22b9e7afee990014e59669.mockapi.io/pedidos")
        .then(respuesta => {
            return respuesta.json()
        }).then(datos => {
            console.log(datos);
        })
  },[texto])

  return (
    <div>
      {texto}
      <input
        type="text"
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
        }}
        className="form-control"
      />
    </div>
  );
}
