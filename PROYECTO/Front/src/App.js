import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import {AuthService} from "./Services/AuthService";
import Ciudades from "./Pages/Ciudades";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Loguearse from "./Pages/Loguearse";

let sAuth = new AuthService();

export default class App extends Component {

  constructor(props) {
    super(props);
    
    
  }

  signin(email, nickname, password) {
    // console.log(email, nickname, password);
    sAuth.login(email,nickname,password)
    .then(rpta => {
      if(rpta.status === 200){
        sAuth.guardarToken(rpta.data.token)
      }
      
    })
  }

  render() {
    return (
      <div>
        {/* <Ciudades/> */}
        {/* Router, BrowserRouter es el componente core que me permite enrutar mis diferentes componentes */}
        <Router>
          <Navbar />
          {/* Va a revisar la ruta con la que estemos trabajando y cuando encuentre una que coincida la renderizara */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/ciudades" exact component={Ciudades} />
            <Route
              path="/login"
              exact
              render={() => {
                return <Loguearse signin={this.signin} />;
              }}
            />
           
            {/* <Login mivalor={this.state.valor} actualizarvalor={this.actualizarValor}/> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
