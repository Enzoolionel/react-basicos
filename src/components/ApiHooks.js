import React, { useState, useEffect } from "react";
const Pokemon=({avatar, name})=>{
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}
const ApiHooks=()=>{
    const [pokemons, setPokemons] = useState([])
    // useEffect(()=>{
    //     let url = "https://pokeapi.co/api/v2/pokemon/";
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => {

    //         json.results.forEach(el => {
    //             fetch(el.url)
    //             .then(res => res.json()
    //             .then(json =>{
    //                 let pokemon ={
    //                     id:json.id,
    //                     name:json.name,
    //                     avatar:json.sprites.front_default,
    //                 };

    //                 setPokemons((pokemons)=>{return [...pokemons, pokemon]})
    //             }))
    //         });
    //     })
    // },[])

    useEffect(()=>{
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json();

                json.results.forEach(async (el) => {
                    let res = await fetch(el.url),
                    json = await res.json();

                    let pokemon ={
                        id:json.id,
                        name:json.name,
                        avatar:json.sprites.front_default,
                    };

                    setPokemons((pokemons)=>{return [...pokemons, pokemon]})
                })

        }
        getPokemons("https://pokeapi.co/api/v2/pokemon/")  
    },[])

 return(
        <>
          <h2>Peticiones apis asincronas</h2>

          {pokemons.length === 0 ? (
          <h3>Cargando...</h3>
          ):(
            pokemons.map((e)=>{
            return <Pokemon
              key={e.id}
              name={e.name}
              avatar={e.avatar}
            />

          })
          )}
        </>
      )
}
export default ApiHooks
 