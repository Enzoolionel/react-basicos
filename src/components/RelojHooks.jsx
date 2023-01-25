import React, { useState, useEffect } from "react";


// SE CREA EL COMPONENTE HIJO LLAMADO HORA Y SE DESESTRUCTURA LA PROPS HORA EN VES DE PASAR PROP COMO PARAMETRO LE PASAMOS HORA ENTRE LLAVES
const Reloj = ({hora})=>{
    return(
        <h3>{hora}</h3>
    );
}

const RelojHooks =()=>{

// INICIALIZAMOS LAS CARIABLES HORA Y VISIBLE CON SUS SET Y LAS IGUALAMOS EN USESTATE NEW DATE Y FALSO
    const [hora, setHora] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

// EL USEEFFECT CREAMOS UNA VARIABLE TEMPORIZADOR VACIA Y CON EL IF DECIMOS.
    useEffect(()=>{
        let temporizador;

//  SI LA VARIABLE ES TRUE ENTONCES LE AGREGA UN INTERVALO DE UN SEGUNDO A LA VARIABLE TEMPORIZADOR 
        if(visible){
            temporizador = setInterval(() => {
                setHora(new Date().toLocaleTimeString());
            }, 1000);
        }else{
            clearInterval(temporizador);
            console.log("Elemento desmontado")
// SINO ES VISIBLE LIMPIAMOS EL INTERVALO DE LA VARIABLE E IMPRIMIMOS EN CONSOLA.
        }

        return()=>{
            clearInterval(temporizador);
// RETORNAMOS EN EL USEEFFECT LA LIMPIEZA DEL INTEVALO
        }

    },[visible])
// PASAMOS VISIBLE COMO UNA VARIABLE DE REFERENCIA PARA EL CAMBIO DEL USEEFFECT. 

    return(
        <>
            <h2>Reloj hooks</h2>
            {visible && <Reloj hora={hora}/> }     
            <button onClick={()=>{setVisible(true)}}>iniciar</button>
            <button onClick={()=>{setVisible(false)}}>detener</button>
        </>
    );
}

export default RelojHooks;