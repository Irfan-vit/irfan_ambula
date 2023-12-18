// import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
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
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/category"> To </Link> ||
        <Link to="/cart">Cart </Link> ||
        <Link to="/wishlist">WishList </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/cart" element={<ShopingCart />} />
        <Route path="/api" element={<ApiFetchView />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App