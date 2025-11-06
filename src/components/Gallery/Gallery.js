// src/components/Gallery/Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import videosData from '../../data/videos';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const allVideos = videosData.all;

  const filteredVideos = activeCategory === 'all' 
    ? allVideos 
    : allVideos.filter(video => video.category === activeCategory);

  return (
    <section id="gallery" className="gallery-page">
      <div className="container">
        {/* Gallery Header */}
        <div className="gallery-header">
          <h1 className="gallery-title">Video Gallery</h1>
          <p className="gallery-subtitle">UJAN ETV এর সকল ভিডিও এক জায়গায়</p>
        </div>

        {/* Category Filter */}
        <div className="gallery-category-filter">
          <button 
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <i className="fas fa-th-large me-2"></i>
            সব ভিডিও
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveCategory('recent')}
          >
            <i className="fas fa-clock me-2"></i>
            সাম্প্রতিক
          </button>
          <button 
            className={`filter-btn ${activeCategory === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveCategory('popular')}
          >
            <i className="fas fa-fire me-2"></i>
            জনপ্রিয়
          </button>
        </div>

        {/* Video Grid */}
        <div className="gallery-video-grid">
          {filteredVideos.map(video => (
            <div key={video.id} className="gallery-video-item">
              <div className="video-thumbnail">
                <img src={video.image} alt={video.title} />
                <div className="thumbnail-overlay">
                  <div className="play-button">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
                <div className="video-badge">{video.category === 'popular' ? '🔥 জনপ্রিয়' : '🆕 সাম্প্রতিক'}</div>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-info">
                <h4 className="video-title">{video.title}</h4>
                <p className="video-description">{video.description}</p>
                <div className="video-stats">
                  <span className="views">
                    <i className="fas fa-eye"></i> {video.views} ভিউ
                  </span>
                  <span className="category-tag">
                    {video.category === 'popular' ? 'জনপ্রিয়' : 'সাম্প্রতিক'}
                  </span>
                </div>
                <a href={video.link} target="_blank" rel="noopener noreferrer" className="watch-btn">
                  <i className="fab fa-youtube me-2"></i>
                  ইউটিউবে দেখুন
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="load-more-container">
          <button className="load-more-btn">
            আরো ভিডিও লোড করুন <i className="fas fa-redo ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;