import React from "react"
import { useForm } from "../../../hooks/useForm"
import { API } from "../../../services/Api"
import { useNavigate } from "react-router-dom"
import { goToEndereco } from "../../../router/Coordinator"
import { goToLogin } from "../../../router/Coordinator"
import logo from "../../../img/logo.png"
import iconVoltar from "../../../img/iconVoltar.svg"
import { Container , ContainerCadastro,ContainerButoonVoltar,ImgButtonVoltar,ButtonVolter,LogoPhoto,Title,TextTitler,ContainerInputNome ,LabelNome,InputNome,LabelEmail,ContainerInputEmail,InputEmail,LabelCpf,ContainerInputCpf ,InputCpf,LabelSenha,ContainerInputSenha,InputSenha,LabelConfirmaSenha,ContainerInputConfirmaSenha,InputConfirmaSenha,ContainerButton,ButtonCriar,ButtonMostraEsconderSenha,ButtonMostraEsconderConfirmeSenha,ConfirmeSenhaText,ContainerConfimeText,ConfirmeSenhaTextIvalide,LabelConfirmaSenhaIncorreta,InputConfirmaSenhaIncorreta} from "./StyledCadastro"
import { useState } from "react"
import iconEsconderSenha from "../../../img/iconEsconderSenha.svg"
import iconMostraSenha from "../../../img/iconMostraSenha.svg"

export const Cadastro = () =>{

    const navigate = useNavigate()
    const {form , onChange, clearInput} = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errPassword ,serErrPassword] = useState("")
    
 
 

    const toggleConfirmPassword = () => {
     
        setConfirmPasswordShown(!passwordShown);
      };

    const togglePassword = () => {
     
      setPasswordShown(!passwordShown);
    };
    
    const onChangeConfirmeSenha = (event) => {

        const confirmePass = event.target.value
        setConfirmPassword(confirmePass)

        if(form.password !== confirmePass){
            
            return (serErrPassword(<ConfirmeSenhaTextIvalide>Deve ser a mesma que a anterior.</ConfirmeSenhaTextIvalide>)
            
            )
        }else
        {
            return serErrPassword(<ConfirmeSenhaText>Senha confirmada.</ConfirmeSenhaText>)
           
        }   
    };

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
                            type={passwordShown ? "text" : "password"}
                            pattern={'^.{6,}'}
                            title={'A senha deve ter no mínimo 6 caracteres'}
                        />
                    </ContainerInputSenha>
             
                   <LabelConfirmaSenha>Confirmar*</LabelConfirmaSenha> 
                   <ContainerInputConfirmaSenha>
                      <InputConfirmaSenha
                            name={"confirmPassword"}
                            value={confirmPassword}
                            onChange={onChangeConfirmeSenha}
                            placeholder={"    Confirme a senha anterior"}
                            required
                            type={confirmPasswordShown ? "text" : "password"}
                            pattern={'^.{6,}'}
                            title={'A senha deve ter no mínimo 6 caracteres'}
                        /> 
                        
                    </ContainerInputConfirmaSenha>   
                   

                    <ContainerConfimeText>
                       {errPassword}
                    </ContainerConfimeText>

                    <ContainerButton> 
                        <ButtonCriar>Criar</ButtonCriar>
                    </ContainerButton>
                   
                  </form>

                  <ButtonMostraEsconderSenha onClick={()=>togglePassword()} >{passwordShown ? <img src={iconMostraSenha} alt="Mostra senha" />: <img src={iconEsconderSenha} alt="esconder senha"/> }</ButtonMostraEsconderSenha>
                        

                  <ButtonMostraEsconderConfirmeSenha onClick={()=>toggleConfirmPassword()} >{confirmPasswordShown ? <img src={iconMostraSenha} alt="Mostra senha" />: <img src={iconEsconderSenha} alt="esconder senha"/> }</ButtonMostraEsconderConfirmeSenha>
                  
                
            </ContainerCadastro>  
          
        </Container>
    )
} 