import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import { goBack } from "../router/Coordinator";

const BarraDeNavegaçaoStyled = styled.div`
background-color:${props=>props.theme.color.primary};
width:100%;
height:${props => props.height};


`;
 
export const BarraDenavegaçao = () => {
  const navigate = useNavigate();
  

  return (
      <BarraDeNavegaçaoStyled height='50px'>      
<button onClick = {() => goBack (navigate)}> Voltar </button></BarraDeNavegaçaoStyled>

    
  )
};
