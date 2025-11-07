// src/components/Artists/Artists.js
import React from 'react';
import { artistsData } from '../../data/artists';
import './Artists.css';

const Artists = () => {
  const featuredArtists = artistsData.featured;

  return (
    <section className="artists-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">ভাওয়াইয়া শিল্পীবৃন্দ</h1>
          <p className="section-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতের সেরা শিল্পীদের সাথে পরিচিত হোন</p>
        </div>

        <div className="artists-grid">
          {featuredArtists.map(artist => (
            <div key={artist.id} className="artist-card">
              <div className="artist-image">
                <img src={artist.image} alt={artist.name} />
                <div className="artist-category">{artist.category}</div>
              </div>
              <div className="artist-info">
                <h3 className="artist-name">{artist.name}</h3>
                <p className="artist-bio">{artist.bio}</p>
                <div className="artist-stats">
                  <div className="stat">
                    <i className="fas fa-music"></i>
                    <span>{artist.songs} গান</span>
                  </div>
                  <div className="stat">
                    <i className="fas fa-users"></i>
                    <span>{artist.followers} ফলোয়ার</span>
                  </div>
                </div>
                <button className="view-profile-btn">
                  প্রোফাইল দেখুন <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artists;