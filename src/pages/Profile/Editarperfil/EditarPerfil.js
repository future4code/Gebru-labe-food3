import React from "react";
import { useForm } from "../../../hooks/useForm";
import { API } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { goToEndereco } from "../../../router/Coordinator";
import { goToLogin } from "../../../router/Coordinator";
import {BarraDenavegaçao} from "../../../components/barradenavegaçao"
import{ LabelNome,Nome,LabelEmail,Email,LabelCpf,CPF} from "./styledEditarPerfil";

export const Perfil = () => {
  const navigate = useNavigate();
  const { form, onChange, clearInput } = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const submitPerfil = (event) => {
    event.preventDefault();

    API.put(`/profile`, form)
      .then((response) => {
        window.localStorage.getItem("token", response.data.token);
        alert("Perfil criado com sucesso");
        goToEndereco(navigate);
        clearInput();
      })
      .catch((error) => {
        alert(`Erro`, error.response.data);
      });
  };

  return (
    <>
      <BarraDenavegaçao
      pageName={"Editar"}
      />
      <form onSubmit={submitPerfil}>
        <LabelNome>Nome</LabelNome>
        <Nome>
        <input
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder={"Nome e Sobrenome"}
          required
          pattern={"^.{3,}"}
          title={"Mínimo 3 caracteres"}
          type={"name"}
        />
        </Nome>
        <LabelEmail>Email</LabelEmail>
        <Email>
        <input
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"email@email.com"}
          required
          type={"email"}
        />
        </Email> 

      <LabelCpf>CPF</LabelCpf>
      <CPF>
        <input
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          placeholder={"cpf 000.000.000.00"}
          required
          pattern={"^.{11,}"}
          title={"seu cpf deve ter no mínimo 11 numeros"}
          type={"Number"}
          maxLength={11}
        />
        </CPF>
        <button>Salvar</button>
      </form>
    </>
  );
};
