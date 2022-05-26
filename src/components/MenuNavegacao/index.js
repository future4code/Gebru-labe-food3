import React from "react"
import { useState } from "react"
import  "./index.css"
import { useNavigate } from 'react-router-dom'
import casaIcon from "./casa.png"
import carrinhoIcon from "./carrinho.png"
import usuarioIcon from "./usuario.png"
import { goToHome} from "../../router/Coordinator"
import { goToCart } from "../../router/Coordinator"
import { goToProfile } from "../../router/Coordinator"
import casaColorida from "./casa-colorida.png"
import usuarioColorido from "./usuario-colorido.png"
import carrinhoColorido from "./carrinho-colorido.png"

export const MenuNavegacao= () => {

  const navigate = useNavigate()
  

  return (
    <div className="menu-navegacao">
   
     <img src={casaIcon}  onClick={()=>goToHome(navigate)}/>
    
    
     <img src={carrinhoIcon}  onClick={()=> goToCart(navigate)}/>
     
    
     <img src={usuarioIcon}  onClick={()=>goToProfile(navigate)}/>
     
     </div> ) 
}