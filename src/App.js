import React, { useState } from 'react'
import Home from './components/home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Cart from './components/cart/Cart';
import { createContext } from 'react';






const App = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;
