// src/components/CompetitionList/CompetitionList.js
import React from 'react';
import CompetitionCard from './CompetitionCard';
import './CompetitionList.css';

const CompetitionList = () => {
  const competitions = [
    { id: 1, name: "Spring Melody 2023", deadline: "June 30, 2023", prize: "$5,000", entries: 243 },
    { id: 2, name: "Vocal Championship", deadline: "July 15, 2023", prize: "$3,000", entries: 187 },
    { id: 3, name: "Instrumental Masters", deadline: "August 1, 2023", prize: "$4,500", entries: 156 }
  ];

  return (
    <section id="competitions" className="competition-section">
      <div className="container">
        <h2 className="section-title">Current Competitions</h2>
        <div className="row">
          {competitions.map(competition => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionList;