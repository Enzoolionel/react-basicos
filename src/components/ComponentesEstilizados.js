// clase 24 estilos

import React from "react";
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";


const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme })=>theme.color};
    background-color: ${({ theme })=>theme.bgColor};
`

const BoxProvider = styled(Box)`
    border-radius: 25px;
`;

const GlobalStyle = createGlobalStyle`
    h2{
        padding: 2rem;
        background-color: #fff;
        color: #61dafb;
        text-transform: uppercase;
    }
`;



const ComponenteEstilizado =()=>{

    let mainColor = "#db7093",
        mainAlphaColor80 = "#db709380"

    const setTansition = (time)=> `all ${time} ease`

    let fadeIn = keyframes`
        0%{
            transform:translateX(-100%);
        }
        100%{
            transform:translateX(0%);
        }
    `; 

    let MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color: ${({color}) => color || "#0f0"};
        background-color: ${mainColor};
        transition: ${setTansition(".5s")};
        animation : ${fadeIn} 1s ease-out;

        ${({ isBoton })=> isBoton && css`
            margin: auto;
            max-width: 50%;
            border-radius: .25rem;
            cursor: pointer;
            border: 1px solid black;
            color: #000;

        ` }

        &:hover{
            background-color: ${mainAlphaColor80};
        }
    `;

    let dark = {
        color:"red",
        bgColor:"black"
    }
    let light ={
        color:"black",
        bgColor:"red"
    }



    return(
        <>
        <GlobalStyle/>
            <h2>Styled-Components</h2>
 
            <MyH3>Titulo estilizado con styled-components</MyH3>
            <MyH3 color="#f00">Titulo estilizado con styled-components</MyH3>
            <MyH3 color="#61dafb" isBoton>Titulo estilizado con styled-components</MyH3>


            <ThemeProvider theme={light}>
              <Box>Soy una caja light</Box>
              <BoxProvider>Soy una caja light</BoxProvider>
            </ThemeProvider>            
            <ThemeProvider theme={dark}>
              <Box>Soy una caja dark</Box>
              <BoxProvider>Soy una caja dark</BoxProvider>

            </ThemeProvider>
        </>
    );
}

export default ComponenteEstilizado;