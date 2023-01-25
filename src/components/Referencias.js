import React, { createRef, useRef } from "react";

// EXPORTAMOS REACT Y USEREF, USEREF SIRVE PARA HACER REFERENCIA A OBJETOS DEL DOM Y ASI PODER MANIPULARLOS CREATEREF SIRVE PARA COMPONENTE DE CLASE


const Referencias = () => {

// CREAMOS 2 VARIABLES CON SIS REFERENCIAS Y LAS NOMBRAMOS COMO EL OBJETO QUE VAMOS A MANIPULAR
    let refMenu = useRef();
    let refMenuBtn = useRef();


    console.log(refMenu)
    console.log(refMenuBtn)

    const menuHamburg = () => { 
//         const $menu = document.getElementById('menu');

//         if(e.target.textContent === 'menu'){
//             e.target.textContent = 'cerrar';
//             $menu.style.display = 'Block';
//         }else{
//             e.target.textContent = 'menu';
//             $menu.style.display = 'none';
//         }


// CON LOS NOMBRES DE LAS VARIABLES .CURRENT QUE ES UNA PROPIEDAD DEL USEREF CAMBIAMOS LAS PROPIEDADES DE LOS OBJETOS QUE ESTAMOS MANIPULANDO 
        if(refMenuBtn.current.textContent === 'menú'){
            refMenuBtn.current.textContent = 'cerrar';
            refMenu.current.style.display = 'Block';
        }else{
            refMenuBtn.current.textContent = 'menú';
            refMenu.current.style.display = 'none';
        }
}


    return(
        <>
            <h2>
                Referencias!
            </h2>

            <button ref={refMenuBtn} onClick={menuHamburg}>menu</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="#">Session1</a>
                <br/>
                <a href="#">Session2</a>
                <br/>
                <a href="#">Session3</a>
                <br/>
                <a href="#">Session4</a>
                <br/>
                <a href="#">Session5</a>
            </nav>
        </>
    );
}


export default Referencias;