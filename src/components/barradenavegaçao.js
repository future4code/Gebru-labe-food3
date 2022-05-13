import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../router/Coordinator";
import iconSeta from "../pages/Busca/seta.png";

const BarraDeNavegaçaoStyled = styled.div`
 display : flex;
 align-items: center;
 border-bottom: 2px solid #eee;
 position :fixed;
 top : 0;
 width:100vw;
 text-align:center;
 padding:15px;

`;
const IconSeta = styled.img`

width:20px;
`
const H2Endereco = styled.h2`
font-weight: normal;
margin-left:114px;


`

export const BarraDenavegaçao = () => {
  const navigate = useNavigate();

  return (
    <BarraDeNavegaçaoStyled>
      <IconSeta onClick={()=> goBack (navigate)} src={iconSeta} />
      <H2Endereco>Endereço</H2Endereco>
    </BarraDeNavegaçaoStyled>
  );
};
