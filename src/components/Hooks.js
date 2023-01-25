import React, { useState } from "react";
// si importa react con useState desestructurado.


// function Boton(){
//     const [log, setLog] = useState(false);

//     const logIn = () => {setLog(true)}
//     const logOut = () => {setLog(false)}

//     return(
//         <button onClick={(log) ? logOut : logIn}>{(log) ?"Salir" : "Ingresar"}</button>
//     );
// }

const Hooks = (props) =>{

// se desesctructura el useState como array de 2 valores , el primer valor es la pripiedad que le tenemos que dar nosotros, el segundo valor es una funcion que cambia el primer valor pasado el nombre de la funcion debe ser igual que el primero valor con SET por delante.
    const [contador, setContador] = useState(0);


// se crean las funciones dentro del componente funcional, las funciones no son metodos sino funciones por eso llevan siempre la palabra const por delante, en el set contador no se habren llaves sino se pasa el nuevo valor dentro del parentesis.
    const sumar = ( ) => {setContador(contador + 1)}
    const restar = ( ) => {setContador(contador - 1)}

    return(
        <>
            <h3>{props.titulo}</h3>
            <h3>{contador}</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>

        </>
    );
}


// defaultProps sirve para generar propiedades por defecto en las props del componente.
// Hooks.defaultProps={
//     titulo : " Titulo por defecto "
// }
// Boton.defaultProps={
//     texto : " Oprimir "
// }


export default Hooks;