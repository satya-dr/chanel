// src/components/AllSongs/AllSongs.js
import React from 'react';
import './AllSongs.css';

const AllSongs = () => {
  // ডেমো গানের ডেটা
  const allSongs = [
    {
      id: 1,
      title: "ভাওয়াইয়া গান ১ - উত্তরবঙ্গের সুর",
      artist: "শিল্পী ক",
      duration: "4:32",
      views: "1.2M",
      image: "/images/song1.jpg",
      link: "https://youtube.com/watch?v=1"
    },
    {
      id: 2,
      title: "ভাওয়াইয়া গান ২ - মনের আকুলি",
      artist: "শিল্পী খ",
      duration: "3:45",
      views: "890K",
      image: "/images/song2.jpg",
      link: "https://youtube.com/watch?v=2"
    },
    {
      id: 3,
      title: "ভাওয়াইয়া গান ৩ - প্রেমের গান",
      artist: "শিল্পী গ",
      duration: "5:12",
      views: "2.1M",
      image: "/images/song3.jpg",
      link: "https://youtube.com/watch?v=3"
    },
    {
      id: 4,
      title: "ভাওয়াইয়া গান ৪ - গ্রাম বাংলা",
      artist: "শিল্পী ঘ",
      duration: "4:08",
      views: "1.5M",
      image: "/images/song4.jpg",
      link: "https://youtube.com/watch?v=4"
    },
    {
      id: 5,
      title: "ভাওয়াইয়া গান ৫ - নদীর কূল",
      artist: "শিল্পী ঙ",
      duration: "3:55",
      views: "1.8M",
      image: "/images/song5.jpg",
      link: "https://youtube.com/watch?v=5"
    },
    {
      id: 6,
      title: "ভাওয়াইয়া গান ৬ - মাঠের গান",
      artist: "শিল্পী চ",
      duration: "4:20",
      views: "1.1M",
      image: "/images/song6.jpg",
      link: "https://youtube.com/watch?v=6"
    }
  ];

  return (
    <section id="all-songs" className="all-songs-section">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">সকল ভাওয়াইয়া গান</h1>
          <p className="section-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী সব ভাওয়াইয়া গানের সংগ্রহশালা</p>
          <div className="songs-stats">
            <div className="stat-item">
              <span className="stat-number">{allSongs.length}+</span>
              <span className="stat-label">গান</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">শিল্পী</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5M+</span>
              <span className="stat-label">ভিউ</span>
            </div>
          </div>
        </div>
        
        <div className="songs-filter">
          <button className="filter-btn active">সকল গান</button>
          <button className="filter-btn">জনপ্রিয়</button>
          <button className="filter-btn">নতুন</button>
          <button className="filter-btn">প্রাচীন</button>
        </div>
        
        <div className="songs-grid">
          {allSongs.map(song => (
            <div key={song.id} className="song-card">
              <div className="song-image">
                <img src={song.image} alt={song.title} />
                <div className="song-overlay">
                  <a href={song.link} target="_blank" rel="noopener noreferrer" className="play-btn">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                <div className="song-duration">{song.duration}</div>
              </div>
              <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <p className="song-artist">
                  <i className="fas fa-user"></i> {song.artist}
                </p>
                <div className="song-meta">
                  <span className="song-views">
                    <i className="fas fa-eye"></i> {song.views}
                  </span>
                  <span className="song-category">ভাওয়াইয়া</span>
                </div>
                <a href={song.link} target="_blank" rel="noopener noreferrer" className="song-button">
                  শুনুন <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="load-more-section">
          <button className="load-more-btn">
            আরও গান লোড করুন <i className="fas fa-redo ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllSongs;