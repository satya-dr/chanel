// src/components/Header/Header.js
import React from 'react';
import logo from "../images/logo.png";

import './Header.css';

const Header = () => {
  return (
    <header className="music-header" > 
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/"style={{color:"#ffffffff"}}>
<img src={logo} alt="" />            
            UJAN ETV
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/"style={{color:"#000"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#competitions"style={{color:"#000"}}>Competitions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#winners"style={{color:"#000"}}>Winners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about"style={{color:"#000"}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact"style={{color:"#000"}}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;