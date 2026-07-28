// src/components/Winners/WinnerHighlight.js
import React from 'react';
import './Winners.css'; 

const WinnerHighlight = ({ winner }) => {
  return (
    <div className="col-lg-12 mb-5">
      <div className="winner-highlight-card">
        <div className="highlight-image">
          <i className="fas fa-crown"></i>
        </div>
        <div className="highlight-content">
          <p className="highlight-badge">গ্র্যান্ড চ্যাম্পিয়ন</p>
          <h3 className="highlight-title">{winner.name}</h3>
          <p className="highlight-competition"><i className="fas fa-trophy me-2"></i>{winner.competition} - এর বিজয়ী</p>
          <p className="highlight-song"><i className="fas fa-music me-2"></i>বিজয়ী গান: **{winner.song}**</p>
          <a href={winner.videoLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger highlight-cta">
            <i className="fab fa-youtube me-2"></i>পারফরম্যান্স দেখুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default WinnerHighlight;