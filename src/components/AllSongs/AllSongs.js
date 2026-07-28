import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient'; // আপনার supabaseClient-এর পাথ অনুযায়ী
import './AllSongs.css';

const AllSongs = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Admin Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    song_title: '',
    artist: '',
    views: '',
    likes: '',
    duration: '',
    category: 'new',
    image: '',
    link: ''
  });

  // --- ১. Admin Status Check (Instant Update) ---
  useEffect(() => {
    const checkAdmin = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAdmin(loggedIn);
    };

    checkAdmin(); // Initial Check

    window.addEventListener('authChange', checkAdmin);
    window.addEventListener('storage', checkAdmin);

    return () => {
      window.removeEventListener('authChange', checkAdmin);
      window.removeEventListener('storage', checkAdmin);
    };
  }, []);

  // --- ২. Supabase থেকে গান লোড করা ---
  const fetchSongs = async () => {
    try {
      setLoading(true);
      if (!supabase) return;

      const { data, error } = await supabase
        .from('bhawaiya_songs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase Error:', error.message);
        setSongs([]);
      } else {
        setSongs(data || []);
      }
    } catch (error) {
      console.error('Data Fetching Exception:', error);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  // --- ৩. Delete Function ---
  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই গানটি মুছে ফেলতে চান?")) {
      try {
        const { error } = await supabase
          .from('bhawaiya_songs')
          .delete()
          .eq('id', id);

        if (error) throw error;
        setSongs(prev => prev.filter(song => song.id !== id));
      } catch (error) {
        alert('মুছে ফেলার সময় সমস্যা হয়েছে: ' + error.message);
      }
    }
  };

  // --- ৪. Modal Handlers ---
  const handleOpenAddModal = () => {
    setEditItem(null);
    setFormData({
      title: 'ভাওয়াইয়া গান',
      song_title: '',
      artist: '',
      views: '',
      likes: '',
      duration: '',
      category: 'new',
      image: '',
      link: ''
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (song) => {
    setEditItem(song);
    setFormData({
      title: song.title || 'ভাওয়াইয়া গান',
      song_title: song.song_title || song.title || '',
      artist: song.artist || '',
      views: song.views || '',
      likes: song.likes || '',
      duration: song.duration || '',
      category: song.category || 'new',
      image: song.image || '',
      link: song.link || ''
    });
    setIsModalOpen(true);
  };

  // --- ৫. Save / Update Function ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editItem) {
        // Update Action
        const { error } = await supabase
          .from('bhawaiya_songs')
          .update(formData)
          .eq('id', editItem.id);

        if (error) throw error;
      } else {
        // Create Action
        const { error } = await supabase
          .from('bhawaiya_songs')
          .insert([formData]);

        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchSongs(); // লিস্ট রিফ্রেশ করা
    } catch (error) {
      alert('তথ্য সেভ করার সময় সমস্যা হয়েছে: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter Logic
  const filteredSongs = activeFilter === 'all' 
    ? songs 
    : songs.filter(song => song.category === activeFilter);

  return (
    <section id="all-songs" className="all-songs-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">🎵 সুরের ভাণ্ডার</div>
          <h2 className="section-title">সকল ভাওয়াইয়া গান</h2>
          <p className="section-subtitle">উত্তরবঙ্গের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য ও মন জুড়ানো সুরের মহা সংগ্রহশালা</p>
          
          <div className="songs-stats">
            <div className="stat-card">
              <span className="stat-number">{songs.length}+</span>
              <span className="stat-label">সংগীত</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">১০+</span>
              <span className="stat-label">গুণী শিল্পী</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">৫M+</span>
              <span className="stat-label">শ্রোতার ভালোবাসা</span>
            </div>
          </div>
        </div>

        {/* 🔒 Admin Add Button */}
        {isAdmin && (
          <div style={{ textCenter: 'center', marginBottom: '25px', textAlign: 'center' }}>
            <button onClick={handleOpenAddModal} className="btn-admin-add" style={{ padding: '10px 24px', fontSize: '1rem' }}>
              ➕ নতুন গান যোগ করুন
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="songs-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            সকল গান
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'popular' ? 'active' : ''}`}
            onClick={() => setActiveFilter('popular')}
          >
            জনপ্রিয়
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'new' ? 'active' : ''}`}
            onClick={() => setActiveFilter('new')}
          >
            নতুন
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'classic' ? 'active' : ''}`}
            onClick={() => setActiveFilter('classic')}
          >
            প্রাচীন
          </button>
        </div>

        {/* Songs Grid */}
        <div className="songs-grid">
          {loading ? (
            <p style={{ color: '#FFD700', textAlign: 'center', width: '100%', gridColumn: '1/-1' }}>
              গান লোড হচ্ছে...
            </p>
          ) : filteredSongs.length === 0 ? (
            <p style={{ color: '#ccc', textAlign: 'center', width: '100%', gridColumn: '1/-1' }}>
              কোনো গান পাওয়া যায়নি।
            </p>
          ) : (
            filteredSongs.map(song => (
              <div key={song.id} className="song-card" style={{ position: 'relative' }}>
                <div className="song-image">
                  <img 
                    src={song.image || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&q=80"} 
                    alt={song.song_title || song.title} 
                  />
                  <div className="song-overlay">
                    <a href={song.link || '#'} target="_blank" rel="noopener noreferrer" className="play-btn">
                      ▶
                    </a>
                  </div>
                  <div className="song-duration">{song.duration || '4:00'}</div>
                </div>
                <div className="song-info">
                  <h3 className="song-title">{song.song_title || song.title}</h3>
                  <p className="song-artist">
                    <span className="icon-artist">👤</span> {song.artist || 'UJAN ETV Artist'}
                  </p>
                  <div className="song-meta">
                    <span className="song-views">
                      <span className="icon-views">👁️</span> {song.views || '0'}
                    </span>
                    <span className="song-category">ভাওয়াইয়া</span>
                  </div>
                  <a href={song.link || '#'} target="_blank" rel="noopener noreferrer" className="song-button">
                    প্লে করুন <span>→</span>
                  </a>

                  {/* 🔒 Admin Edit & Delete Buttons */}
                  {isAdmin && (
                    <div className="admin-actions" style={{ marginTop: '12px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      <button onClick={() => handleOpenEditModal(song)} className="btn-admin edit">✏️ Edit</button>
                      <button onClick={() => handleDelete(song.id)} className="btn-admin delete">🗑️ Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {filteredSongs.length > 0 && (
          <div className="load-more-section">
            <button className="load-more-btn" onClick={fetchSongs}>
              আরও গান লোড করুন <span>↻</span>
            </button>
          </div>
        )}
      </div>

      {/* 🔒 Admin Add/Edit Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <h3>{editItem ? 'গান এডিট করুন' : 'নতুন গান যোগ করুন'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>গানের নাম</label>
                <input
                  type="text"
                  required
                  value={formData.song_title}
                  onChange={(e) => setFormData({ ...formData, song_title: e.target.value })}
                  placeholder="যেমন: মনের আকুলি"
                />
              </div>
              <div className="form-group">
                <label>শিল্পী (Artist Name)</label>
                <input
                  type="text"
                  required
                  value={formData.artist}
                  onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  placeholder="যেমন: শিল্পী ক"
                />
              </div>
              <div className="form-group">
                <label>ইমেজ লিঙ্ক (Image URL)</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
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
                <label>সময়কাল (Duration, যেমন: 4:32)</label>
                <input
                  type="text"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>ক্যাটাগরি</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid #FFD700' }}
                >
                  <option value="new" style={{ background: '#2b0b0b' }}>নতুন (New)</option>
                  <option value="popular" style={{ background: '#2b0b0b' }}>জনপ্রিয় (Popular)</option>
                  <option value="classic" style={{ background: '#2b0b0b' }}>প্রাচীন (Classic)</option>
                </select>
              </div>
              <div className="form-group">
                <label>লিঙ্ক (YouTube URL)</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://youtube.com/watch?v=..."
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

export default AllSongs;