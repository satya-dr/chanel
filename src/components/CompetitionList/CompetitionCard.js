// src/components/CompetitionList/CompetitionCard.js
import React from 'react';

const CompetitionCard = ({ competition }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card competition-card h-100">
        <div className="card-image">
          <i className="fas fa-trophy"></i>
        </div>
        <div className="card-body">
          <h3 className="card-title">{competition.name}</h3>
          <p className="card-text">Deadline: {competition.deadline}</p>
          <p className="card-text">Prize: {competition.prize}</p>
          <p className="card-text">Entries: {competition.entries}</p>
          <button className="btn btn-primary">Participate</button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;