import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

export default function Ciudades() {
  const URL = "http://localhost:2000";

  const [abierto, setAbierto] = useState(false);
  const [abiertoEditar,setAbiertoEditar] = useState(false);
  const [ciudad, setCiudad] = useState("");
  const [ciudades, setCiudades] = useState([]);
  const [idEditar,setIdEditar] = useState(0);

  let crearCiudad = (e) => {
    e.preventDefault();
    //axios.metodo(URL)
    let config = {
      headers: { "Content-Type": "application/json" },
    };
    let miCiudad = {
      nombre: ciudad,
    };
    //axios.post(url,contenido,headers_token)
    axios
      //creo mi ciudad
      .post(`${URL}/ciudades`, miCiudad, config)
      .then((rpta) => {
        //cuando tengo exito, creo una alerta de SweetAlert mediante .fire()
        Swal.fire({
          icon: "success",
          title: "La ciudad ha sido creada",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          //conteido de ciudad sea "" un string vacio
          setCiudad("");
          //abierto controla el modal, sea false o sea que se cierre
          setAbierto(false);

          obtenerCiudades();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let obtenerCiudades = () => {
    axios
      .get(`${URL}/ciudades`)
      .then((rpta) => {
        setCiudades(rpta.data.contenido);
      })
      .catch((err) => console.log(err));
  };

  let eliminarCiudad = (id) => {
    Swal.fire({
      title: "Esta Ud. Seguro",
      text: "Esta operación no puede ser revertida",
      icon: "warning",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Si, Eliminalo",
      cancelButtonText: "No, regresar",
      //result.value va a ser un booleano, true si es que le di a confirmar, false si cancele
    }).then((result) => {
      if (result.value) {
        //peticion que elimina mi ciudad
        axios
          .delete(`${URL}/ciudades/${id}`)
          .then((rpta) => {
            obtenerCiudades();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  let preEditar = (id,nombre) => {
    setIdEditar(id);
    setCiudad(nombre);
    setAbiertoEditar(true);
  }

  let editarCiudad = (e) => {
    e.preventDefault();
    //axios.metodo(URL)
    let config = {
      headers: { "Content-Type": "application/json" },
    };
    let miCiudad = {
      nombre: ciudad,
    };
    //axios.post(url,contenido,headers_token)
    axios
      //edito mi ciudad con el id
      .put(`${URL}/ciudades/${idEditar}`, miCiudad, config)
      .then((rpta) => {
        //cuando tengo exito, creo una alerta de SweetAlert mediante .fire()
        Swal.fire({
          icon: "success",
          title: "La ciudad ha sido editada",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          //conteido de ciudad sea "" un string vacio
          setCiudad("");
          //abierto controla el modal, sea false o sea que se cierre
          setAbiertoEditar(false);

          obtenerCiudades();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //el useEffect se actualizara cada vez que se actualice cualquier estado
  useEffect(() => {
    obtenerCiudades();
  }, []);
  //al darle como filtro un arreglo vacio yo solamente lo ejecutare 1 sola vez la 1ra vez que se renderice mi componente, equivale a un componentDidMount

  return (
    <div>
      <div className="container mt-3">
        <h1>Ciudades</h1>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            setAbierto(true);
          }}
        >
          <i className="fas fa-city mr-2"></i>Crear Ciudad
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre Ciudad</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {ciudades.length !== 0 ? ciudades.map((ciu, indice) => (
              <tr key={indice}>
                <td>{ciu.ciu_nomb}</td>
                <td>
                  <button className="btn btn-info btn-sm mr-2" onClick={()=>{preEditar(ciu.ciu_id,ciu.ciu_nomb)}}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => {
                      eliminarCiudad(ciu.ciu_id);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            )) : <p>No se encontraron ciudades</p>}
          </tbody>
        </table>
      </div>

      {/* show si esta abierto, es un booleano, Modal Crear*/}
      <Modal
        show={abierto}
        onHide={() => {
          setAbierto(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Crear Ciudad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              crearCiudad(e);
            }}
          >
            <div className="form-group">
              <label>Nombre de Ciudad</label>
              <input
                type="ciudad"
                name="ciudad"
                placeholder="Ingrese la ciudad"
                className="form-control"
                value={ciudad}
                onChange={(event) => {
                  setCiudad(event.target.value);
                }}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Crear Ciudad
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setAbierto(false)}}>
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal>

        {/* Modal Editar */}
      <Modal
        show={abiertoEditar}
        onHide={() => {
          setAbiertoEditar(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Ciudad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={(e) => {
              editarCiudad(e);
            }}
          >
            <div className="form-group">
              <label>Nombre de Ciudad</label>
              <input
                type="ciudad"
                name="ciudad"
                placeholder="Ingrese la ciudad"
                className="form-control"
                value={ciudad}
                onChange={(event) => {
                  setCiudad(event.target.value);
                }}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Editar Ciudad
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setAbierto(false)}}>
            Cerrar
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
