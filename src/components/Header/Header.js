import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../images/logo.png"; // আপনার ইমেজের পাথ
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // --- Auth Status Check ---
  useEffect(() => {
    const checkAuthStatus = () => {
      const status = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(status);
    };

    checkAuthStatus(); // Initial Page Load Check

    // Custom authChange Event Listen করা
    window.addEventListener('authChange', checkAuthStatus);
    window.addEventListener('storage', checkAuthStatus);

    return () => {
      window.removeEventListener('authChange', checkAuthStatus);
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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

  // --- Logout Function ---
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');

    // পুরো অ্যাপে লগআউট নোটিফিকেশন দেওয়া
    window.dispatchEvent(new Event("authChange"));

    alert('সফলভাবে লগ আউট হয়েছে!');
    closeMobileMenu();
    navigate('/');
  };

  return (
    <header className={`modern-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-glow-line"></div>
      
      <div className="container">
        <nav className="header-nav-wrapper">
          <Link className="brand-logo-link" to="/" onClick={closeMobileMenu}>
            <div className="brand-badge">
              <div className="logo-animated-ring">
                <img src={logo} alt="UJAN ETV Logo" className="brand-img" />
              </div>
              <div className="brand-details">
                <span className="brand-title">UJAN ETV</span>
                <span className="brand-tagline">ভাওয়াইয়ার আঙিনা</span>
              </div>
            </div>
          </Link>

          <button 
            className={`mobile-toggle-btn ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <div className={`nav-menu-container ${isMobileMenuOpen ? 'mobile-show' : ''}`}>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link 
                  className={`nav-anchor ${isActive('/') ? 'active-link' : ''}`}
                  to="/"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-icon">🏠</span>
                  <span className="nav-label">মূলপাতা</span>
                </Link>
              </li>

              <li className="nav-link-item has-dropdown">
                <button 
                  className={`nav-anchor dropdown-btn ${activeDropdown === 'music' ? 'expanded' : ''}`}
                  onClick={() => toggleDropdown('music')}
                >
                  <span className="nav-icon">🎵</span>
                  <span className="nav-label">ভাওয়াইয়া গান</span>
                  <span className="arrow-indicator">▾</span>
                </button>
                <div className={`custom-dropdown-menu ${activeDropdown === 'music' ? 'visible' : ''}`}>
                  <Link className="dropdown-link-item" to="/all-songs" onClick={closeMobileMenu}>
                    <span className="drop-icon">🎶</span>
                    <span>সকল গান</span>
                  </Link>
                  <Link className="dropdown-link-item" to="/artists" onClick={closeMobileMenu}>
                    <span className="drop-icon">👨‍🎤</span>
                    <span>শিল্পীবৃন্দ</span>
                  </Link>
                  <Link className="dropdown-link-item" to="/new-songs" onClick={closeMobileMenu}>
                    <span className="drop-icon">✨</span>
                    <span>নতুন গান</span>
                  </Link>
                </div>
              </li>

              <li className="nav-link-item">
                <Link 
                  className={`nav-anchor ${isActive('/competitions') ? 'active-link' : ''}`}
                  to="/competitions"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-icon">🏆</span>
                  <span className="nav-label">প্রতিযোগিতা</span>
                </Link>
              </li>

              <li className="nav-link-item has-dropdown">
                <button 
                  className={`nav-anchor dropdown-btn ${activeDropdown === 'events' ? 'expanded' : ''}`}
                  onClick={() => toggleDropdown('events')}
                >
                  <span className="nav-icon">🎭</span>
                  <span className="nav-label">আয়োজন</span>
                  <span className="arrow-indicator">▾</span>
                </button>
                <div className={`custom-dropdown-menu ${activeDropdown === 'events' ? 'visible' : ''}`}>
                  <Link className="dropdown-link-item" to="/live" onClick={closeMobileMenu}>
                    <span className="drop-icon">🔴</span>
                    <span>লাইভ শো</span>
                  </Link>
                  <Link className="dropdown-link-item" to="/events" onClick={closeMobileMenu}>
                    <span className="drop-icon">📅</span>
                    <span>আসন্ন ইভেন্ট</span>
                  </Link>
                  <Link className="dropdown-link-item" to="/festival" onClick={closeMobileMenu}>
                    <span className="drop-icon">🎪</span>
                    <span>উৎসব</span>
                  </Link>
                </div>
              </li>

              <li className="nav-link-item">
                <Link 
                  className={`nav-anchor ${isActive('/about') ? 'active-link' : ''}`}
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  <span className="nav-icon">ℹ️</span>
                  <span className="nav-label">সম্পর্কে</span>
                </Link>
              </li>

              {/* Dynamic Login/Logout Button */}
              <li className="nav-link-item cta-wrapper">
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout} 
                    className="nav-login-btn" 
                    style={{ background: '#dc3545', color: '#fff', border: 'none', cursor: 'pointer', padding: '8px 18px', borderRadius: '20px' }}
                  >
                    <span className="btn-icon">🚪</span>
                    <span>লগ আউট</span>
                  </button>
                ) : (
                  <Link to="/login" className="nav-login-btn" onClick={closeMobileMenu}>
                    <span className="btn-icon">👤</span>
                    <span>লগ ইন</span>
                  </Link>
                )}
              </li>

              <li className="nav-link-item cta-wrapper">
                <Link to="/register" className="nav-register-btn shine-btn" onClick={closeMobileMenu}>
                  <span className="btn-sparkle">🎤</span>
                  <span>নিবন্ধন করুন</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;