import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Restaurant } from '../pages/Restaurant'
import { Cart } from '../pages/Cart'
import { Profile } from '../pages/Profile'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/restaurante' element={<Restaurant />} />
        <Route exact path='/carrinho' element={<Cart />} />
        <Route exact path='/perfil' element={<Profile />} />
        <Route exact path='*' element={<h1>ERRO DE PÁGINA!!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
