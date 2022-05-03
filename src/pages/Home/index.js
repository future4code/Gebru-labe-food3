import React from "react"
import axios from "axios"
import Icon from "./lupa.png"
import Img from "./img.jpg"
import css from "./index.css"
import { useState } from "react";
import { useEffect } from "react";




export const Home = () => {
<<<<<<< HEAD
  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  };
 
  const URL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants'
  
  const [restaurante, SetRestaurante] =  useState()
 
  useEffect(() => {
  axios
      .get(URL, headers)
      .then((res) => {
        SetRestaurante(res.data)})
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
    }, []);
  
 
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
=======
  

  return 'Home'
>>>>>>> 728cdff4195e71a1009fd38c2293fd3656311e5b
}