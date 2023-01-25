import React, { Component } from 'react';


// SE CREA UN COMPONENTE FUNCIONAL QUE RETORNA UNA FIGURE CON UNA IMAGEN PARA RENDERIZAR EN EL DOM
function Pokemon(props){
  return(
    <figure>
      <img src={props.avatar} alt={props.name}/>
      <figcaption>{props.name}</figcaption>
    </figure>
  )
}


// SE CREA EL COMPONENE DE CLASE COMO PADRE QUE VA A RENDERIZAR LOS POQUEMONES DEL COMPONENTE POKEMON
class ApisAjax extends Component{

// SE CREA EL ESTADO POKEMONS COMO ARRAY VACIO
    state = {
      pokemons:[]
    }

    // COMPONENTDIDMOUNT PARA MONTAR LOS ARCHIVOS
    componentDidMount(){
      // SE CREA UNA VARIABLE URL PARA LLAMAR A LA API DE POKEMON
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
        .then(res => res.json())
        .then(json => {
// COM FETCH AGARRAMOS LA URL Y CON EL METODO THEN AGARRAMOS LAS RESPUESTAS DE LA URL Y LAS PASAMOS A JSON

          json.results.forEach((e)=> {
            fetch(e.url)
            .then(res => res.json())
            .then(json => {
//A ESE JSON LE HACEMOS UN FOREACH Y VOLVEMOS A LLAMAR A FETCH A CADA ELEMENTO QUE TRAEMOS DEL RESULTADO DE LA LLAMADA DE ARRIBA Y HACEMOS LO MISMO APSAMOS LOS RESULTADOS A JSON 


// CREAMOS LA VARIABLE POKEMON COMO OBJETO Y LE PASAMOS COMO PROPIEDADES EL IDE NAME Y AVATAR DEL JSON QUE TRAEMOS ARRIBA
              let pokemon = {
                id:json.id,
                name:json.name,
                avatar:json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, pokemon];
// CREAMOS UNA VARIABLE POKEMONS PARA ACTUALIZAR EL ESTADO DE LA VARIABLE DE ARRIBA

              this.setState({ pokemons })
            // ACTUALIZAMOS EL ESTADO DEL ARREGLO POKEMONS

            });
          })
        })
    }


    render(){
      return(
        <>
          <h2>Peticiones apis asincronas</h2>


{/* RENDERIZAMOS TODOS LOS POKEMONES QUE SE TRAE DE LA API Y HACEMOS UN TERNARIO QUE DIGA SI EL ARRAY ESTA EN 0 SE MUESTRA CARGANDO Y CUANDO EMPIEZAN A ENTRAR LOS ARCHIVOS DE LA API SE EMPIEZA A CARGAR Y DESAPARECE EL CARGANDO. */}
          {this.state.pokemons.length === 0 ? (
          <h3>Cargando...</h3>
          ):(
            this.state.pokemons.map((e)=>{
            return <Pokemon
              key={e.id}
              name={e.name}
              avatar={e.avatar}
            />
            // console.log(this.state.pokemons)
          })
          )}
        </>
      )
    }

}





export default ApisAjax;