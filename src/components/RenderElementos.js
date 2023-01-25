import React, { Component } from "react";
import data from "../ayudas/data.json"


// creo el componente y le paso como link la prop web y name de el elemento que se trabaja en el .map que se esta renderizando
const ListItem= (props) =>{
  return(
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}

// se crea el componente de clase que extiende de component con su constructor y metodo super que se les pasa props como parametro; extiende state del objeto component que es un objeto

class RenderElementos extends Component{
  constructor(props){
    super(props);
    // creo una variable de estado como objeto y le paso array de estaciones
    this.state = {
      estaciones: ["primavera", "verano", "otono", "invierno"]
    }
    // creo otra variable de estado como nombre
    this.nombre = props.nombre;
  }
  render(){
    return(
      <div>
        <h2>Renderizado de elementos</h2>
        {
          // se llama al metodo .this para cambiar el estado del componente estaciones y se le hace un map donde se pasa el elemento como prop y key como keyProp.
        this.state.estaciones.map((el, key)=> <li key={key}>{el}</li>)
        }
        <h2>{this.props.nombre}</h2>

        <ul>
          {
            // data es el JSON que se trae y frameworks es el elemento que esta en el json que tiene un array de objetos, se mapea y se pasa como key el id del elemento y el elemento en la prop EL que sale arriba como {props.el.name}
            data.frameworks.map((el) => <ListItem
              key = {el.id} el = {el}
            />)
          }
        </ul>

      </div>
    );
  }
}

export default RenderElementos;