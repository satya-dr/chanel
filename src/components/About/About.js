// src/components/About/About.js
import React from "react";
// import logo from "./images/logo.png";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title">About Our Channel</h2>

            <p className="about-text">
              The Journey of Bhawaiya Music: From Tradition to Today Welcome to
              UJAN ETV, your ultimate destination for the enchanting world of
              Bhawaiya music! Our channel is dedicated to showcasing the rich
              cultural heritage of this traditional folk genre, which originates
              from the lush landscapes of North Bengal, India. Bhawaiya songs
              are known for their soulful melodies and poignant lyrics that
              often reflect the beauty of rural life, love, and the deep
              connection to nature.
            </p>
            <p className="about-text">
              We invite you to subscribe to UJAN ETV and become part of our
              growing community of music lovers. By hitting the notification
              bell, you'll stay updated on our latest releases, including
              exclusive performances, behind-the-scenes footage, and insightful
              discussions about the significance of Bhawaiya music in today's
              world. Together, let's celebrate the beauty of folk songs and keep
              the spirit of Bhawaiya alive for generations to come. Your support
              helps us continue this journey of musical exploration and cultural
              appreciation!
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
