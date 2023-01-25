import React, { Component } from "react";


class Eventos extends Component{
  constructor(props){
    super(props);

    this.state ={
        contador : 0
      }

  // SE HACE EL BINDE EN EL CONSTRUCTOR ENLAZANDO THIS. Y EL NOMBRE LA FUNCION SE IGUALA A THIS. NOMBRE DE FUNCION. BIND Y SE PASA COMO PARAMTROS THIS
  this.sumar = this.sumar.bind(this);
  this.restar = this.restar.bind(this);

  }
// SE CREAN LAS FUNCIONES CORRESPONDIENTES EN ESTE CASO SUMAR Y RESTAR Y SE LLAMA AL METODO THIS CON SETSTATE PARA CAMBIAR EL ESTADO DE LA VARIABLE DE ESTADO CONTADOR QUE FUE DECLARADA MAS ARRIBA
  sumar(){
      console.log(this);
    this.setState({
      contador : this.state.contador + 1
    })
  }
  restar(){
    this.setState({
      contador : this.state.contador - 1
    })
  }

  render(){
    return(
      <div>
        <h2>Eventos componente de clase</h2>
        <nav>
        {/*SE CREAN LOS BOTONES Y SE LSE PASA COMO MANEJADOR DE EVENTOS ONCLICK PASANDO EL METODO THIS. Y EL NOMBRE DE LA FUNCION A LLAMAR */}
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    );
  }
}

export default Eventos;