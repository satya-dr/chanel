import React from 'react';
import { liveShowsData } from '../../data/liveShows';
import './LiveShows.css';

const LiveShows = () => {
  const upcomingShows = liveShowsData.upcoming;

  return (
    <section className="live-shows-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">🔴 সরাসরি সম্প্রচার</div>
          <h1 className="section-title">লাইভ শো ও অনুষ্ঠান</h1>
          <p className="section-subtitle">সরাসরি উত্তরবঙ্গের প্রখ্যাত শিল্পীদের ভাওয়াইয়া সংগীতের জমজমাট আসর দেখুন</p>
        </div>

        <div className="shows-container">
          {upcomingShows.map(show => (
            <div key={show.id} className="show-card">
              <div className="show-image">
                <img src={show.image} alt={show.title} />
                <div className="live-badge">● লাইভ শীঘ্রই</div>
              </div>
              <div className="show-info">
                <h3 className="show-title">{show.title}</h3>
                <p className="show-artist">
                  <span className="artist-icon">👤</span> {show.artist}
                </p>
                <div className="show-details">
                  <div className="detail">
                    <span className="detail-icon">📅</span>
                    <span>{show.date}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">⏰</span>
                    <span>{show.time}</span>
                  </div>
                  <div className="detail">
                    <span className="detail-icon">📍</span>
                    <span>{show.venue}</span>
                  </div>
                </div>
                <button className="reminder-btn">
                  রিমাইন্ডার সেট করুন <span>🔔</span>
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