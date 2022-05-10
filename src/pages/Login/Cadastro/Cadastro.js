import React from "react"
import { useForm } from "../../../hooks/useForm"
import { API } from "../../../services/Api"
import { useNavigate } from "react-router-dom"
import { goToEndereco } from "../../../router/Coordinator"
import { goToLogin } from "../../../router/Coordinator"




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
        })

    }



    return (
        <div>
            
           <button onClick={()=>goToLogin(navigate)}>Voltar</button>
            <h1>cadastro</h1>

             <form onSubmit={submitCadastro}>
                <input
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder={"Nome e sobrenome"}
                    required
                    pattern={'^.{3,}'}
                    title={'seu nome deve ter no mínimo 3 caracteres'}
                    type={"name"}
                />
                <input
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    placeholder={"email@email.com"}
                    required
                    type={"email"}
                />
                <input
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    placeholder={"cpf 000.000.000.00"}
                    required
                    pattern={'^.{11,}'}
                    title={'seu cpf deve ter no mínimo 11 numeros'}
                    type={"Number"}
                    maxLength={11}
                
                />
                <input
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    placeholder={"Senha Minimo 6 caracteres"}
                    required
                    type={"password"}
                    pattern={'^.{6,}'}
                    title={'A senha deve ter no mínimo 6 caracteres'}
                />

                {/* <input
                    name={"password"}
                    value={confirmSenha}
                    onChange={onConfirmeSenha}
                    placeholder={"Confirme a senha anterior"}
                    required
                    type={"password"}
                    pattern={'^.{6,}'}
                    title={'A senha deve ter no mínimo 6 caracteres'}
                /> */}
                <button>Criar</button>

            </form>




        <button onClick={()=>goToEndereco(navigate)}> endereço </button> 
        </div>
    )
} 