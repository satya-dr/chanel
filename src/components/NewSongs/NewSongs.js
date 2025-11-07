// src/components/NewSongs/NewSongs.js
import React from 'react';
import { newSongsData } from '../../data/newSongs';
import './NewSongs.css';

const NewSongs = () => {
  const recentSongs = newSongsData.recent;

  return (
    <section className="new-songs-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">নতুন গান</h1>
          <p className="section-subtitle">সদ্য প্রকাশিত ভাওয়াইয়া গানগুলো শুনুন</p>
        </div>

        <div className="songs-grid">
          {recentSongs.map(song => (
            <div key={song.id} className="song-card">
              <div className="song-image">
                <img src={song.image} alt={song.title} />
                <div className="song-badge">নতুন</div>
                <div className="play-overlay">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">{song.artist}</p>
                <div className="song-meta">
                  <span className="release-date">
                    <i className="far fa-calendar"></i> {song.releaseDate}
                  </span>
                  <span className="views">
                    <i className="fas fa-eye"></i> {song.views}
                  </span>
                </div>
                <a href={song.link} target="_blank" rel="noopener noreferrer" className="listen-btn">
                  শুনুন <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewSongs;
