import React, { Component } from "react";


class Reloj extends Component{
  constructor(props){
    super(props);
  }
  componentWillUnmount(){
    console.log(3," el componente fue eliminado del DOM")
  }
  render(){
    return <h3>{this.props.hora}</h3>
  }
}


class CicloVida extends Component{
  constructor(props){
    super(props);
    // console.log(0,"el componente se inicializa no esta en el dom")
    this.state={
      hora : new Date().toLocaleTimeString(),
      visible:false
    }
    this.temporizador = null;
  }
    // COMPONENTDIDMOUNT SIRVE PARA PETICIONES ASINC
    componentDidMount(){
      console.log(1,"componente inizializado pero no en dom")
    }
    componentDidUpdate(prevProps, prevState){ 
      console.log(2, "el estado o las pros del componente han cambiado")

// prevprops son parametros que se puede usar por defecto que trae el metodo, para...
// prevprops sirve para ver las propiedades previas al cambio del componente que esta cambiando
// prevstate sirve para ver el estado previo al cambio del componente que esta cambiando
      console.log(prevProps)
      console.log(prevState)
    }




    // SE CREA UN METODO SIEMPRE FUERA DEL CONSTRUCTOR ES JS ORIENTADO A OBJS.

    // SE CREA EL METODO TICTAC Y DENTRO SE LLAMA MEDIANTE THIS A LA VARIABLE DE ESTADO TEMPORIZADOR Y SE LE ASIGNA EL VALOR CON EL SETINTERVAL DONDE THIS.SETSTATE ASIGNA EL VALOR NUEVO A HORA
    tictac =() =>{
      this.temporizador = setInterval(() => {
        this.setState({
          hora : new Date().toLocaleTimeString()
        })
      }, 1000);
    };
    // METODOS MINIFICADOS PARA MEJOR LECTURA INICIAR LLAMA AL METODO TICTAC
    iniciar =()=> {
      this.tictac()
      this.setState({
        visible:true
      })    
    };
// METODO DETENER LIMPIA EL INTERVALO DEL TEMPORIZADOR
    detener =()=> { 
      clearInterval(this.temporizador)
        this.setState({
          visible:false
      })
    }
  render() {
    // console.log(4,"el componente se dibuja o redibuja si hay cambios")
    return (
      <>
        <h2> CICLO DE VIDA DE COMPONENTES DE CLASE</h2>
        {this.state.visible && <Reloj hora={this.state.hora}/> }     
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>

      </>
    );
  }
}

export default CicloVida;