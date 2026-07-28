import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './NotificationSection.css';

const NotificationSection = () => {
  const notifications = [
    { 
      id: 1, 
      text: "🎉 নতুন প্রতিযোগিতা আসছে! আগামী সপ্তাহে থাকছে Folk Music Competition", 
      type: "info",
      link: "/"
    },
    { 
      id: 2, 
      text: "⏰ Spring Melody প্রতিযোগিতার জন্য মাত্র ৫ দিন বাকি! দ্রুত অংশগ্রহণ করুন", 
      type: "urgent",
      link: "/"
    },
    { 
      id: 3, 
      text: "🏆 গত মাসের বিজয়ী: রিয়া সরকার - Congratulations!", 
      type: "success",
      link: "/"
    },
    { 
      id: 4, 
      text: "📢 নতুন নিয়ম: সকল অংশগ্রহণকারীদেরকে অবশ্যই নিয়মাবলী পড়তে হবে", 
      type: "warning",
      link: "/"
    }
  ];

  return (
    <section id="notifications" className="notification-section">
      <div className="container">
        <div className="static-notification mb-4">
          <div className="notification-badge">NEW</div>
          <div className="notification-content">
            <span className="static-text">🎉 নতুন প্রতিযোগিতা আসছে! আগামী সপ্তাহে থাকছে Folk Music Competition 👉 </span>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfvVWE83NzbeG6hSGXbGdmls4EB_ADFlAFm0SF_BDEGqSP7ow/viewform?usp=header" 
              className="notification-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </div>
        </div>

        <div className="notification-swiper-container mb-5">
          <div className="notification-header">
            <span className="header-icon">📢</span>
            <span>জরুরি ঘোষণা ও আপডেটসমূহ</span>
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
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
                  <div className="notification-slide-inner">
                    <span className="notification-text">{notification.text}</span>
                    <span className="click">
                      <a href={notification.link}>বিস্তারিত দেখুন →</a>
                    </span>
                  </div>
                </div>  
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="notification-controls">
            <div className="notification-prev">‹</div>
            <div className="notification-pagination"></div>
            <div className="notification-next">›</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotificationSection;