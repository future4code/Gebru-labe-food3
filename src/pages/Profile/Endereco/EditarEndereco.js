import React from "react";
import { useForm } from "../../../hooks/useForm";
import { API } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { goToEndereco } from "../../../router/Coordinator";
import { goToLogin } from "../../../router/Coordinator";
import {ContainerEndereco} from "./styles"
import {BarraDenavegaçao} from "../../../components/barradenavegaçao"
import { FormContainer } from "./styles";

export const EditarEndereco = () => {
  const navigate = useNavigate();
  const { form, onChange, clearInput } = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const submitEditarEndereco = (event) => {
    event.preventDefault();

    API.put(`/address`, form)
      .then((response) => {
        window.localStorage.getItem("token", response.data.token);
        alert("Endereço editado com sucesso");
        goToEndereco(navigate);
        clearInput();
      })
      .catch((error) => {
        alert(`Erro`, error.response.data);
      });
  };

  return (
    <ContainerEndereco>
      <BarraDenavegaçao>Endereço</BarraDenavegaçao>
      {/* <button onClick={() => goToLogin(navigate)}>Voltar</button> */}
      <h1>Endereço</h1>

      <FormContainer onSubmit={submitEditarEndereco}>
        <input
          name={"street"}
          value={form.street}
          onChange={onChange}
          placeholder={"Logradouro"}
          required
          // pattern={"^.{3,}"}
          // title={"Mínimo 3 caracteres"}
          type={"text"}
        />
        <input
          name={"number"}
          value={form.number}
          onChange={onChange}
          placeholder={"Número"}
          required
          type={"number"}
        />
        <input
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          placeholder={"Complemento"}
          required
          type={"text"}
        />
        <input
          name={"neighbourhood"}
          value={form.neighbourhood}
          onChange={onChange}
          placeholder={"Bairro"}
          required
          // pattern={"^.{11,}"}
          // title={"seu cpf deve ter no mínimo 11 numeros"}
          type={"text"}
          // maxLength={11}
        />
        <input
          name={"city"}
          value={form.city}
          onChange={onChange}
          placeholder={"Cidade"}
          required
          type={"text"}
        />
        <input
          name={"state"}
          value={form.state}
          onChange={onChange}
          placeholder={"Estado"}
          required
          type={"text"}
        />

        <button>Salvar</button>
      </FormContainer>
    </ContainerEndereco>
  );
};
