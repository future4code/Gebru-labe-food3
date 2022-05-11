import React from "react";
import { API } from "../../../services/Api";
import{useState} from "react";


export const MeuPerfil = () => {
  const [perfil, setPerfil]= useState("")
  const [endereco, setEndereco]= useState("")
  const [pedidos, setPedido] = useState("")
  const pegarPerfil = API.get("/profile",{headers:{auth:localStorage.getItem("token")
}})
  .then((response) => {setPerfil(response.data.user)})
  .catch((error) => {console.log(error)})

 
const pegarEndereco = API.get("/profile/address",{headers:{auth:localStorage.getItem("token")}})
  .then((response) => {setEndereco(response.data.address)})
  .catch((error) => {console.log(error)})

  const pegarPedidos = API.get("/orders/history",{headers:{auth:localStorage.getItem("token")}})
  .then((response) => {setPedido(response.data.orders)})
  .catch((error) => {console.log(error)})

   

  return (
<div>

      <h1>MeuPerfil</h1>
      <div> carddadosusuarios</div>
      <div>cardendereço</div>
      <div>históricode pedidos</div>
</div>
  );
  };
