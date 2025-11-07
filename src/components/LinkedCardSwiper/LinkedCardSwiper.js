// src/components/LinkedCardSwiper/LinkedCardSwiper.js (সংশোধিত)
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LinkCardSwiper.css';
import videosData from '../../data/videos';

const LinkedCardSwiper = () => {
  const featuredVideos = videosData.featured;

  return (
    <section className="linked-card-swiper-section">
      <div className="linked-container">
        <div className="linked-section-header">
          <div className="linked-header-content">
            <h2 className="linked-section-title">ভাওয়াইয়া গান</h2>
            <p className="linked-section-subtitle">আমার চ্যানেলের বিশেষ ভাওয়াইয়া গানগুলো শুনুন</p>
          </div>
          <Link to="/all-songs" className="linked-view-all-btn">
            সকল গান <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
        
        <div className="linked-swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.linked-swiper-button-next',
              prevEl: '.linked-swiper-button-prev',
            }}
            pagination={{
              el: '.linked-swiper-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="linked-featured-swiper"
          >
            {featuredVideos.map(video => (
              <SwiperSlide key={video.id}>
                <div className="linked-video-card">
                  <div className="linked-card-image-container">
                    <img src={video.image} alt={video.title} className="linked-card-image" />
                    <div className="linked-image-overlay"></div>
                    <div className="linked-video-badge">
                      {video.category === 'popular' ? '🔥 জনপ্রিয়' : '🆕 নতুন'}
                    </div>
                    <div className="linked-video-duration">{video.duration}</div>
                  </div>
                  <div className="linked-card-content">
                    <h3 className="linked-card-title">{video.title}</h3>
                    <p className="linked-card-description">{video.description}</p>
                    <div className="linked-video-meta">
                      <span className="linked-video-views">
                        <i className="fas fa-eye me-1"></i>
                        {video.views} বার দেখা
                      </span>
                    </div>
                    <a href={video.link} target="_blank" rel="noopener noreferrer" className="linked-card-button">
                      {video.buttonText} <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="linked-swiper-button-next"></div>
          <div className="linked-swiper-button-prev"></div>
          <div className="linked-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default LinkedCardSwiper;