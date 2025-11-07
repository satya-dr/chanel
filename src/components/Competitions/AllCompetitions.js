// src/components/Competitions/AllCompetitions.js
import React, { useState } from 'react';
import { competitionsData } from '../../data/competitions';
import { Link } from 'react-router-dom';
import './AllCompetitions.css';

const AllCompetitions = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const allCompetitions = competitionsData.all;

  // Filter competitions based on status
  const filteredCompetitions = allCompetitions.filter(competition => {
    if (activeFilter === 'all') return true;
    return competition.status === activeFilter;
  });

  const filterOptions = [
    { key: 'all', label: 'সকল' },
    { key: 'active', label: 'চলমান' },
    { key: 'upcoming', label: 'আসন্ন' },
    { key: 'completed', label: 'সম্পন্ন' }
  ];

  return (
    <section className="all-competitions-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">সকল প্রতিযোগিতা</h1>
          <p className="section-subtitle">উত্তরবঙ্গের সেরা ভাওয়াইয়া সংগীত প্রতিযোগিতাসমূহ</p>
          
          <div className="competitions-stats">
            <div className="stat-item">
              <span className="stat-number">{allCompetitions.length}</span>
              <span className="stat-label">মোট প্রতিযোগিতা</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {allCompetitions.filter(c => c.status === 'active').length}
              </span>
              <span className="stat-label">চলমান</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">
                {allCompetitions.filter(c => c.status === 'upcoming').length}
              </span>
              <span className="stat-label">আসন্ন</span>
            </div>
          </div>
        </div>

        <div className="competitions-filter">
          {filterOptions.map(option => (
            <button
              key={option.key}
              className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="all-competitions-grid">
          {filteredCompetitions.map(competition => (
            <div key={competition.id} className="competition-card-large">
              <div className="card-header">
                <div className="competition-status">
                  <span className={`status-badge ${competition.status}`}>
                    {competition.status === 'active' ? 'চলমান' : 
                     competition.status === 'upcoming' ? 'আসন্ন' : 'সম্পন্ন'}
                  </span>
                </div>
                <div className="competition-category">{competition.category}</div>
              </div>
              
              <div className="card-body">
                <h3 className="competition-title">{competition.name}</h3>
                <p className="competition-description">{competition.description}</p>
                
                <div className="competition-details">
                  <div className="detail-item">
                    <i className="far fa-calendar-alt"></i>
                    <div>
                      <span className="label">শেষ তারিখ</span>
                      <span className="value">{competition.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <i className="fas fa-award"></i>
                    <div>
                      <span className="label">পুরস্কার</span>
                      <span className="value">{competition.prize}</span>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <span className="label">অংশগ্রহণ</span>
                      <span className="value">{competition.entries} জন</span>
                    </div>
                  </div>

                  {competition.winner && (
                    <div className="detail-item">
                      <i className="fas fa-trophy"></i>
                      <div>
                        <span className="label">বিজয়ী</span>
                        <span className="value winner">{competition.winner}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Rules Section */}
                <div className="competition-rules">
                  <h4>প্রধান নিয়মাবলী:</h4>
                  <ul>
                    {competition.rules.slice(0, 3).map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-footer">
                {competition.status === 'active' && (
                  <Link to={competition.registrationLink} className="participate-btn">
                    অংশগ্রহণ করুন <i className="fas fa-arrow-right"></i>
                  </Link>
                )}
                {competition.status === 'upcoming' && (
                  <button className="notify-btn">
                    নোটিফাই করুন <i className="fas fa-bell"></i>
                  </button>
                )}
                {competition.status === 'completed' && (
                  <button className="view-result-btn">
                    ফলাফল দেখুন <i className="fas fa-trophy"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCompetitions.length === 0 && (
          <div className="no-competitions">
            <i className="fas fa-trophy no-data-icon"></i>
            <h3>কোন প্রতিযোগিতা পাওয়া যায়নি</h3>
            <p>বর্তমানে {activeFilter === 'all' ? 'কোন' : activeFilter} প্রতিযোগিতা নেই</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCompetitions;