// src/components/CompetitionList/CompetitionCard.js
import React from 'react';

const CompetitionCard = ({ competition }) => {
  return (
    <div className="competition-card">
      <div className="card-image">
        <i className="fas fa-trophy"></i>
      </div>
      <div className="card-body">
        <h3 className="card-title">{competition.name}</h3>
        <div className="card-details">
          <p className="card-text">
            <i className="far fa-calendar-alt"></i>
            <span className="text-label">শেষ তারিখ:</span> {competition.deadline}
          </p>
          <p className="card-text">
            <i className="fas fa-award"></i>
            <span className="text-label">পুরস্কার:</span> {competition.prize}
          </p>
          <p className="card-text">
            <i className="fas fa-users"></i>
            <span className="text-label">অংশগ্রহণ:</span> {competition.entries}
          </p>
        </div>
        <button className="btn btn-primary">এখনই অংশগ্রহণ করুন</button>
      </div>
    </div>
  );
};

export default CompetitionCard;