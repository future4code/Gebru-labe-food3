import React from "react";
import { API } from "../../../services/Api";

import { MenuNavegacao } from "../../../components/MenuNavegacao";

import { useState, useEffect} from "react";
import {BarraDenavegaçao} from "../../../components/barradenavegaçao";
import { Perfil } from "../Editarperfil/EditarPerfil";






export const MeuPerfil = () => {
  const [perfil, setPerfil] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pedidos, setPedido] = useState("");
  useEffect(()=>{
    pegarPerfil()
    pegarEndereco()
    pegarPedidos()

  },[])
  const pegarPerfil = () => {API.get("/profile", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setPerfil(response.data.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const pegarEndereco = () =>{ API.get("/profile/address", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setEndereco(response.data.address);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const pegarPedidos = () =>{ API.get("/orders/history", {
    headers: { auth: localStorage.getItem("token") },
  })
    .then((response) => {
      setPedido(response.data.orders);
    })
    .catch((error) => {
      console.log(error);
    });
  }
 console.log("perfil",perfil)
 console.log("endereco",endereco)
 console.log("pedidos",pedidos)
  return (
    <div>
      <BarraDenavegaçao pageName={"Meu Perfil"} />
      <p>{perfil.name}</p>
      <p>{perfil.email}</p>
      <p>{perfil.cpf}</p>
      <p>{endereco.street}</p>
      <p>{endereco.city}</p>
      <p>{endereco.complement}</p>
      <p>{endereco.neighbourhood}</p>
      <p>{endereco.number}</p>
      <p>{endereco.state}</p>
       <MenuNavegacao/>
    </div>

  );
};
