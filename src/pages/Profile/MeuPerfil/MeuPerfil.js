import React from "react";
import { API } from "../../../services/Api";
import { MenuNavegacao } from "../../../components/MenuNavegacao";

export const MeuPerfil = () => {
  const testeApi = API.get("/api");

  return (
    <>
     
     
     
      <MenuNavegacao/>
    </>
  );
};
