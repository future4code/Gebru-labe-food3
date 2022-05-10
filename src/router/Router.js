import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login/index'
import { Home } from '../pages/Home/index'
import { Restaurant } from '../pages/Restaurant'
import { Cart } from '../pages/Cart'
import { Profile } from '../pages/Profile'
import {Cadastro} from "../pages/Login/Cadastro/Cadastro"
import { Endereco } from '../pages/Login/Endereco/Endereco'
import { Busca } from '../pages/Busca'
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home/busca' element={<Busca />} />
        <Route exact path='/restaurante/:restaurantId' element={<Restaurant />} />
        <Route exact path='/carrinho' element={<Cart />} />
        <Route exact path='/perfil' element={<Profile />} />
        <Route exact path='/cadastro' element={<Cadastro/>} />
        <Route exact path='/endereco' element={<Endereco/>} />
        <Route exact path='*' element={<h1>ERRO DE PÁGINA!!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
