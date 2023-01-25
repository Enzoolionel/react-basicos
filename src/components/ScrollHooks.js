import React, { useState, useEffect } from "react";
// SE IMPORTA REACT Y USEEFFECT Y USESTATE PARA USAR EN EL COMPONENTE

const ScrollHooks = () => {

    const [scrollY, setScrollY] = useState(0)


// Y EL USEEFFECT CON COMA Y VALOR EN EL ARRAY QUE SE LE PASA QUIERE DECIR QUE LA FUNCION SE VA A AJECUTAR CUANDO OCURRA UN CAMBIO EN EL VALOR PASADO AL ARRAY.
    useEffect(() => {
        console.log("moviendo scroll")

    const detectarScroll= () => {
        setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll",detectarScroll)

    return () => {
        window.removeEventListener("scroll",detectarScroll)
        console.log("fase de desmontaje")
         

    }

    },[scrollY])    
    // !-----------------

// FASE DE MONTAJE, SE CREA USEEFFECT Y EN LA FUNCION QUE SE PASA COMO COLLBACK SE CREA EL CUERPO DE LA FUNCION USEEFFECT.
// PONIENDO AL FINAL UNA COMA Y PASANDO ARRAY VACIO ESTO QUIERE DECIR QUE LA FASE DE MONTAJE SE VA A EJECUTAR UNA VEZ AL CARGAR LOS DATOS
    useEffect(() => {
        console.log("fase de montaje")

    },[])   
    // !---------- 

// LA FASE DE ACTUALIZACION SE PASA LO MISMO QUE ARRIBA SOLAMENTE QUE NO SE PASA ARRAY VACIO AL FINAL, ESTO QUIERE DECIR QUE LA FUNCION VA A ESTAR EJECUTANDOCE CADA VEZ QUE OCURRA UN CAMBIO EN EL COMPONENTE, !!!NO RECOMENDADO¡¡¡
    useEffect(() => {
        console.log("fase de actualizacion")

    })
    // !--------------

// FASE DE DESMONTAJE, SE RETORNA UNA FUNCION Y REACT DETECTA LA FUNCION Y SABE QUE ES LA FASE DE DESMONTAJE.
    useEffect(() => {
        return () => {
            console.log("fase de desmontaje")
        }
    })

    return(

        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>

    );
}

export default ScrollHooks;
