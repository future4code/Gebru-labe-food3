import React from "react"
import { useForm } from "../../../hooks/useForm"
import { API } from "../../../services/Api"
import { useNavigate } from "react-router-dom"
import { goToEndereco } from "../../../router/Coordinator"
import { goToLogin } from "../../../router/Coordinator"
import logo from "../../../img/logo.png"
import iconVoltar from "../../../img/iconVoltar.svg"
import { Container , ContainerCadastro,ContainerButoonVoltar,ImgButtonVoltar,ButtonVolter,LogoPhoto,Title,TextTitler,ContainerInputNome ,LabelNome,InputNome,LabelEmail,ContainerInputEmail,InputEmail,LabelCpf,ContainerInputCpf ,InputCpf,LabelSenha,ContainerInputSenha,InputSenha,LabelConfirmaSenha,ContainerInputConfirmaSenha,InputConfirmaSenha,ContainerButton,ButtonCriar, } from "./StyledCadastro"




export const Cadastro = () =>{

    const navigate = useNavigate()
    const {form , onChange, clearInput} = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })


    const submitCadastro = (event) => {
        event.preventDefault()

        API.post(`/signup`,form)
        .then((response)=>{
            window.localStorage.setItem("token",response.data.token)
            alert("Cadastro Criado com sucesso")
            goToEndereco(navigate)
            clearInput()
        })
        .catch((error)=>{
            alert(`Erro`, error.response.data)
            console.log(error.response.data)
        })

    }



    return (
        <Container>
            <ContainerCadastro> 
                <ContainerButoonVoltar>
                <ButtonVolter onClick={()=>goToLogin(navigate)}><ImgButtonVoltar src={iconVoltar}/></ButtonVolter>
                </ContainerButoonVoltar>

                <LogoPhoto src={logo} />
                <Title > 
                    <TextTitler>Cadastro</TextTitler>
                </Title>
                

                <form   onSubmit={submitCadastro}>
                    
                         <LabelNome>Nome*</LabelNome>
                    
                    
                <ContainerInputNome >
                    <InputNome
                            name={"name"}
                            value={form.name}
                            onChange={onChange}
                            placeholder={"    Nome e sobrenome"}
                            required
                            pattern={'^.{3,}'}
                            title={'seu nome deve ter no mínimo 3 caracteres'}
                            type={"name"}
                        />   
                </ContainerInputNome>  
                   
                    <LabelEmail>E-mail*</LabelEmail>
                 <ContainerInputEmail>
                    <InputEmail
                            name={"email"}
                            value={form.email}
                            onChange={onChange}
                            placeholder={"   email@email.com"}
                            required
                            type={"email"}
                        />
                </ContainerInputEmail>   
                    
                    <LabelCpf>CPF*</LabelCpf>
                 <ContainerInputCpf >
                    <InputCpf
                            name={"cpf"}
                            value={form.cpf}
                            onChange={onChange}
                            placeholder={"   cpf 000.000.000.00"}
                            required
                            pattern={'^.{11,}'}
                            title={'   seu cpf deve ter no mínimo 11 numeros'}
                            type={"Number"}
                            maxLength={11}
                        
                        />
                 </ContainerInputCpf>   
                    
                    <LabelSenha>Senha*</LabelSenha>
                    <ContainerInputSenha>
                        <InputSenha
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            placeholder={"   Senha Minimo 6 caracteres"}
                            required
                            type={"password"}
                            pattern={'^.{6,}'}
                            title={'A senha deve ter no mínimo 6 caracteres'}
                        />
                    </ContainerInputSenha>
                   
                    {/* <LabelConfirmaSenha>Confirmar*</LabelConfirmaSenha> */}
                    {/* <ContainerInputConfirmaSenha>
                        <InputConfirmaSenha
                            name={"password"}
                            value={form.password}
                            onChange={onChange}
                            placeholder={"    Confirme a senha anterior"}
                            required
                            type={"password"}
                            pattern={'^.{6,}'}
                            title={'A senha deve ter no mínimo 6 caracteres'}
                        />
                    </ContainerInputConfirmaSenha> */}
                    <ContainerButton> 
                        <ButtonCriar>Criar</ButtonCriar>
                    </ContainerButton>
                   

                  </form>




                
                
            </ContainerCadastro>  
          
        </Container>
    )
} 