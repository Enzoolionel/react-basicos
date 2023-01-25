import React, { useState } from "react";


// EVENTOS DE FORMULARIOS IMPORTANTE. 

const Formulario=()=>{

// MANERA PRINCIPAL NO RECOMENDADA SE CREAR UNA VARIABLE DE ESTADO PARA CADA ELEMENTO DEL FORM

    // const [nombre, setNombre] = useState("")
    // const [sabor, setSabor] = useState("")
    // const [lenguaje, setLenguaje] = useState("")
    // const [terminos, setTerminos] = useState(false)


// MANERA RECOMENDADA SE CREA UNA VARIABLE DE ESTADO GENERAL PARA TODO EL FOMULARIO.
    let [form, setForm] = useState({});



    const submit =(e)=>{
        // preventDefalut sirve para que al enviar el formulario no se recarge la pagina.
        e.preventDefault();
        alert("Formulario enviado")
    }


// SE CREAN 2 FUNCIONES QUE MANEJAN LA VARIABLE DE ESTADO CHANGE PARA LOS ELEMENTOS CUYA PROPIEDAD SE REFERENCIE POR SU VALOR SE PASA EL SPREED OPERADOR Y SE DESESTRUCTURA EL EVENT .TARGET . LA PROPIEDAD NAME QUE SE LE PASA A CADA ELEMENTO DEL FORM Y SE LE ASIGNA EL EVENT . TARGET CON EL NUEVO VALOR QUE SE TRAE DE VALUE
    const change =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

// EN EL CHECKED SE HACE IGUAL PERO A DIFERENCIA DE TRAER EL NUEVO VALOR CON LA PALABRA VALUE SE TRAE EL ELEMENTO CHEQUEADO CON LA PROPIEDAD CHECKED
    const checked =(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }



    return(
        <>
            {/* <h2>
                Formularios!
            </h2>
            <form onSubmit={submit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={nombre}
                onChange={(e)=>{setNombre(e.target.value)}}
                />
                <p> Elige tu js favorito</p>
                <input
                type="radio"
                name="sabor"
                id="js"
                value="js"
                onChange={(e)=>setSabor(e.target.value)}
                />
                <label
                htmlFor="js"
                />JS
                <input
                type="radio"
                name="sabor"
                id="react"
                value="react"
                onChange={(e)=>setSabor(e.target.value)}
                />
                <label
                htmlFor="react"
                />React
                <input
                type="radio"
                name="sabor"
                id="python"
                value="python"
                onChange={(e)=>setSabor(e.target.value)}
                defaultChecked
                />
                <label
                htmlFor="python"
                />Python

                <p>Elige tu lenguaje de programacion favorito</p>

                <select name="lenguaje" 
                    onChange={(e)=>setLenguaje(e.target.value)}
                    defaultValue=""
                >
                    <option value="">---</option>
                    <option value="js">js</option>
                    <option value="php">php</option>
                    <option value="py">python</option>
                    <option value="go">go</option>
                    <option value="rb">ruby</option>
                </select>
                    <br/>
                    <label 
                    htmlFor="terminos"
                    >Acepto terminos y condiciones</label>
                    <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    onChange={(e)=>setTerminos(e.target.checked)}
                    ></input>
                    <br/>
                    <input
                    type="submit"
                    />
            </form> */}


            <h2>
                Formularios!
            </h2>
            <form onSubmit={submit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                type="text" 
                id="nombre" 
                name="nombre" 

// LA PROPIEDAD VALUE SE LE PASA EL FORM DE LA VARIABLE DE ESTADO Y SU PROPIEDAD EN ESTE CASO NOMBRE AL VALOR Y AL ONCHANGE SE LE ASIGNA LAS FUNCIONES CREADAS ARRIBA PARA MANEJAR LOS ESTADOS
                value={form.nombre}
                onChange={change}
                />
                <p> Elige tu js favorito</p>
                <input
                type="radio"
                name="sabor"
                id="js"
                value="js"
                onChange={change}
                />
                <label
                htmlFor="js"
                />JS
                <input
                type="radio"
                name="sabor"
                id="react"
                value="react"
                onChange={change}
                />
                <label
                htmlFor="react"
                />React
                <input
                type="radio"
                name="sabor"
                id="python"
                value="python"
                onChange={change}
                defaultChecked
                />
                <label
                htmlFor="python"
                />Python

                <p>Elige tu lenguaje de programacion favorito</p>

                <select name="lenguaje" 
                    onChange={change}
                    defaultValue=""
                >
                    <option value="">---</option>
                    <option value="js">js</option>
                    <option value="php">php</option>
                    <option value="py">python</option>
                    <option value="go">go</option>
                    <option value="rb">ruby</option>
                </select>
                    <br/>
                    <label 
                    htmlFor="terminos"
                    >Acepto terminos y condiciones</label>
                    <input
                    type="checkbox"
                    id="terminos"
                    name="terminos"
                    onChange={checked}
                    ></input>
                    <br/>
                    <input
                    type="submit"
                    />
            </form>


        </>
    );
}


export default Formulario