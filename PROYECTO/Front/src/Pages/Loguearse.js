import React, {createRef} from 'react'

export default function Loguearse(props) {

    let emailRef = createRef();
    let nicknameRef = createRef();
    let passwordRef = createRef();

    const iniciarSesion = (e) => {
        e.preventDefault();
        props.signin(emailRef.current.value,nicknameRef.current.value,passwordRef.current.value)
    }

    return (
        <div className="d-flex justify-content-center mt-5">


        <div className="card" style={{width:'500px'}}>
          <div className="card-header bg-primary text-light">
            <h4>Ingresar</h4>
          </div>
          <div className="card-body">
            <form onSubmit={(e)=>{iniciarSesion(e)}}>
              <div className="form-group">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingrese su correo"
                    ref={emailRef}
                />
              </div>

              <div className="form-group">
                <label>Nickname</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese su nickname"
                  ref={nicknameRef}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingrese su contraseña"
                  ref={passwordRef}
                />
              </div>
                <button className="btn btn-primary btn-block btn-lg" type="submit">Iniciar Sesión</button>
            </form>
          </div>
        </div>
      </div>
    )
}
