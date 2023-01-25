import React, { Component } from "react";
// PROPERTIES INITIALIZER


// SE CREA LA CLASE QUE EXTIENE SIN DEFAULT SIN EL CONSTRUCTOR NI METODO SUPER 
export class EventosES7 extends Component{
// STATE NO LLEVA THIS SE DECLARA DIRECTAMENTE COMO PROPIEDAD DE LA CLASE
  state = {
    contador:0
  }
// SE CREAN FUNCIONES FLECHAS COMO METODOS YA QUE EL THIS DE LA MISMA ES EL CONTEXTO EN EL QUE ESTA OSEA LA CLASS
  sumar = () =>{
      console.log(this);
    this.setState({
      contador : this.state.contador + 1
    })
  }
  restar = () =>{
    this.setState({
      contador : this.state.contador - 1
    })
  }
// ESTO QUEDA IGUAL QUE EVENTOSES6.JS
  render(){
    return(
      <div>
        <h2>Eventos componente de clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

// COMPONENTE FUNCIONAL CON ARROW FUNCTION CON PARAMETRO DESESTUCTURADO NO LLEVA LA PALABRA PROP
// const Boton= ({myOnClick}) => <button onClick={myOnClick}>Componente boton</button>


// COMPONENTE FUNCIONAL CON ARROW FUNCTION
const Boton= props => <button onClick={props.myOnClick}>Componente boton</button>


// COMPONENTE FUNCIONAL CON FUNCTION

// function Boton(props){
// <button onClick={props.myOnClick}>Componente boton</button>
// }



export class MasSobreEventos extends Component{

  handleClick = (e, msg) => {
    console.log(e)
    console.log(e.nativeEvent)
    console.log(e.target)
    console.log(e.nativeEvent.target)
    console.log(msg)
  }

  render(){
    return(
      <div>
        <h2>Mas sobre Eventos</h2>
        <button onClick={(e)=>this.handleClick(e,"click desde parametro de evento")}>Boton jsx</button>

        <Boton
          myOnClick={(e)=>this.handleClick(e,"click desde parametro de evento")}
        />

      </div>
    );
  }
}

