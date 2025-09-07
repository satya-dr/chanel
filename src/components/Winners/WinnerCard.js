// src/components/Winners/WinnerCard.js
import React from 'react';

const WinnerCard = ({ winner }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card winner-card h-100">
        <div className="card-image">
          <i className="fas fa-award"></i>
        </div>
        <div className="card-body">
          <h3 className="card-title">{winner.name}</h3>
          <p className="card-text">Competition: {winner.competition}</p>
          <p className="card-text">Winning Song: {winner.song}</p>
          <button className="btn btn-outline-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;