// src/components/Winners/Winners.js
import React from 'react';
import WinnerCard from './WinnerCard';
import './Winners.css';

const Winners = () => {
  const winners = [
    { id: 1, name: "Sarah Johnson", competition: "Winter Beat 2022", song: "Dreaming Away", image: "winner1" },
    { id: 2, name: "Michael Chen", competition: "Autumn Strings 2022", song: "Mountain Echo", image: "winner2" },
    { id: 3, name: "Lily Davis", competition: "Summer Vocals 2022", song: "Ocean Breeze", image: "winner3" }
  ];

  return (
    <section id="winners" className="winners-section">
      <div className="container">
        <h2 className="section-title">Recent Winners</h2>
        <div className="row">
          {winners.map(winner => (
            <WinnerCard key={winner.id} winner={winner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;