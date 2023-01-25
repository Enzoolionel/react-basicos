import React, { Component } from "react";
import EstadoHijo from "./EstadoHijo";


class Estado extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador : 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador:this.state.contador + 1
    //   });
    // }, 1000);

  }

    render(){
        return(
          <div>
            <h2>{this.props.texto}</h2>
            <p>{this.state.contador}</p>
            <EstadoHijo contadorHijo={this.state.contador}/>
          </div>
        );
    }
}


export default Estado; 