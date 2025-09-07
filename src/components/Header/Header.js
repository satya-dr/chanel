// src/components/Header/Header.js
import React from 'react';
// import logo from "./images/logo.png";
import './Header.css';

const Header = () => {
  return (
    <header className="music-header" > 
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#"style={{color:"#000"}}>
            <img src="https://yt3.googleusercontent.com/TF6L5OeUtF5e0U1HFoILG8H1tskU7sg-q7quqvofRXEXx3DjIZatKj01mbRWPZRv8gaCXycbEMU=s160-c-k-c0x00ffffff-no-rj" alt="" />
            Music Competitions
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#competitions">Competitions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#winners">Winners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;