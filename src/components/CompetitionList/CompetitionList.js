// src/components/CompetitionList/CompetitionList.js
import React from 'react';
import CompetitionCard from './CompetitionCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CompetitionList.css';

const CompetitionList = () => {
  const competitions = [
    { id: 1, name: "Spring Melody 2023", deadline: "June 30, 2023", prize: "$5,000", entries: 243 },
    { id: 2, name: "Vocal Championship", deadline: "July 15, 2023", prize: "$3,000", entries: 187 },
    { id: 3, name: "Instrumental Masters", deadline: "August 1, 2023", prize: "$4,500", entries: 156 },
  ];

  const notifications = [
    { id: 1, text: "🎉 নতুন প্রতিযোগিতা আসছে! আগামী সপ্তাহে থাকছে Folk Music Competition", type: "info", link:"/"},
    { id: 2, text: "⏰ Spring Melody প্রতিযোগিতার জন্য মাত্র ৫ দিন বাকি! দ্রুত অংশগ্রহণ করুন", type: "urgent",link:"/" },
    { id: 3, text: "🏆 গত মাসের বিজয়ী: রিয়া সরকার - Congratulations!", type: "success",link:"/" },
    { id: 4, text: "📢 নতুন নিয়ম: সকল অংশগ্রহণকারীদেরকে অবশ্যই নিয়মাবলী পড়তে হবে", type: "warning",link:"/" }
  ];

  return (
    <section id="competitions" className="competition-section">
      <div className="container">
        <h2 className="section-title">Current Competitions</h2>
        
        {/* Static Notification Banner */}
        <div className="static-notification mb-4">
          <div className="notification-badge">New</div>
          <div className="notification-content">
            <span>🎉 নতুন প্রতিযোগিতা আসছে! আগামী সপ্তাহে থাকছে Folk Music Competition 👉 </span>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfvVWE83NzbeG6hSGXbGdmls4EB_ADFlAFm0SF_BDEGqSP7ow/viewform?usp=header" 
               className="notification-link">
              Click Here
            </a>
          </div>
        </div>

        {/* Notification Swiper */}
        <div className="notification-swiper-container mb-5">
          <div className="notification-header">
            <i className="fas fa-bullhorn me-2"></i>
            <span>Important Announcements</span>
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{ 
              clickable: true,
              el: '.notification-pagination'
            }}
            navigation={{
              nextEl: '.notification-next',
              prevEl: '.notification-prev',
            }}
            loop={true}
            className="notification-swiper"
          >
            {notifications.map(notification => (
              <SwiperSlide key={notification.id}>
                <div className={`notification-slide ${notification.type}`}>
<div 
  className="notification-content" 
  style={{ 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-between" 
  }}
>                    <span className="notification-text">{notification.text}</span>
                    <span className="click">👉<a href={notification.link}>Click Here</a></span>
                  </div>
                </div>  
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="notification-controls">
            <div className="notification-prev"><i className="fas fa-chevron-left"></i></div>
            <div className="notification-pagination"></div>
            <div className="notification-next"><i className="fas fa-chevron-right"></i></div>
          </div>
        </div>

        <div className="competition-grid">
          {competitions.map(competition => (
            <CompetitionCard key={competition.id} competition={competition} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionList;