import React from "react"
import axios from "axios"
import Icon from "./lupa.png"
import  "./index.css"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { goToRestaurant } from "../../router/Coordinator";




export const Home = () => {

  const navigate = useNavigate()

  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  };
 
  const URL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants'
  
  const [restaurante, SetRestaurante] =  useState("")
 
  useEffect(() => {
  axios
      .get(URL, headers)
      .then((res) => {
        SetRestaurante(res.data.restaurants)})
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
    }, []);

  const categorias = restaurante && restaurante.map((i)=>{
    return <p key={i.id}>{i.category}</p>
  })

  const card = restaurante && restaurante.map((i)=>{
    return(<>
   <div className="cardRestaurante" key={i.id} onClick={() => goToRestaurant(navigate, i.id)}>
      <img src={i.logoUrl}/>
      <div>
        <div>
           <p>{i.name}</p>
        </div>
        <div>
           <p>{i.deliveryTime} min</p>
           <p>Frete R${i.shipping}</p>
        </div>
      </div>
    </div>
    </>)
  })
  
console.log({restaurante})
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
       {categorias}
    </div>
   
    {card}
   
     </> ) 
}