import React, { Component } from "react";

export default class Navbar extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         valor:1
    //     }
    //     console.log("1.constructor!")
    // }

    // componentDidMount(){
    //     console.log("2.me estoy montando!")
    // }

    // componentDidUpdate(){
    //     console.log("3.me actualice!")
    // }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
          {/* {console.log("render")} */}
        <span className="navbar-brand mb-0 h1">LandingPage</span>
        {/* <button onClick={()=>{this.setState({valor:this.valor+1})}}>click</button>
        {this.state.valor} */}
      </nav>
    );
  }
}
