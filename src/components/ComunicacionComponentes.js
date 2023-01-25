import React, { Component } from "react";


class Padre extends Component{

  state = {
    contador:0
  }


  render(){
    return(
      <>
        <h2>Comunicacion entre componentes</h2>
        <Hijo incrementaContador = {this.incrementaContador} msg="mensaje de hijo 1"/>
        <Hijo incrementaContador = {this.incrementaContador} msg="mensaje de hijo 2"/>
        <p>{this.state.contador}</p>
      </>
    );
  }
}

function Hijo(props){
  return(
    <>
    <h3>{props.msg}</h3>
    <button onClick={props.incrementaContador}>Incrementar</button>

    </>
  );
}


export default Padre;