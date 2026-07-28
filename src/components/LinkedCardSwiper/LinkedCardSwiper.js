import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { supabase } from '../../supabaseClient'; // আপনার supabaseClient-এর পাথ অনুযায়ী

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LinkCardSwiper.css';

const LinkedCardSwiper = () => {
  const [featuredVideos, setFeaturedVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Supabase থেকে ডাটা ফেচ করা ---
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        if (!supabase) return;

        const { data, error } = await supabase
          .from('bhawaiya_songs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Supabase Error:', error.message);
          setFeaturedVideos([]);
        } else {
          setFeaturedVideos(data || []);
        }
      } catch (error) {
        console.error('Data Fetching Exception:', error);
        setFeaturedVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <section className="linked-card-swiper-section">
      <div className="linked-container">
        <div className="linked-section-header">
          <div className="linked-header-content">
            <div className="stage-badge-sm">🎶 বিশেষ নিবেদন</div>
            <h2 className="linked-section-title">ভাওয়াইয়া সংগীত সংগ্রহ</h2>
            <p className="linked-section-subtitle">আমাদের চ্যানেলের সেরা ভাওয়াইয়া পরিবেশনাগুলো উপভোগ করুন</p>
          </div>
          <Link to="/all-songs" className="linked-view-all-btn">
            সকল গান <span>→</span>
          </Link>
        </div>
        
        <div className="linked-swiper-container">
          {loading ? (
            <p style={{ color: '#FFD700', textAlign: 'center', padding: '40px 0' }}>
              বিশেষ নিবেদন লোড হচ্ছে...
            </p>
          ) : featuredVideos.length === 0 ? (
            <p style={{ color: '#ccc', textAlign: 'center', padding: '40px 0' }}>
              কোনো সংগীত যুক্ত করা হয়নি।
            </p>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={28}
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
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="linked-featured-swiper"
            >
              {featuredVideos.map(video => (
                <SwiperSlide key={video.id}>
                  <div className="linked-video-card">
                    <div className="linked-card-image-container">
                      <img 
                        src={video.image || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"} 
                        alt={video.title || video.song_title} 
                        className="linked-card-image" 
                      />
                      <div className="linked-image-overlay">
                        <a href={video.link || '#'} target="_blank" rel="noopener noreferrer" className="linked-play-btn">
                          ▶
                        </a>
                      </div>
                      <div className="linked-video-badge">
                        {video.category === 'popular' ? '🔥 জনপ্রিয়' : '🆕 নতুন'}
                      </div>
                      <div className="linked-video-duration">{video.duration || '4:15'}</div>
                    </div>
                    <div className="linked-card-content">
                      <h3 className="linked-card-title">{video.title || video.song_title}</h3>
                      <p className="linked-card-description">{video.description || `ভাওয়াইয়া শিল্পী: ${video.artist || 'UJAN ETV'}`}</p>
                      <div className="linked-video-meta">
                        <span className="linked-video-views">
                          <span className="meta-icon">👁️</span>
                          {video.views || '0'} বার দেখা হয়েছে
                        </span>
                      </div>
                      <a href={video.link || '#'} target="_blank" rel="noopener noreferrer" className="linked-card-button">
                        {video.buttonText || 'প্লে করুন'} <span>→</span>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          
          <div className="linked-swiper-button-next">›</div>
          <div className="linked-swiper-button-prev">‹</div>
          <div className="linked-swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default LinkedCardSwiper;