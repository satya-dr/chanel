import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../../supabaseClient';
import './Hero.css';

const Hero = () => {
  // --- ১. স্বয়ংক্রিয় অ্যাডমিন স্টেট ---
  const [isAdmin, setIsAdmin] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  // Dynamic Performance State
  const [performances, setPerformances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal Control States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    song_title: '',
    views: '',
    likes: '',
    link: ''
  });

  // Strict Admin Check
  useEffect(() => {
    const checkAdmin = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAdmin(loggedIn);
    };

    checkAdmin(); // Initial load check

    // Listen to custom auth events
    window.addEventListener('authChange', checkAdmin);
    window.addEventListener('storage', checkAdmin);

    return () => {
      window.removeEventListener('authChange', checkAdmin);
      window.removeEventListener('storage', checkAdmin);
    };
  }, []);

  const heroTexts = useMemo(() => [
    "উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীতের প্রচার ও প্রসারের জন্য এটি আপনার নিজস্ব প্ল্যাটফর্ম।",
    "আপনার কণ্ঠে ভাওয়াইয়ার সুর শুনতে চাই আমরা। প্রতিযোগিতায় অংশগ্রহণ করুন এবং লক্ষাধিক টাকার পুরস্কার জিতুন।",
    "ভাওয়াইয়া সংগীতের সমৃদ্ধ ঐতিহ্যকে এগিয়ে নিয়ে যাওয়ার লক্ষ্যে আমরা কাজ করছি। আপনার প্রতিভা তুলে ধরুন বিশ্ব দরবারে।"
  ], []);

  // Fetch Performances
  const fetchPerformances = async () => {
    try {
      setLoading(true);
      if (!supabase) return;

      const { data, error } = await supabase
        .from('performances')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase Error:', error.message);
        setPerformances([]);
      } else {
        setPerformances(data || []);
      }
    } catch (error) {
      console.error('Data Fetching Exception:', error);
      setPerformances([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerformances();
  }, []);

  // Curtain & Counter Animation Effects
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentText = heroTexts[currentTextIndex];
    if (!currentText) return;

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
      }, 30);
    };

    typingInterval = setInterval(typeText, 80);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentTextIndex, heroTexts]);

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
    const timer = setTimeout(animateCounters, 1500);
    return () => clearTimeout(timer);
  }, [animateCounters]);

  const formatNumber = (num) => {
    if (!num) return '0';
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toString();
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Admin Modal Actions
  const handleOpenAddModal = () => {
    setEditItem(null);
    setFormData({ title: '', song_title: '', views: '', likes: '', link: '' });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (item) => {
    setEditItem(item);
    setFormData({
      title: item.title || '',
      song_title: item.song_title || '',
      views: item.views || '',
      likes: item.likes || '',
      link: item.link || ''
    });
    setIsModalOpen(true);
  };

  // Delete Action
  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি এটি মুছে ফেলতে চান?")) {
      try {
        const { error } = await supabase
          .from('performances')
          .delete()
          .eq('id', id);

        if (error) throw error;
        setPerformances(prev => prev.filter(p => p.id !== id));
      } catch (error) {
        alert('মুছে ফেলার সময় সমস্যা হয়েছে: ' + error.message);
      }
    }
  };

  // Submit Action
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editItem) {
        const { error } = await supabase
          .from('performances')
          .update(formData)
          .eq('id', editItem.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('performances')
          .insert([formData]);

        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchPerformances();
    } catch (error) {
      alert('তথ্য সেভ করার সময় সমস্যা হয়েছে: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bhawaiya-hero">
      {/* Curtain Layer */}
      <div className={`stage-curtain-container ${curtainsOpen ? 'curtains-opened' : ''}`}>
        <div className="draped-curtain left-side-curtain">
          <div className="curtain-folds"></div>
          <div className="curtain-tieback"></div>
        </div>
        <div className="draped-curtain right-side-curtain">
          <div className="curtain-folds"></div>
          <div className="curtain-tieback"></div>
        </div>
      </div>

      {/* Stage Background */}
      <div className="stage-background">
        <div className="spotlight-cone"></div>
        <div className="floor-spotlight-glow"></div>
        <div className="stage-wooden-floor"></div>
      </div>

      <div className={`container hero-content-wrapper ${curtainsOpen ? 'content-visible' : ''}`}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="stage-badge animate-pulse">
              <span>🎭 উত্তরবঙ্গের সংস্কৃতি ও ভাওয়াইয়া সংগীতের মেলা 🎵</span>
            </div>
            
            <h1 className="hero-title">
              <span className="title-main glow-text">UJAN ETV</span>
              <span className="title-sub">ভাওয়াইয়ার সুর, বাংলার প্রাণ</span>
            </h1>
            
            <div className="hero-subtitle-container">
              <div className="stage-podium">
                <p className="hero-subtitle">
                  <span className="text-content">{displayText}</span>
                  <span className="typing-cursor">|</span>
                </p>
              </div>
            </div>

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

            <div className="hero-actions">
              <a href="https://www.youtube.com/@UJANETV" target="_blank" rel="noopener noreferrer" className="btn btn-stage-primary">
                <span className="btn-icon">📺</span>
                YouTube চ্যানেল
              </a>
              <a href="#competitions" onClick={(e) => handleSmoothScroll(e, '#competitions')} className="btn btn-stage-secondary">
                <span className="btn-icon">🎤</span>
                প্রতিযোগিতায় অংশ নিন
              </a>
              <a href="#latest-video" onClick={(e) => handleSmoothScroll(e, '#latest-video')} className="btn btn-stage-outline">
                <span className="btn-icon">🎵</span>
                সর্বশেষ গান
              </a>
            </div>

            {/* 🔥 কেবল অ্যাডমিন লগইন থাকলেই এই বাটনটি আসবে */}
            {isAdmin && (
              <div style={{ marginBottom: '20px' }}>
                <button onClick={handleOpenAddModal} className="btn-admin-add">
                  ➕ নতুন পরিবেশনা যোগ করুন
                </button>
              </div>
            )}

            {/* Performance List */}
            <div className="featured-performance">
              {loading ? (
                <p style={{ color: '#FFD700' }}>তথ্য লোড হচ্ছে...</p>
              ) : !performances || performances.length === 0 ? (
                <p style={{ color: '#ccc' }}>কোনো পরিবেশনা যুক্ত করা হয়নি।</p>
              ) : (
                performances.map((item) => (
                  <div key={item.id} className="performance-card-wrapper" style={{ position: 'relative', marginBottom: '15px' }}>
                    <div 
                      className="performance-card" 
                      onClick={() => {
                        if (item.link) window.open(item.link, '_blank');
                      }}
                    >
                      <div className="artist-avatar">
                        <div className="avatar-placeholder">🎭</div>
                      </div>
                      <div className="performance-info">
                        <h4>{item.title || 'শিরোনাম নেই'}</h4>
                        <p>"{item.song_title || 'গানের নাম নেই'}"</p>
                        <div className="performance-stats">
                          <span>👁️ {item.views || '0'} ভিউ</span>
                          <span>❤️ {item.likes || '0'} লাইক</span>
                        </div>
                      </div>
                      <div className="play-button">
                        <span>▶</span>
                      </div>
                    </div>

                    {/* 🔥 কেবল অ্যাডমিনদের জন্যই Edit & Delete বাটন দৃশ্যমান হবে */}
                    {isAdmin && (
                      <div className="admin-actions">
                        <button onClick={() => handleOpenEditModal(item)} className="btn-admin edit">✏️ Edit</button>
                        <button onClick={() => handleDelete(item.id)} className="btn-admin delete">🗑️ Delete</button>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            <div className="stage-social-links">
              <a href="https://www.youtube.com/@UJANETV" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📺</span>
                <span className="social-name">YouTube</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">👥</span>
                <span className="social-name">Facebook</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <span className="social-icon">📷</span>
                <span className="social-name">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={(e) => handleSmoothScroll(e, '#latest-video')}>
        <div className="scroll-text">নিচে স্ক্রল করুন</div>
        <div className="scroll-arrow">↓</div>
      </div>

      {/* Admin Add/Edit Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>{editItem ? 'পরিবেশনা এডিট করুন' : 'নতুন পরিবেশনা যোগ করুন'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>হেডিং (যেমন: সর্বশেষ ভাওয়াইয়া পরিবেশনা)</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>গানের নাম</label>
                <input
                  type="text"
                  required
                  value={formData.song_title}
                  onChange={(e) => setFormData({ ...formData, song_title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>ভিউ (যেমন: ১.২M)</label>
                <input
                  type="text"
                  value={formData.views}
                  onChange={(e) => setFormData({ ...formData, views: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>লাইক (যেমন: ৫০K)</label>
                <input
                  type="text"
                  value={formData.likes}
                  onChange={(e) => setFormData({ ...formData, likes: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>লিংক (YouTube URL)</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                />
              </div>
              <div className="modal-actions">
                <button type="submit" className="btn-save" disabled={isSubmitting}>
                  {isSubmitting ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ করুন'}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn-cancel" disabled={isSubmitting}>
                  বাতিল
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;