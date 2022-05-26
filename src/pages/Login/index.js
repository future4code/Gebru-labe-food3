import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToCadastro }from "../../router/Coordinator"
import {goToHome} from "../../router/Coordinator"
import { useForm } from "../../hooks/useForm"
import { API } from "../../services/Api"
import {ContainerGeral,ButtonMostraSenha, ContainerGeralLogin,PhotoLogo,PText,LabelEntrar,Rectangle,ContainerText,InputPlac,RectangleSenha,InputPlacSenha,LabelSenha,ContainerButton,ButtonDiv,SubmitButto,ContainerFooter,PTextFooter,ButtonFotter} from "./StyledLogin"
import logo from "../../img/logo.png"
import {LoadingPage} from "./loadingPage/LoadingPage"
import { useState } from "react"
import iconMostraSenha from "../../img/iconMostraSenha.svg"
import iconEsconderSenha from "../../img/iconEsconderSenha.svg"

export const Login = () => {
  const navigate = useNavigate()
  const { form , onChange ,clearInput} = useForm(
    {
      email:"",
      password: ""
    }
  )
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading , setLoading] = useState(false)

  useEffect (()=>{
    setLoading(true)
    setTimeout (()=>{
      setLoading(false)
    } ,1000)
  },[])

  const togglePassword = () => {
   
    setPasswordShown(!passwordShown);
  };
    
 
  const submitLogin = (event) => {
    event.preventDefault()
    
    API.post(`/login`,form)
    .then((response)=>{
      window.localStorage.setItem("token",response.data.token)
      goToHome(navigate )
    })
    .catch ((error)=>{
      alert(`Você não é cadastrado | Cadastre-se`)
    })

    clearInput()
  }
    const PageLogin = () =>{
      return(
        
        <ContainerGeralLogin>
            
        <PhotoLogo alt="Foto-Logo" src={logo} />
    
      <ContainerText>
        <PText>Entrar</PText>
      </ContainerText>
      <form onSubmit={submitLogin}>
        <LabelEntrar>E-mail*</LabelEntrar>
        <Rectangle>
       
            <InputPlac
              name={"email"}
              value={form.email}
              onChange={onChange}
              placeholder={`    email@email.com`}
              required
              type={"email"}
            />
          
        
        </Rectangle>
        <LabelSenha>Senha*</LabelSenha>
        <RectangleSenha>
         
              <InputPlacSenha
              name={"password"}
              value={form.password}
              onChange={onChange}
              placeholder={ "   Minimo 6 caracteres"}
              required
              type={passwordShown ? "text" : "password"}

      
              // pattern={'^.{3,}'}
              // title={'A senha deve ter no mínimo 3 caracteres'}
              
            />
            
        </RectangleSenha>
        
       
        <ContainerButton> 
          <ButtonDiv>
            <SubmitButto>Entrar</SubmitButto>
          </ButtonDiv>
        </ContainerButton>
      
      </form>
      <ButtonMostraSenha onClick={()=>togglePassword()} >{passwordShown ? <img src={iconMostraSenha} alt="Mostra senha" />: <img src={iconEsconderSenha} alt="esconder senha"/> }</ButtonMostraSenha>
      <ContainerFooter>
        <PTextFooter>Não possui cadastro ?</PTextFooter>
        <ButtonFotter onClick={()=>goToCadastro(navigate)}>Clique aqui.
        </ButtonFotter>

      </ContainerFooter>
        


    </ContainerGeralLogin>

      )
    }


    return (
      
      <ContainerGeral> 
           {loading ? <LoadingPage/> : PageLogin()  }
       </ContainerGeral>
    )

     

    

}