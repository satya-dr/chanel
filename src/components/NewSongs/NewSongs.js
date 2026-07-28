import React from 'react';
import { newSongsData } from '../../data/newSongs';
import './NewSongs.css';

const NewSongs = () => {
  const recentSongs = newSongsData.recent;

  return (
    <section className="new-songs-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">🎶 নতুন পরিবেশনা</div>
          <h1 className="section-title">সদ্য প্রকাশিত গান</h1>
          <p className="section-subtitle">উত্তরবঙ্গের শিল্পীদের সদ্য প্রকাশিত ভাওয়াইয়া সংগীতের সুরের মূর্ছনা শুনুন</p>
        </div>

        <div className="songs-grid">
          {recentSongs.map(song => (
            <div key={song.id} className="song-card">
              <div className="song-image">
                <img src={song.image} alt={song.title} />
                <div className="song-badge">🆕 নতুন</div>
                <div className="play-overlay">
                  <a href={song.link} target="_blank" rel="noopener noreferrer" className="play-btn">
                    ▶
                  </a>
                </div>
              </div>
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">
                  <span className="artist-icon">👤</span> {song.artist}
                </p>
                <div className="song-meta">
                  <span className="release-date">
                    <span className="meta-icon">📅</span> {song.releaseDate}
                  </span>
                  <span className="views">
                    <span className="meta-icon">👁️</span> {song.views}
                  </span>
                </div>
                <a href={song.link} target="_blank" rel="noopener noreferrer" className="listen-btn">
                  প্লে করুন <span>→</span>
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