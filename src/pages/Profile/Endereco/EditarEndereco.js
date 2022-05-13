import React from "react";
import { useForm } from "../../../hooks/useForm";
import { API } from "../../../services/Api";
import { useNavigate } from "react-router-dom";
import { goToEndereco } from "../../../router/Coordinator";
import { goToLogin } from "../../../router/Coordinator";
import {ContainerEndereco} from "./styles"
import {BarraDenavegaçao} from "../../../components/barradenavegaçao"
import {InputPlac,SubmitButto,ContainerButton,LabelLogradouro, Logradouro,LabelNumero,Numero,LabelComplemento,Complemento,LabelBairro,Bairro,LabelCidade,Cidade,LabelEstado,Estado} from "./styles"

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
     

      <form onSubmit={submitEditarEndereco}>
        <LabelLogradouro>Logradouro*</LabelLogradouro>
        <Logradouro>
        <InputPlac
          name={"street"}
          value={form.street}
          onChange={onChange}
          placeholder={"Logradouro"}
          required
          // pattern={"^.{3,}"}
          // title={"Mínimo 3 caracteres"}
          type={"text"}
        />
        </Logradouro>
        
        <LabelNumero> Número* </LabelNumero>
        <Numero>
        <InputPlac
          name={"number"}
          value={form.number}
          onChange={onChange}
          placeholder={"Número"}
          required
          type={"number"}
        />
        </Numero>
        
        <LabelComplemento> Complemento</LabelComplemento>
        <Complemento>
        <InputPlac
          name={"complement"}
          value={form.complement}
          onChange={onChange}
          placeholder={"Complemento"}
          required
          type={"text"}
        />
        </Complemento>

        <LabelBairro> Bairro</LabelBairro>
        <Bairro> 
        <InputPlac
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
        </Bairro>

        <LabelCidade>Cidade</LabelCidade>
        <Cidade>
        <InputPlac
          name={"city"}
          value={form.city}
          onChange={onChange}
          placeholder={"Cidade"}
          required
          type={"text"}
        />
        </Cidade>
        
        <LabelEstado>Estado</LabelEstado>
        <Estado>
        <InputPlac
          name={"state"}
          value={form.state}
          onChange={onChange}
          placeholder={"Estado"}
          required
          type={"text"}
        />
        </Estado>
        
        <ContainerButton>
        <SubmitButto>Salvar</SubmitButto>
        </ContainerButton>
      </form>
    </ContainerEndereco>
  );
};
