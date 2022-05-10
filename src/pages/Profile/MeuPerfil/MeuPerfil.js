import React from "react";
import { API } from "../../../services/Api";

export const MeuPerfil = () => {
  const testeApi = API.get("/api");

  return (
    <>
      <h1>MeuPerfil</h1>
    </>
  );
};
