// src/components/About/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">About Our Channel</h2>
            <p className="about-text">
              We are dedicated to promoting musical talent from around the world. Our competitions 
              are open to all genres and experience levels. We believe in providing a platform for 
              artists to showcase their skills and gain recognition in the music industry.
            </p>
            <p className="about-text">
              Our panel of judges consists of industry professionals with years of experience in 
              music production and performance. We're committed to fairness and transparency in 
              all our competitions.
            </p>
            <div className="stats row mt-5">
              <div className="col-4 text-center">
                <h3 className="stat-number">50+</h3>
                <p className="stat-label">Competitions</p>
              </div>
              <div className="col-4 text-center">
                <h3 className="stat-number">5,000+</h3>
                <p className="stat-label">Participants</p>
              </div>
              <div className="col-4 text-center">
                <h3 className="stat-number">$100k+</h3>
                <p className="stat-label">In Prizes</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-image">
              <i className="fas fa-users"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;