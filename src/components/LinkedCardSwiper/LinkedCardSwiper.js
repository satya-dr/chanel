// src/components/LinkedCardSwiper/LinkedCardSwiper.js (সম্পূর্ণ সংশোধিত)
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LinkCardSwiper.css';
import videosData from '../../data/videos';

const LinkCardSwiper = () => {
  const featuredVideos = videosData.featured; // শুধু ৩টি ভিডিও

  return (
    <section className="featured-videos-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Videos</h2>
          <p className="section-subtitle">আমার চ্যানেলের বিশেষ ভিডিওগুলো দেখুন</p>
          <Link to="/gallery" className="view-all-btn">
            View All <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
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
          className="featured-videos-swiper"
        >
          {featuredVideos.map(video => (
            <SwiperSlide key={video.id}>
              <div className="video-card">
                <div className="card-image-container">
                  <img src={video.image} alt={video.title} className="card-image" />
                  <div className="image-overlay"></div>
                  <div className="video-badge">{video.category === 'popular' ? '🔥 Popular' : '🆕 Recent'}</div>
                  <div className="video-duration">{video.duration}</div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{video.title}</h3>
                  <p className="card-description">{video.description}</p>
                  <div className="video-meta">
                    <span className="video-views">
                      <i className="fas fa-eye me-1"></i>
                      {video.views} views
                    </span>
                  </div>
                  <a href={video.link} target="_blank" rel="noopener noreferrer" className="card-button">
                    {video.buttonText} <i className="fas fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LinkCardSwiper;