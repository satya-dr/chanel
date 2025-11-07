// src/components/Header/Header.js (সম্পূর্ণ সংশোধিত)
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../images/logo.png";
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`bhawaiya-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Traditional Top Border */}
      <div className="header-border-top"></div>
      
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo with Cultural Design */}
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            <div className="logo-container">
              <img src={logo} alt="UJAN ETV Logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-main">UJAN ETV</span>
                <span className="logo-sub">ভাওয়াইয়ার আঙিনা</span>
              </div>
            </div>
          </Link>

          {/* Cultural Pattern Separator */}
          <div className="nav-separator"></div>

          {/* Navigation Menu */}
          <button 
            className={`navbar-toggler ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </button>

          <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              {/* Home */}
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`}
                  to="/"
                  onClick={closeMobileMenu}
                >
                  <i className="nav-icon">🏠</i>
                  <span className="nav-text">মূলপাতা</span>
                </Link>
              </li>

              {/* Music Dropdown */}
              <li className="nav-item dropdown">
                <button 
                  className={`nav-link dropdown-toggle ${activeDropdown === 'music' ? 'show' : ''}`}
                  onClick={() => toggleDropdown('music')}
                >
                  <i className="nav-icon">🎵</i>
                  <span className="nav-text">ভাওয়াইয়া গান</span>
                  <i className="dropdown-arrow">▼</i>
                </button>
                <div className={`dropdown-menu ${activeDropdown === 'music' ? 'show' : ''}`}>
                  <Link className="dropdown-item" to="/all-songs" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">🎵</i>
                    সকল গান
                  </Link>
                  <Link className="dropdown-item" to="/artists" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">👨‍🎤</i>
                    শিল্পীবৃন্দ
                  </Link>
                  <Link className="dropdown-item" to="/new-songs" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">🆕</i>
                    নতুন গান
                  </Link>
                </div>
              </li>

              {/* Competitions */}
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/competitions') ? 'active' : ''}`}
                  to="/competitions"
                  onClick={closeMobileMenu}
                >
                  <i className="nav-icon">🏆</i>
                  <span className="nav-text">প্রতিযোগিতা</span>
                </Link>
              </li>

              {/* Events Dropdown */}
              <li className="nav-item dropdown">
                <button 
                  className={`nav-link dropdown-toggle ${activeDropdown === 'events' ? 'show' : ''}`}
                  onClick={() => toggleDropdown('events')}
                >
                  <i className="nav-icon">🎭</i>
                  <span className="nav-text">আয়োজন</span>
                  <i className="dropdown-arrow">▼</i>
                </button>
                <div className={`dropdown-menu ${activeDropdown === 'events' ? 'show' : ''}`}>
                  <Link className="dropdown-item" to="/live" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">🔴</i>
                    লাইভ শো
                  </Link>
                  <Link className="dropdown-item" to="/events" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">📅</i>
                    upcoming Events
                  </Link>
                  <Link className="dropdown-item" to="/festival" onClick={closeMobileMenu}>
                    <i className="dropdown-icon">🎪</i>
                    উৎসব
                  </Link>
                </div>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  <i className="nav-icon">ℹ️</i>
                  <span className="nav-text">সম্পর্কে</span>
                </Link>
              </li>

              {/* CTA Button */}
              <li className="nav-item nav-cta">
                <Link to="/register" className="cta-button" onClick={closeMobileMenu}>
                  <i className="cta-icon">🎤</i>
                  <span>নিবন্ধন করুন</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Cultural Right Elements */}
          <div className="nav-cultural-elements">
            <div className="cultural-dot"></div>
            <div className="cultural-dot"></div>
            <div className="cultural-dot"></div>
          </div>
        </div>
      </nav>

      {/* Traditional Bottom Border */}
      <div className="header-border-bottom"></div>
    </header>
  );
};

export default Header;