// src/components/LiveShows/LiveShows.js (সংশোধিত)
import React from 'react';
import { liveShowsData } from '../../data/liveShows';
import './LiveShows.css';

const LiveShows = () => {
  const upcomingShows = liveShowsData.upcoming;

  return (
    <section className="live-shows-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">লাইভ শো</h1>
          <p className="section-subtitle">সরাসরি ভাওয়াইয়া সংগীতের আসর</p>
        </div>

        <div className="shows-container">
          {upcomingShows.map(show => (
            <div key={show.id} className="show-card">
              <div className="show-image">
                <img src={show.image} alt={show.title} />
                <div className="live-badge">লাইভ শীঘ্রই</div>
              </div>
              <div className="show-info">
                <h3 className="show-title">{show.title}</h3>
                <p className="show-artist">{show.artist}</p>
                <div className="show-details">
                  <div className="detail">
                    <i className="far fa-calendar"></i>
                    <span>{show.date}</span>
                  </div>
                  <div className="detail">
                    <i className="far fa-clock"></i>
                    <span>{show.time}</span>
                  </div>
                  <div className="detail">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{show.venue}</span>
                  </div>
                </div>
                <button className="reminder-btn">
                  রিমাইন্ডার সেট করুন <i className="fas fa-bell"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveShows;