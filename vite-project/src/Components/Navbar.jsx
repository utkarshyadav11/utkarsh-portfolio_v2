import React from 'react'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "../Components/Icons";
const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/about">About</NavLink>
          </li>

          <li className="nav-item">
             <NavLink className="nav-link" to="/contact" >Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="iconbox">
      <a className="icons" href="https://www.linkedin.com/in/utkarsh-yadav-439bb7176/" target={"_blank"}>
        <Linkedin />
      </a>
      <a className="icons" href="https://github.com/utkarshyadav11">
        <Github />
      </a>
      <a className="icons1" href="https://twitter.com/iUtkarshyadav11" target={"_blank"}>
        <Twitter />
      </a>
    </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
