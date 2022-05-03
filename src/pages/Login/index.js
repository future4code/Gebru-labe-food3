import React from "react"
import { useNavigate } from "react-router-dom"
import { goToCadastro }from "../../router/Coordinator"
import {goToHome} from "../../router/Coordinator"
import { useForm } from "../../hooks/useForm"
import { API } from "../../services/Api"


export const Login = () => {
  const navigate = useNavigate()
  const { form , onChange ,clearInput} = useForm(
    {
      email:"",
      password:""
    }
  )

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



    return (

      <div>
        <header> 
          <h1>Future <br/>Eats</h1>
        </header>

        <p>Entrar</p>

        <form onSubmit={submitLogin}>
          <input
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={`Email`}
            required
            type={"email"}
          />

          <input
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"senha"}
            required
            type={"password"}
            // pattern={'^.{3,}'}
            // title={'A senha deve ter no mínimo 3 caracteres'}
          />

          <button>Entrar</button>

        </form>
          <p>Não possui cadastro ?</p>
          <p onClick={()=>goToCadastro(navigate)}>Clique aqui.</p>


      </div>
    )

     

    

}