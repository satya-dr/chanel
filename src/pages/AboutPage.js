import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="about-page-wrapper">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <div className="hero-content">
              <div className="stage-badge-sm">🎭 আমাদের পরিচয়</div>
              <h1 className="hero-title">UJAN ETV সম্পর্কে</h1>
              <p className="hero-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতের প্রচার ও প্রসারের জন্য আপনার নিজস্ব প্ল্যাটফর্ম</p>
              
              <div className="hero-stats">
                <div className="stat-card">
                  <span className="stat-number">৫০০+</span>
                  <span className="stat-label">ভাওয়াইয়া গান</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">১০০+</span>
                  <span className="stat-label">গুণী শিল্পী</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">৫০M+</span>
                  <span className="stat-label">শ্রোতার ভালোবাসা</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">২০১৫</span>
                  <span className="stat-label">থেকে নিরবচ্ছিন্ন যাত্রা</span>
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
                <div className="stage-badge-sm">📜 ইতিহাস</div>
                <h2>আমাদের পথচলার গল্প</h2>
                <p>
                  UJAN ETV এর যাত্রা শুরু হয় ২০১৫ সালে উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতকে 
                  ডিজিটাল প্ল্যাটফর্মে তুলে ধরার লক্ষ্যে। আমরা বিশ্বাস করি ভাওয়াইয়া শুধু একটি সংগীত 
                  নয়, এটি উত্তরবঙ্গের মানুষের আবেগ, সংস্কৃতি এবং জীবনযাপনের এক অবিচ্ছেদ্য অংশ।
                </p>
                <p>
                  আমাদের মূল লক্ষ্য হল ভাওয়াইয়া সংগীতের অন্তর্নিহিত মাধুর্যকে নতুন প্রজন্মের কাছে পৌঁছে দেওয়া এবং 
                  এই সমৃদ্ধ সাংস্কৃতিক ঐতিহ্যকে বিশ্বদরবারে তুলে ধরা। আমরা উদীয়মান তরুণ প্রতিভাদের 
                  উৎসাহিত করি ভাওয়াইয়া সংগীত চর্চায় এবং তাদেরকে একটি পেশাদার প্ল্যাটফর্ম প্রদান করি।
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
                  ভাওয়াইয়া শিল্পীদের জন্য নতুন নতুন সুযোগ সৃষ্টি করা।
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">👁️</div>
                <h3>আমাদের দৃষ্টিভঙ্গি</h3>
                <p>
                  ভাওয়াইয়া সংগীতকে সীমানার গণ্ডি ছাড়িয়ে বিশ্বব্যাপী ছড়িয়ে দেওয়া। একটি সমৃদ্ধ ডিজিটাল সংগীত আর্কাইভ তৈরি করা 
                  যা ভবিষ্যৎ প্রজন্মের জন্য ঐতিহ্য হিসেবে সংরক্ষিত থাকবে।
                </p>
              </div>
              <div className="mv-card">
                <div className="mv-icon">💪</div>
                <h3>আমাদের মূল্যবোধ</h3>
                <p>
                  সাংস্কৃতিক ঐতিহ্য রক্ষা, শিল্পীদের সম্মান প্রদর্শন, মানসম্মত পরিবেশনা এবং 
                  সম্প্রদায় ভিত্তিক বিকাশ। আমরা বিশ্বাস করি ঐতিহ্য সংরক্ষণ এবং আধুনিকায়ন একই সূত্রে গাঁথা।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <div className="section-header">
              <div className="stage-badge-sm">👥 কারিগরবৃন্দ</div>
              <h2 className="section-title">আমাদের টিম</h2>
              <p className="section-subtitle">যাঁদের অক্লান্ত পরিশ্রমে UJAN ETV প্রতিদিন এগিয়ে চলেছে</p>
            </div>
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team/director.jpg" alt="Director" />
                </div>
                <div className="member-info">
                  <h3>কাকু</h3>
                  <p className="member-role">প্রতিষ্ঠাতা ও পরিচালক</p>
                  <p className="member-bio">
                    ভাওয়াইয়া সংগীতের প্রবাদপুরুষ এবং UJAN ETV এর প্রাণপুরুষ। ২০+ বছর ধরে 
                    ভাওয়াইয়া সংগীতের সংরক্ষণে কাজ করে চলেছেন।
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
                    ডিজিটাল মিডিয়া বিশেষজ্ঞ এবং কনটেন্ট প্রডাকশনে ১০+ বছরের অভিজ্ঞতাসম্পন্ন। 
                    লোকসংগীতকে ডিজিটাল মাধ্যমে নিয়ে আসার অগ্রদূত।
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
                    প্রথিতযশা সংগীত পরিচালক, ভাওয়াইয়া সংগীতের আবহ বজায় রেখে 
                    আধুনিক পরিবেশনায় বিশেষ অবদান রাখছেন।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements">
          <div className="container">
            <div className="section-header">
              <div className="stage-badge-sm">🏆 প্রাপ্তি</div>
              <h2 className="section-title">আমাদের অর্জন</h2>
            </div>
            <div className="achievements-grid">
              <div className="achievement-card">
                <div className="achievement-icon">🏆</div>
                <h3>জাতীয় সম্মাননা</h3>
                <p>ভাওয়াইয়া সংগীত সংরক্ষণে অসামান্য অবদানের জন্য জাতীয় সংস্কৃতি পদক অর্জন</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">📺</div>
                <h3>ডিজিটাল সাফল্য</h3>
                <p>YouTube এ ১.২M+ সাবস্ক্রাইবার এবং ৫০M+ ভিউয়ের মাইলফলক স্পর্শ</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">🎵</div>
                <h3>ডিজিটাল আর্কাইভ</h3>
                <p>৫০০+ ঐতিহ্যবাহী ভাওয়াইয়া গানের সং সংগৃহীত ডিজিটাল আর্কাইভ</p>
              </div>
              
              <div className="achievement-card">
                <div className="achievement-icon">👥</div>
                <h3>শিল্পী বিকাশ</h3>
                <p>১০০+ নতুন শিল্পীকে প্রশিক্ষণ এবং বিশ্বমঞ্চে পারফর্ম করার সুযোগ</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <div className="stage-badge-sm">📞 যোগাযোগ</div>
                <h2>আমাদের সাথে যুক্ত হন</h2>
                <p>যেকোনো প্রশ্ন, মতামত কিংবা যোগাযোগের জন্য নিচের মাধ্যমগুলো ব্যবহার করুন</p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <h4>ঠিকানা</h4>
                      <p>UJAN ETV স্টুডিও, শিলিগুড়ি, উত্তরবঙ্গ</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <h4>ফোন</h4>
                      <p>+91 XXXXXXX268</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <h4>ইমেইল</h4>
                      <p>satyajit@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">📺</span>
                    <div>
                      <h4>YouTube</h4>
                      <p>youtube.com/@UJANETV</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>বার্তা পাঠান</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <input type="text" placeholder="আপনার নাম" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="ইমেইল ঠিকানা" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="আপনার বার্তা লিখুন..." rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    বার্তা পাঠান <span>→</span>
                  </button>
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