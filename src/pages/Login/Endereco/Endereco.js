import React from "react"
import { goToCadastro} from "../../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { API } from "../../../services/Api"
import { useForm } from "../../../hooks/useForm"
import { goToHome } from "../../../router/Coordinator"
import iconVoltar from "../../../img/iconVoltar.svg"
import {ContainerGeral ,ContainerEndereco,ContainerVoltar,ImgVoltar,ButtonVoltar,ContainerTitle,TextTitlerEndereco,LabelLogradouro, ContainerInputLabelLogradouro,InputLabelLogradouro,LabelNumero,ContainerInputNumero ,InputNumero,LabelComplemento, ContainerInputComplemento,InputComplemento,LabelBairro, ContainerInputBairro,InputBairro,LabelCidade,ContainerInputCidade,InputCidade,LabelEstado,ContainerInputEstado,InputEstado,ContainerButtonSalvar,ButtonSalvar} from "./StyledEndereco"

export const Endereco = () => {
    const navigate = useNavigate()
    

    const {form,onChange, clearInput} = useForm({
        street: "",
        number: "",
        neighbourhood: "",
        city: "",
        state: "",
        complement: ""
    });

    const submiEndereco = (event) => {
        event.preventDefault()
        
      const headers = {
        headers: {
          auth: localStorage.getItem("token")
        }
      };

      API.put(`/address`,form,headers)
      .then((response)=>{
          alert("conta criada com sucesso!")
          window.localStorage.setItem("token",response.data.token)
          goToHome(navigate)
          clearInput()
          
      })
      .catch((error)=>{
          console.log("Error", error.response.data)
      })
    }


    return (
        <ContainerGeral>
            <ContainerEndereco>
                <ContainerVoltar>
                     <ButtonVoltar onClick={()=> goToCadastro(navigate)}><ImgVoltar src={iconVoltar} /> </ButtonVoltar>
                </ContainerVoltar>
                <ContainerTitle>
                  <TextTitlerEndereco>Meu endereço</TextTitlerEndereco>
                </ContainerTitle>
                <div>
                    <form onSubmit={submiEndereco }>

                            <LabelLogradouro>Logradouro*</LabelLogradouro>
                        <ContainerInputLabelLogradouro>
                            <InputLabelLogradouro
                                name={"street"}
                                value={form.street}
                                onChange={onChange}
                                placeholder={"   Rua / AV"}
                                required
                                type={"text"}
                                maxLength={50}
                            />
                        </ContainerInputLabelLogradouro>
                        
                           <LabelNumero>Número*</LabelNumero>

                        <ContainerInputNumero>
                            <InputNumero
                                name={"number"}
                                value={form.number}
                                onChange={onChange}
                                placeholder={"   Numero"}
                                required
                                type={"number"}
                                
                            />
                        </ContainerInputNumero>
                             <LabelComplemento>Complemento*</LabelComplemento>
                        <ContainerInputComplemento>
                            <InputComplemento
                                name={"complement"}
                                value={form.complement}
                                onChange={onChange}
                                placeholder={"   complement / Apto/Bloclo"}
                                required
                                type={"text"}
                                maxLength={50}
                            />
                        </ContainerInputComplemento>
                             <LabelBairro >Bairro*</LabelBairro>
                         <ContainerInputBairro>
                            <InputBairro 
                                name={"neighbourhood"}
                                value={form.neighbourhood}
                                onChange={onChange}
                                placeholder={"   Bairro"}
                            
                                type={"text"}
                                maxLength={50}
                                />
                         </ContainerInputBairro> 

                             <LabelCidade >Cidade*</LabelCidade>
                        <ContainerInputCidade> 
                            <InputCidade 
                                name={"city"}
                                value={form.city}
                                onChange={onChange}
                                placeholder={"   Cidade"}
                                required
                                type={"text"}
                                maxLength={10}
                            />
                        </ContainerInputCidade>
                            <LabelEstado>Estado*</LabelEstado>
                        <ContainerInputEstado>
                            <InputEstado
                                name={"state"}
                                value={form.state}
                                onChange={onChange}
                                placeholder={"   Estado"}
                                required
                                type={"text"}
                                maxLength={10}
                            />
                        </ContainerInputEstado>
                     
                    
                        <ContainerButtonSalvar>
                            <ButtonSalvar>Salvar</ButtonSalvar>
                        </ContainerButtonSalvar>
                        

                    </form>
                </div>
               
            </ContainerEndereco>
           

        </ContainerGeral>
    )
}