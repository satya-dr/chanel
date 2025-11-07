// src/pages/AboutPage.js
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">UJAN ETV সম্পর্কে</h1>
              <p className="hero-subtitle">ভাওয়াইয়া সংগীতের প্রচার ও প্রসারের জন্য আপনার নিজস্ব প্ল্যাটফর্ম</p>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">৫০০+</span>
                  <span className="stat-label">ভাওয়াইয়া গান</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">১০০+</span>
                  <span className="stat-label">শিল্পী</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">৫M+</span>
                  <span className="stat-label">ভিউ</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">২০১৫</span>
                  <span className="stat-label">থেকে যাত্রা</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="our-story">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>আমাদের গল্প</h2>
                <p>
                  UJAN ETV এর যাত্রা শুরু হয় ২০১৫ সালে উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতকে 
                  ডিজিটাল প্ল্যাটফর্মে তুলে ধরার লক্ষ্যে। আমরা বিশ্বাস করি ভাওয়াইয়া শুধু একটি সংগীত 
                  নয়, এটি উত্তরবঙ্গের মানুষের আবেগ, সংস্কৃতি এবং জীবনযাপনের অংশ।
                </p>
                <p>
                  আমাদের লক্ষ্য হল ভাওয়াইয়া সংগীতকে নতুন প্রজন্মের কাছে পৌঁছে দেওয়া এবং 
                  এই সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যকে বিশ্বদরবারে তুলে ধরা। আমরা তরুণ প্রতিভাদের 
                  উৎসাহিত করি ভাওয়াইয়া সংগীত চর্চায় এবং তাদেরকে একটি প্ল্যাটফর্ম প্রদান করি 
                  তাদের প্রতিভা প্রকাশ করার জন্য।
                </p>
              </div>
              <div className="story-image">
                <img src="/images/about/story.jpg" alt="UJAN ETV Story" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section className="mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card">
                <div className="mv-icon">🎯</div>
                <h3>আমাদের লক্ষ্য</h3>
                <p>
                  ভাওয়াইয়া সংগীতের ডিজিটাল রূপান্তর এবং বিশ্বব্যাপী এর প্রচার ও প্রসার। 
                  নতুন প্রজন্মকে এই ঐতিহ্যবাহী সংগীতের সাথে পরিচয় করিয়ে দেওয়া এবং 
                  ভাওয়াইয়া শিল্পীদের জন্য আর্থিক সুযোগ সৃষ্টি করা।
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">👁️</div>
                <h3>আমাদের দৃষ্টিভঙ্গি</h3>
                <p>
                  ভাওয়াইয়া সংগীতকে শুধু উত্তরবঙ্গের সীমানায় না রেখে সমগ্র বাংলাদেশ 
                  এবং বিশ্বব্যাপী ছড়িয়ে দেওয়া। একটি ডিজিটাল সংগীত আর্কাইভ তৈরি করা 
                  যা ভবিষ্যৎ প্রজন্মের জন্য সংরক্ষিত থাকবে।
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">💪</div>
                <h3>আমাদের মূল্যবোধ</h3>
                <p>
                  সাংস্কৃতিক ঐতিহ্য রক্ষা, শিল্পী সম্মান, মানসম্মত উপস্থাপনা এবং 
                  সম্প্রদায় ভিত্তিক উন্নয়ন। আমরা বিশ্বাস করি সংস্কৃতি সংরক্ষণ 
                  এবং আধুনিকীকরণ উভয়ই সমান গুরুত্বপূর্ণ।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">আমাদের টিম</h2>
            <p className="section-subtitle">যারা নিয়োজিত রয়েছেন UJAN ETV কে সফল করতে</p>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/director.jpg" alt="Director" />
                </div>
                <div className="member-info">
                  <h3>কাকু</h3>
                  <p className="member-role">প্রতিষ্ঠাতা ও পরিচালক</p>
                  <p className="member-bio">
                    ভাওয়াইয়া সংগীতের প্রবাদপুরুষ এবং UJAN ETV এর হৃদয়। ২০+ বছর 
                    ভাওয়াইয়া সংগীত নিয়ে কাজ করছেন।
                  </p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/producer.jpg" alt="Producer" />
                </div>
                <div className="member-info">
                  <h3>রিনা আক্তার</h3>
                  <p className="member-role">প্রযোজক</p>
                  <p className="member-bio">
                    ডিজিটাল মিডিয়া বিশেষজ্ঞ এবং content production এ ১০+ বছর 
                   ভাওয়াইয়া সংগীতকে ডিজিটাল প্ল্যাটফর্মে নিয়ে আসার পথিকৃৎ।
                  </p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/music-director.jpg" alt="Music Director" />
                </div>
                <div className="member-info">
                  <h3>জাহিদ হাসান</h3>
                  <p className="member-role">সংগীত পরিচালক</p>
                  <p className="member-bio">
                    প্রথিতযশা সংগীত পরিচালক, ভাওয়াইয়া সংগীতের আধুনিকায়ন 
                    এবং সংরক্ষণে বিশেষ অবদান রাখছেন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements">
          <div className="container">
            <h2 className="section-title">আমাদের অর্জন</h2>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <h3>জাতীয় পুরস্কার</h3>
                <p>ভাওয়াইয়া সংগীত সংরক্ষণে অবদানের জন্য ২০২5 সালে জাতীয় সংস্কৃতি পুরস্কার</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">📺</div>
                <h3>ডিজিটাল উপস্থিতি</h3>
                <p>YouTube এ ১.২M+ সাবস্ক্রাইবার এবং ৫০M+ ভিউ অর্জন</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">🎵</div>
                <h3>সংগীত আর্কাইভ</h3>
                <p>৫০০+ ঐতিহ্যবাহী ভাওয়াইয়া গানের ডিজিটাল আর্কাইভ তৈরি</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">👥</div>
                <h3>সম্প্রদায় গঠন</h3>
                <p>১০০+ নতুন শিল্পীকে প্রশিক্ষণ এবং প্ল্যাটফর্ম প্রদান</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>যোগাযোগ করুন</h2>
                <p>আমাদের সাথে যোগাযোগ করতে নিচের তথ্য ব্যবহার করুন</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h4>ঠিকানা</h4>
                      <p>UJAN ETV স্টুডিও</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h4>ফোন</h4>
                      <p>+91XX-XXXXXX</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h4>ইমেইল</h4>
                      <p>contact@ujanetv.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <i className="fab fa-youtube"></i>
                    <div>
                      <h4>YouTube</h4>
                      <p>youtube.com/@UJANETV</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>বার্তা পাঠান</h3>
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="আপনার নাম" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="ইমেইল ঠিকানা" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="আপনার বার্তা" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">বার্তা পাঠান</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;