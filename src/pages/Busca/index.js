import React from "react"
import axios from "axios"
import Icon from "./lupa.png"
import Seta from "./seta.png"
import  "./index.css"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { goToRestaurant, goToHome } from "../../router/Coordinator";




export const Busca = () => {

  const navigate = useNavigate()

  const headers = {
    headers: {
      auth: localStorage.getItem("token")
    }
  };
 
  const URL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants'
  
  const [restaurante, SetRestaurante] =  useState("")
  const [input, SetInput] = useState("")
 
 
  useEffect(() => {
  axios
      .get(URL, headers)
      .then((res) => {
        SetRestaurante(res.data.restaurants)})
      .catch((err) => {
        console.log("ERRO:", err.response);
      });
    }, []);



  const card = restaurante && restaurante
  .filter(i => {
    
    if(input){
      return i.name.toLowerCase().includes(input.toLowerCase())
    }
  }
   )
  .map((i)=>{
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

  const onchangeInput = (e) => {
       SetInput(e.target.value)
       
  }
  
  
  return (
    <>
    <div className="Header-buscar">
    <img src={Seta} onClick={() => goToHome(navigate)} />
      <h2>Busca</h2>
    </div>
    <div className="input">
      <img src={Icon} />
      <input placeholder="Restaurante" onChange={onchangeInput} value={input}/> 
    </div>
    {input === "" ? <p className="return-p">Busque por nome do restaurante</p> : card }
   
     </> ) 
}