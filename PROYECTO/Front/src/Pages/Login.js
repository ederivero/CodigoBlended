import React, { Component } from "react";

export default class Login extends Component {
    //en el caso de los componentes basados en clases, los props los reciben en el constructor
  constructor(props) {
    super(props);
    // this.state = {
    //   email: "",
    //   nickname: "",
    //   password: "",
    // };
  }

  

  render() {
    return (
      <div className="d-flex justify-content-center mt-5">


        <div className="card" style={{width:'500px'}}>
          <div className="card-header bg-primary text-light">
            <h4>Ingresar</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su correo"
                  name="email"
                  value={this.props.estado.email}
                  onChange={(e)=>{this.props.actualizarlogin(e).bind(this)}}
                />
              </div>

              <div className="form-group">
                <label>Nickname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nickname"
                  name="nickname"
                  value={this.props.estado.nickname}
                  onChange={(e)=>{this.props.actualizarlogin(e).bind(this)}}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={this.props.estado.password}
                  onChange={(e)=>{this.props.actualizarlogin(e).bind(this)}}
                />
              </div>
                <button className="btn btn-primary btn-block btn-lg">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
