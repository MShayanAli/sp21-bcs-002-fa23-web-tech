import React from 'react'
import '../App.css';
import logo from "../assets/logo.png"
import { Outlet, Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div>
       <section id="header">
      <a href="#">
      <img src={logo} class="logo" alt=""/>
      </a>
      <div>
        <ul id="navbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          {/* <li><Link to="/Blog">Blog</Link></li> */}
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Login">Login</Link></li>
          <li><Link to="/Signup">Signup</Link></li>
          {/* <li><Link to="/Contact">Contact</Link></li> */}
          <li><Link to="/Cart"><i class="fa-solid fa-bag-shopping"></i></Link></li>
        </ul>
      </div>
    </section>
    </div>
  )
}
