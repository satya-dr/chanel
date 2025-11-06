// src/components/Hero/Hero.js
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  
  const heroTexts = useMemo(() => [
    "উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতের প্রচার ও প্রসারের জন্য এটি আপনার নিজস্ব প্ল্যাটফর্ম।",
    "আপনার কণ্ঠে ভাওয়াইয়ার সুর শুনতে চাই আমরা। প্রতিযোগিতায় অংশগ্রহণ করুন এবং লক্ষাধিক টাকার পুরস্কার জিতুন।",
    "ভাওয়াইয়া সংগীতের সমৃদ্ধ ঐতিহ্যকে এগিয়ে নিয়ে যাওয়ার লক্ষ্যে আমরা কাজ করছি। আপনার প্রতিভা তুলে ধরুন বিশ্ব দরবারে।"
  ], []);

  // Statistics animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Typing animation for hero text
  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];
    let currentCharIndex = 0;
    let typingInterval;

    const typeText = () => {
      if (currentCharIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentCharIndex));
        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          deleteText();
        }, 2000);
      }
    };

    const deleteText = () => {
      let deleteCharIndex = currentText.length;
      const deleteInterval = setInterval(() => {
        if (deleteCharIndex >= 0) {
          setDisplayText(currentText.substring(0, deleteCharIndex));
          deleteCharIndex--;
        } else {
          clearInterval(deleteInterval);
          setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
        }
      }, 50);
    };

    typingInterval = setInterval(typeText, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentTextIndex, heroTexts]);

  // Animated counter for statistics
  const animateCounters = useCallback(() => {
    const targetSubscribers = 1200000;
    const targetViews = 50000000;
    const targetVideos = 500;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const counterInterval = setInterval(() => {
      currentStep++;
      
      setSubscriberCount(Math.min(Math.floor((targetSubscribers / steps) * currentStep), targetSubscribers));
      setViewCount(Math.min(Math.floor((targetViews / steps) * currentStep), targetViews));
      setVideoCount(Math.min(Math.floor((targetVideos / steps) * currentStep), targetVideos));

      if (currentStep >= steps) {
        clearInterval(counterInterval);
      }
    }, stepDuration);
  }, []);

  useEffect(() => {
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, [animateCounters]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
  };

  return (
    <section className="bhawaiya-hero">
      {/* Stage Background */}
      <div className="stage-background">
        <div className="stage-curtains">
          <div className="curtain left-curtain"></div>
          <div className="curtain right-curtain"></div>
        </div>
        <div className="stage-floor"></div>
        <div className="stage-lights">
          <div className="light-spotlight-1"></div>
          <div className="light-spotlight-2"></div>
          <div className="light-spotlight-3"></div>
        </div>
        <div className="cultural-patterns">
          <div className="pattern-alpana-1"></div>
          <div className="pattern-alpana-2"></div>
          <div className="pattern-alpana-3"></div>
        </div>
        <div className="musical-elements">
          <div className="element-dhol"></div>
          <div className="element-flute"></div>
          <div className="element-ektara"></div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            {/* Stage Badge */}
            <div className="stage-badge">
              <span>🎭 ভাওয়াইয়া সংগীতের রাজধানী 🎵</span>
            </div>
            
            {/* Main Title */}
            <h1 className="hero-title">
              <span className="title-main">UJAN ETV</span>
              <span className="title-sub">ভাওয়াইয়ার সুর, বাংলার প্রাণ</span>
            </h1>
            
            {/* Typing Text */}
            <div className="hero-subtitle-container">
              <div className="stage-podium">
                <p className="hero-subtitle">
                  {displayText}
                  <span className="typing-cursor">|</span>
                </p>
              </div>
            </div>

            {/* Statistics on Stage */}
            <div className="stage-stats">
              <div className={`stat-item ${currentStat === 0 ? 'active' : ''}`}>
                <div className="stat-icon">👥</div>
                <span className="stat-number">{formatNumber(subscriberCount)}</span>
                <span className="stat-label">সাবস্ক্রাইবার</span>
              </div>
              <div className={`stat-item ${currentStat === 1 ? 'active' : ''}`}>
                <div className="stat-icon">👁️</div>
                <span className="stat-number">{formatNumber(viewCount)}</span>
                <span className="stat-label">ভিউ</span>
              </div>
              <div className={`stat-item ${currentStat === 2 ? 'active' : ''}`}>
                <div className="stat-icon">🎬</div>
                <span className="stat-number">{videoCount}+</span>
                <span className="stat-label">ভিডিও</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="https://www.youtube.com/@UJANETV" target="_blank" rel="noopener noreferrer" className="btn btn-stage-primary">
                <span className="btn-icon">📺</span>
                YouTube চ্যানেল
              </a>
              <a href="#competitions" className="btn btn-stage-secondary">
                <span className="btn-icon">🎤</span>
                প্রতিযোগিতায় অংশ নিন
              </a>
              <a href="#latest-video" className="btn btn-stage-outline">
                <span className="btn-icon">🎵</span>
                সর্বশেষ গান
              </a>
            </div>

            {/* Featured Performance */}
            <div className="featured-performance">
              <div className="performance-card">
                <div className="artist-avatar">
                  <div className="avatar-placeholder">🎭</div>
                </div>
                <div className="performance-info">
                  <h4>সর্বশেষ ভাওয়াইয়া পরিবেশনা</h4>
                  <p>"নorth বঙ্গের সুরে বাধা প্রাণ"</p>
                  <div className="performance-stats">
                    <span>👁️ ১.২M ভিউ</span>
                    <span>❤️ ৫০K লাইক</span>
                  </div>
                </div>
                <div className="play-button">
                  <span>▶</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="stage-social-links">
              <a href="https://www.youtube.com/@UJANETV" className="social-link">
                <span className="social-icon">📺</span>
                <span className="social-name">YouTube</span>
              </a>
              <a href="https://www.facebook.com" className="social-link">
                <span className="social-icon">👥</span>
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://www.instagram.com" className="social-link">
                <span className="social-icon">📷</span>
                <span className="social-name">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">নিচে স্ক্রল করুন</div>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
};

export default Hero;