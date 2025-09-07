// src/components/LinkCardSwiper/LinkCardSwiper.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LinkedCardSwiper.css';

const LinkCardSwiper = () => {
  const linkCards = [
    { 
      id: 1, 
      title: "আমার নতুন গান", 
      description: "এই গানটি আমার চ্যানেলে সবচেয়ে জনপ্রিয়", 
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "https://youtube.com/watch?v=example1",
      buttonText: "গান শুনুন"
    },
    { 
      id: 2, 
      title: "সঙ্গীত শিক্ষা", 
      description: "গিটার শেখার সহজ পাঠ", 
      image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "https://youtube.com/watch?v=example2",
      buttonText: "দেখুন"
    },
    { 
      id: 3, 
      title: "লাইভ পারফরম্যান্স", 
      description: "গত সপ্তাহের লাইভ কনসার্ট", 
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "https://youtube.com/watch?v=example3",
      buttonText: "দেখুন"
    },
    { 
      id: 4, 
      title: "গানের কথার ভিডিও", 
      description: "আমার গানের লিরিক্স ভিডিও", 
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "https://youtube.com/watch?v=example4",
      buttonText: "লিরিক্স দেখুন"
    },
    { 
      id: 5, 
      title: "আগামী প্রতিযোগিতা", 
      description: "পরবর্তী সঙ্গীত প্রতিযোগিতার তথ্য", 
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      link: "#competitions",
      buttonText: "তথ্য দেখুন"
    }
  ];

  return (
    <section className="link-cards-section">
      <div className="container">
        <h2 className="section-title">Featured Content</h2>
        <p className="section-subtitle">আমার চ্যানেলের বিশেষ কন্টেন্টগুলো দেখুন</p>
        
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
          className="link-cards-swiper"
        >
          {linkCards.map(card => (
            <SwiperSlide key={card.id}>
              <div className="link-card">
                <div className="card-image-container">
                  <img src={card.image} alt={card.title} className="card-image" />
                  <div className="image-overlay"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <a href={card.link} target="_blank" rel="noopener noreferrer" className="card-button">
                    {card.buttonText} <i className="fas fa-arrow-right ms-2"></i>
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