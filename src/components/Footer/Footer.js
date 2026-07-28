import React from 'react';
import logo from "../images/logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="neon-footer">
      <div className="neon-glow-bg"></div>

      <div className="container">
        <div className="neon-newsletter-box">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="newsletter-info">
                <span className="badge-neon">⚡ STAY CONNECTED</span>
                <h3 className="newsletter-title">ভাওয়াইয়ার সুরের জগতে যুক্ত থাকুন</h3>
                <p className="newsletter-sub">নতুন গান, নোটিফিকেশন এবং প্রতিযোগিতার সেরা খবর পেতে ইমেইল সাবস্ক্রাইব করুন।</p>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="neon-input-group" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="আপনার ইমেইল এড্রেস লিখুন..." required />
                <button type="submit" className="btn-neon-submit">
                  সাবস্ক্রাইব <span>🚀</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row neon-footer-body">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="brand-card">
              <div className="brand-logo-wrapper">
                <img src={logo} alt="UJAN ETV Logo" className="neon-logo" />
                <div className="brand-text">
                  <h4 className="brand-title">UJAN ETV</h4>
                  <span className="brand-tagline">Digital Folk Platform</span>
                </div>
              </div>
              <p className="brand-desc">
                উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতকে বিশ্বমঞ্চে নতুন ধারায় তুলে ধরার ডিজিটাল প্রয়াস। আমরা প্রতিশ্রুতিবদ্ধ লোকসংগীতের সমৃদ্ধ ঐতিহ্য রক্ষায়।
              </p>
              <div className="live-status">
                <span className="pulsing-dot"></span>
                <span>লাইভ স্ট্রিম এবং অডিশন চলছে</span>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="neon-heading">দ্রুত লিংক</h5>
            <ul className="neon-links">
              <li><a href="/">হোম পেজ</a></li>
              <li><a href="/competitions">প্রতিযোগিতা</a></li>
              <li><a href="/all-songs">গানসমূহ</a></li>
              <li><a href="/about">আমাদের কথা</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="neon-heading">সোশ্যাল মিডিয়া</h5>
            <div className="neon-social-pills">
              <a href="https://www.youtube.com/@UJANETV" target="_blank" rel="noopener noreferrer" className="social-pill yt">
                <i className="fab fa-youtube"></i> YouTube
              </a>
              <a href="/" className="social-pill fb">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="/" className="social-pill ig">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="/" className="social-pill wa">
                <i className="fab fa-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="neon-heading">যোগাযোগ</h5>
            <ul className="contact-neon-list">
              <li>
                <span className="c-icon">📍</span>
                <span>শিলিগুড়ি, উত্তরবঙ্গ, ভারত</span>
              </li>
              <li>
                <span className="c-icon">✉️</span>
                <span>satyajit@gmail.com</span>
              </li>
              <li>
                <span className="c-icon">📞</span>
                <span>+91 XXXXXXX268</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="neon-footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright-text">&copy; {new Date().getFullYear()} <span className="neon-cyan">UJAN ETV</span>. সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">
              <div className="bottom-policy-links">
                <a href="/">গোপনীয়তা নীতি</a>
                <a href="/">ব্যবহারের শর্তাবলী</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;