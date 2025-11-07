// src/components/CompetitionList/CompetitionList.js
import React from 'react';
import { Link } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';
import { competitionsData } from '../../data/competitions';
import './CompetitionList.css';

const CompetitionList = () => {
  // শুধু featured competitions (৩টি) নেওয়া হচ্ছে
  const featuredCompetitions = competitionsData.featured;

  return (
    <section id="competitions" className="competition-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <h2 className="section-title">বর্তমান প্রতিযোগিতাসমূহ</h2>
            <p className="section-subtitle">উত্তরবঙ্গের সেরা ভাওয়াইয়া প্রতিযোগিতায় অংশ নিন</p>
          </div>
          <Link to="/competitions" className="view-all-btn">
            সকল প্রতিযোগিতা <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
        
        <div className="competition-grid">
          {featuredCompetitions.map(competition => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionList;