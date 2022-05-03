import React from "react"
import axios from "axios"
import Icon from "./lupa.png"
import Img from "./img.jpg"
import css from "./index.css"


export const Home = () => {
  
  return (
    <>
    <div className="Header">
      <h2>FutureEats</h2>
    </div>
    <div className="input">
      <img src={Icon} />
      <input placeholder="Restaurante"/>
    </div>
    <div className="categorias">
      <p>Burguer</p>
      <p>Asiática</p>
      <p>Massas</p>
      <p>Saudáveis</p>
      <p>Saudáveis</p>
      <p>Saudáveis</p>
      <p>Saudáveis</p>
      <p>Saudáveis</p>
      <p>Saudáveis</p>
    </div>
    <div className="cardRestaurante">
     
        <img src={Img}/>
     
      <div>
        <div>
        <p>Vinil Butantã</p>
        </div>
        <div>
        <p>50 - 60 min</p>
        <p>Frete R$6,00</p>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}