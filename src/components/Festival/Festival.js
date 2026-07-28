import React from 'react';
import { festivalsData } from '../../data/festivals';
import './Festival.css';

const Festival = () => {
  const currentFestivals = festivalsData.current;

  return (
    <section className="festival-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">🎪 সংস্কৃতির মহোৎসব</div>
          <h1 className="section-title">ভাওয়াইয়া উৎসব</h1>
          <p className="section-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীত ও সংস্কৃতির মহাআয়োজন</p>
        </div>

        <div className="festivals-container">
          {currentFestivals.map(festival => (
            <div key={festival.id} className="festival-card">
              <div className="festival-header">
                <h3 className="festival-name">{festival.name}</h3>
                <div className="festival-date">
                  <span className="date-icon">📅</span>
                  <span>{festival.date}</span>
                </div>
              </div>
              <div className="festival-location">
                <span className="location-icon">📍</span>
                <span>{festival.location}</span>
              </div>
              <p className="festival-description">{festival.description}</p>
              <div className="festival-actions">
                <button className="participate-btn">
                  অংশগ্রহণ করুন <span>👥</span>
                </button>
                <button className="details-btn">
                  বিস্তারিত <span>ℹ️</span>
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