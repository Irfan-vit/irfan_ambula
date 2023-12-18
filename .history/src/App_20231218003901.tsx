// import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import About from './pages/about/About'
import ApiFetchView from './pages/apiFetchView/ApiFetchView'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import ShopingCart from './pages/shoppingCart/ShoppingCart'
import ToDo from './pages/toDo/ToDo'

function App() {
  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <About />
        <ApiFetchView />
        <Contact />
        <Home />
        <ShopingCart />
        <ToDo />
      </Routes>
    </>
  )
}

export default App