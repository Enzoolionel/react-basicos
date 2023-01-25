import React from "react";
import PropTypes from "prop-types";



// class Header extends Component{
//     render(){
//         return <h1>{this.props.texto}</h1>
//     }
// }

const Header = props => { 
    return(
            <div>
        <ul>
            <li>{props.texto}</li>
             <li>{props.numero}</li>
            {/*<li>{props.bool ? "verdadero" : "falso"}</li>
            <li>{props.array}</li>
            <li>{props.obj.nombre}</li>
            <li>{props.array.map(props.function).join(", ")}</li>
            <li>{props.elemento}</li>
            <li>{props.componente}</li> */}
        </ul>
    </div>
    );
} 


Header.defaultProps={
    texto: "Texto por defecto desde el Header"
}

Header.protoTypes = {
    numero: PropTypes.number.isRequired,
}

export default Header;