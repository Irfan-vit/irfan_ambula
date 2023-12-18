// import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import About from './pages/about/About'
import ApiFetchView from './pages/apiView/ApiFetchView'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import ShopingCart from './pages/shoppingCart/ShoppingCart'
import ToDo from "./pages/toDo/ToDo";

function App() {
  return (

    <>
      <nav className="navBar">
        <Link to="/"> Home </Link> ||
        <Link to="/todo"> ToDo </Link> ||
        <Link to="/cart"> Cart </Link> ||
        <Link to="/api"> Api </Link> ||
        <Link to="/about"> About </Link> ||
        <Link to="/contact"> Contact </Link>
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