import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../Pages/Home/Home"
import Perfil from "../Pages/Perfil/Perfil"
import Carrinho from "../Pages/Carrinho/Carrinho"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/perfil" element={<Perfil/>} />              
                <Route exact path="/carrinho" element={<Carrinho/>} />
                <Route exact path="*" element={<><h1>ERRO DE PAGINA!!</h1> </>}  />             
            </Routes>
        </BrowserRouter>
    )
}

export default Router