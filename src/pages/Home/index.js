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
  const [input, SetInput] = useState("")
  const [categ, SetCateg] = useState('Árabe')
 
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
      console.log("foi pro if")
      return i.name.toLowerCase().includes(input.toLowerCase())
    
    } else if (categ == i.category) {
      console.log("foi pro else/if")
      return i.category  
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
  const onClickCat = (category) => {
    
    SetCateg(category)
 
    console.log({categ})
   
  }
  const categorias = restaurante && restaurante.map((i)=>{
    return <p key={i.id} onClick={() => onClickCat(i.category)} >{i.category}</p>
  })

  
console.log({restaurante})
  return (
    <>
    <div className="Header">
      <h2>FutureEats</h2>
    </div>
    <div className="input">
      <img src={Icon} />
      { <input placeholder="Restaurante" onChange={onchangeInput} value={input}/> }
    </div>
    <div className="categorias">
     {/*  <button  onClick={()=> SetCateg("")} >Todos</button> */}
       {categorias}
    </div>
   
    {card}
   
     </> ) 
}