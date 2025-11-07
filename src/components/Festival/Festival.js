// src/components/Festival/Festival.js (সংশোধিত)
import React from 'react';
import { festivalsData } from '../../data/festivals';
import './Festival.css';

const Festival = () => {
  const currentFestivals = festivalsData.current;

  return (
    <section className="festival-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">ভাওয়াইয়া উৎসব</h1>
          <p className="section-subtitle">ঐতিহ্যবাহী ভাওয়াইয়া সংস্কৃতির মহাআয়োজন</p>
        </div>

        <div className="festivals-container">
          {currentFestivals.map(festival => (
            <div key={festival.id} className="festival-card">
              <div className="festival-header">
                <h3 className="festival-name">{festival.name}</h3>
                <div className="festival-date">{festival.date}</div>
              </div>
              <div className="festival-location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{festival.location}</span>
              </div>
              <p className="festival-description">{festival.description}</p>
              <div className="festival-actions">
                <button className="participate-btn">
                  অংশগ্রহণ করুন <i className="fas fa-users"></i>
                </button>
                <button className="details-btn">
                  বিস্তারিত <i className="fas fa-info-circle"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festival;