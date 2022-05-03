import React from "react"
import { goToCadastro} from "../../../router/Coordinator"
import { useNavigate } from "react-router-dom"
import { API } from "../../../services/Api"
import { useForm } from "../../../hooks/useForm"
import { goToHome } from "../../../router/Coordinator"



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
        <div>
            <button onClick={()=> goToCadastro(navigate)}>Voltar </button>


            <h1>Endereço</h1>

            <form onSubmit={submiEndereco }>
                <input
                    name={"street"}
                    value={form.street}
                    onChange={onChange}
                    placeholder={"Rua / AV"}
                    required
                    type={"text"}
                    maxLength={50}
                />
                <input
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    placeholder={"Numero"}
                    required
                    type={"number"}
                    
                />

                <input
                     name={"complement"}
                     value={form.complement}
                     onChange={onChange}
                     placeholder={"complement / Apto/Bloclo"}
                     required
                     type={"text"}
                     maxLength={50}
                />
                <input
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    placeholder={"Bairro"}
                
                    type={"text"}
                    maxLength={50}
                />
                <input
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    placeholder={"Cidade"}
                    required
                    type={"text"}
                    maxLength={10}
                />
                <input
                    name={"state"}
                    value={form.state}
                    onChange={onChange}
                    placeholder={"Estado"}
                    required
                    type={"text"}
                    maxLength={10}
                />
               

                <button>Salvar</button>

            </form>

        </div>
    )
}