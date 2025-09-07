// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="music-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="footer-brand">
              <i className="fas fa-music me-2"></i>
              Music Competitions
            </h5>
            <p className="footer-text">
              Promoting musical talent and providing a platform for artists to showcase their skills.
            </p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#competitions">Competitions</a></li>
              <li><a href="#winners">Winners</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="footer-heading">Connect With Us</h5>
            <div className="social-links">
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="contact-info">
              <p><i className="fas fa-envelope me-2"></i> contact@musiccompetitions.com</p>
              <p><i className="fas fa-phone me-2"></i> +1 (123) 456-7890</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="row">
          <div className="col-md-6">
            <p className="copyright">&copy; 2023 Music Competitions. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;