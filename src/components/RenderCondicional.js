import React, { Component } from "react";

// SE CREAR LOS COMPONENETES CON FUNCIONES Y SE RETORNA EL CONTENIDO  

function Login() {
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}
function Logout() {
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}


// SE CREA EL COMPONENTE DE CLASE QUE EXTIENDE DE COMPONENT CON SU CONSTRUCTOR Y EL METODO SUPER PASANDO LA PROP COMO PARAMETRO EL THIS.STATE REPRESENTA EL ESTADO QUE CREA UN OBJETO Y SE LE PASA UNA VARIABLE DE ESTADO

class RenderCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            session : true,
        }
    }


// SE ACTUALIZA EL ESTADO DEL COMPONENTE SI ES VERDADERO O FALSO SEGUN COMPONENTES FUNCIONALES DEL PRINCIPIO DEL ARCHIVO.
    render(){
        return(
            <div>
                <h2>Render Condicional</h2>
                {this.state.session ? <Login/> : <Logout/>}
            </div>
        );
    }
}


export default RenderCondicional;