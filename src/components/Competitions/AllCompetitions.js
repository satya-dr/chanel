import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient'; // আপনার supabaseClient-এর পাথ মিলিয়ে নিন
import './AllCompetitions.css';

const AllCompetitions = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Modal Control States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'ভাওয়াইয়া সংগীত',
    description: '',
    status: 'active',
    deadline: '',
    prize: '',
    entries: 0,
    winner: '',
    rules: '', // Form input state (Text)
    registration_link: '/register'
  });

  // --- ১. Admin Status Check (Instant Update) ---
  useEffect(() => {
    const checkAdmin = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAdmin(loggedIn);
    };

    checkAdmin(); // Initial Load

    window.addEventListener('authChange', checkAdmin);
    window.addEventListener('storage', checkAdmin);

    return () => {
      window.removeEventListener('authChange', checkAdmin);
      window.removeEventListener('storage', checkAdmin);
    };
  }, []);

  // --- ২. Supabase থেকে প্রতিযোগিতা ফেচ করা ---
  const fetchCompetitions = async () => {
    try {
      setLoading(true);
      if (!supabase) return;

      const { data, error } = await supabase
        .from('competitions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase Error:', error.message);
        setCompetitions([]);
      } else {
        setCompetitions(data || []);
      }
    } catch (error) {
      console.error('Data Fetching Exception:', error);
      setCompetitions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompetitions();
  }, []);

  // --- ৩. Delete Function ---
  const handleDelete = async (id) => {
    if (window.confirm("আপনি কি নিশ্চিত এই প্রতিযোগিতাটি মুছে ফেলতে চান?")) {
      try {
        const { error } = await supabase
          .from('competitions')
          .delete()
          .eq('id', id);

        if (error) throw error;
        setCompetitions(prev => prev.filter(c => c.id !== id));
        alert('প্রতিযোগিতাটি সফলভাবে মুছে ফেলা হয়েছে!');
      } catch (error) {
        alert('মুছে ফেলার সময় সমস্যা হয়েছে: ' + (error.message || 'Error occurred'));
      }
    }
  };

  // --- ৪. Open Add/Edit Modal Handlers ---
  const handleOpenAddModal = () => {
    setEditItem(null);
    setFormData({
      name: '',
      category: 'ভাওয়াইয়া সংগীত',
      description: '',
      status: 'active',
      deadline: '',
      prize: '',
      entries: 0,
      winner: '',
      rules: '',
      registration_link: '/register'
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (comp) => {
    setEditItem(comp);
    setFormData({
      name: comp.name || '',
      category: comp.category || 'ভাওয়াইয়া সংগীত',
      description: comp.description || '',
      status: comp.status || 'active',
      deadline: comp.deadline || '',
      prize: comp.prize || '',
      entries: comp.entries || 0,
      winner: comp.winner || '',
      rules: Array.isArray(comp.rules) ? comp.rules.join('\n') : (comp.rules || ''),
      registration_link: comp.registration_link || '/register'
    });
    setIsModalOpen(true);
  };

  // --- ৫. Save / Update Function ---
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Multiline Textarea Value-কে Array-তে কনভার্ট করা (নিরাপদ ফরম্যাট)
    let rulesArray = [];
    if (typeof formData.rules === 'string') {
      rulesArray = formData.rules.split('\n').map(r => r.trim()).filter(r => r !== '');
    } else if (Array.isArray(formData.rules)) {
      rulesArray = formData.rules;
    }

    const payload = {
      name: formData.name,
      category: formData.category || 'ভাওয়াইয়া সংগীত',
      description: formData.description || '',
      status: formData.status || 'active',
      deadline: formData.deadline || '',
      prize: formData.prize || '',
      entries: Number(formData.entries) || 0,
      winner: formData.winner || '',
      rules: rulesArray, // Array safe format for Postgres TEXT[]
      registration_link: formData.registration_link || '/register'
    };

    try {
      if (editItem) {
        // Update Action
        const { error } = await supabase
          .from('competitions')
          .update(payload)
          .eq('id', editItem.id);

        if (error) throw error;
      } else {
        // Create Action
        const { error } = await supabase
          .from('competitions')
          .insert([payload]);

        if (error) throw error;
      }

      setIsModalOpen(false);
      fetchCompetitions(); // Refresh Data
      alert('সফলভাবে তথ্য সংরক্ষিত হয়েছে!');
    } catch (error) {
      console.error('Supabase Save Error:', error);
      alert('সমস্যা হয়েছে: ' + (error.message || 'Supabase এ ডাটা সেভ করা যায়নি। SQL RLS Policy চেক করুন।'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter Logic
  const filteredCompetitions = competitions.filter(competition => {
    if (activeFilter === 'all') return true;
    return competition.status === activeFilter;
  });

  const filterOptions = [
    { key: 'all', label: 'সকল' },
    { key: 'active', label: 'চলমান' },
    { key: 'upcoming', label: 'আসন্ন' },
    { key: 'completed', label: 'সম্পন্ন' }
  ];

  return (
    <section className="all-competitions-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">🏆 প্রতিযোগিতা মঞ্চ</div>
          <h1 className="section-title">সকল প্রতিযোগিতা</h1>
          <p className="section-subtitle">উত্তরবঙ্গের ঐতিহ্যবাহী ভাওয়াইয়া সংগীত প্রতিযোগিতায় অংশ নিন ও আপনার সুরের জাদু ছড়ান</p>
          
          <div className="competitions-stats">
            <div className="stat-card">
              <span className="stat-number">{competitions.length}</span>
              <span className="stat-label">মোট প্রতিযোগিতা</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {competitions.filter(c => c.status === 'active').length}
              </span>
              <span className="stat-label">চলমান</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">
                {competitions.filter(c => c.status === 'upcoming').length}
              </span>
              <span className="stat-label">আসন্ন</span>
            </div>
          </div>
        </div>

        {/* 🔒 Admin Add Button */}
        {isAdmin && (
          <div style={{ marginBottom: '25px', textAlign: 'center' }}>
            <button onClick={handleOpenAddModal} className="btn-admin-add" style={{ padding: '10px 24px', fontSize: '1rem' }}>
              ➕ নতুন প্রতিযোগিতা যোগ করুন
            </button>
          </div>
        )}

        {/* Filters */}
        <div className="competitions-filter">
          {filterOptions.map(option => (
            <button
              key={option.key}
              className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Competition Grid */}
        <div className="all-competitions-grid">
          {loading ? (
            <p style={{ color: '#FFD700', textAlign: 'center', gridColumn: '1/-1' }}>
              প্রতিযোগিতা তথ্য লোড হচ্ছে...
            </p>
          ) : filteredCompetitions.length === 0 ? (
            <div className="no-competitions" style={{ gridColumn: '1/-1' }}>
              <span className="no-data-icon">🎭</span>
              <h3>কোন প্রতিযোগিতা পাওয়া যায়নি</h3>
              <p>বর্তমানে {activeFilter === 'all' ? 'কোন' : activeFilter} প্রতিযোগিতা নেই</p>
            </div>
          ) : (
            filteredCompetitions.map(competition => (
              <div key={competition.id} className="competition-card-large" style={{ position: 'relative' }}>
                <div className="card-header">
                  <div className="competition-status">
                    <span className={`status-badge ${competition.status}`}>
                      {competition.status === 'active' ? '● চলমান' : 
                       competition.status === 'upcoming' ? '⏱️ আসন্ন' : '✓ সম্পন্ন'}
                    </span>
                  </div>
                  <div className="competition-category">{competition.category}</div>
                </div>
                
                <div className="card-body">
                  <h3 className="competition-title">{competition.name}</h3>
                  <p className="competition-description">{competition.description}</p>
                  
                  <div className="competition-details">
                    <div className="detail-item">
                      <span className="detail-icon">📅</span>
                      <div>
                        <span className="label">শেষ তারিখ</span>
                        <span className="value">{competition.deadline || 'জরুরি'}</span>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">🎁</span>
                      <div>
                        <span className="label">পুরস্কার</span>
                        <span className="value prize-value">{competition.prize || 'আকর্ষণীয় পুরস্কার'}</span>
                      </div>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-icon">👥</span>
                      <div>
                        <span className="label">অংশগ্রহণকারী</span>
                        <span className="value">{competition.entries || 0} জন</span>
                      </div>
                    </div>

                    {competition.winner && (
                      <div className="detail-item">
                        <span className="detail-icon">🏆</span>
                        <div>
                          <span className="label">বিজয়ী</span>
                          <span className="value winner">{competition.winner}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {competition.rules && (Array.isArray(competition.rules) ? competition.rules.length > 0 : competition.rules) && (
                    <div className="competition-rules">
                      <h4>প্রধান নিয়মাবলী:</h4>
                      <ul>
                        {(Array.isArray(competition.rules) ? competition.rules : [competition.rules]).slice(0, 3).map((rule, index) => (
                          <li key={index}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="card-footer">
                  {competition.status === 'active' && (
                    <Link to={competition.registration_link || '/register'} className="participate-btn">
                      অংশগ্রহণ করুন <span>→</span>
                    </Link>
                  )}
                  {competition.status === 'upcoming' && (
                    <button className="notify-btn">
                      নোটিফাই করুন <span>🔔</span>
                    </button>
                  )}
                  {competition.status === 'completed' && (
                    <button className="view-result-btn">
                      ফলাফল দেখুন <span>🏆</span>
                    </button>
                  )}
                </div>

                {/* 🔒 Admin Action Buttons */}
                {isAdmin && (
                  <div className="admin-actions" style={{ padding: '15px', display: 'flex', gap: '8px', justifyContent: 'center', borderTop: '1px solid rgba(255,215,0,0.2)' }}>
                    <button onClick={() => handleOpenEditModal(competition)} className="btn-admin edit">✏️ Edit</button>
                    <button onClick={() => handleDelete(competition.id)} className="btn-admin delete">🗑️ Delete</button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* 🔒 Admin Add/Edit Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <h3>{editItem ? 'প্রতিযোগিতা এডিট করুন' : 'নতুন প্রতিযোগিতা যোগ করুন'}</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>প্রতিযোগিতার নাম</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="যেমন: উত্তরবঙ্গ ভাওয়াইয়া প্রতিযোগিতা ২০২৬"
                />
              </div>
              <div className="form-group">
                <label>ক্যাটাগরি</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>বিবরণ (Description)</label>
                <textarea
                  rows="3"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid #FFD700' }}
                />
              </div>
              <div className="form-group">
                <label>স্ট্যাটাস</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid #FFD700' }}
                >
                  <option value="active" style={{ background: '#2b0b0b' }}>চলমান (Active)</option>
                  <option value="upcoming" style={{ background: '#2b0b0b' }}>আসন্ন (Upcoming)</option>
                  <option value="completed" style={{ background: '#2b0b0b' }}>সম্পন্ন (Completed)</option>
                </select>
              </div>
              <div className="form-group">
                <label>শেষ তারিখ (Deadline)</label>
                <input
                  type="text"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  placeholder="যেমন: ১৫ আগস্ট, ২০২৬"
                />
              </div>
              <div className="form-group">
                <label>পুরস্কার (Prize)</label>
                <input
                  type="text"
                  value={formData.prize}
                  onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                  placeholder="যেমন: ৫০,০০০ টাকা + ক্রেস্ট"
                />
              </div>
              <div className="form-group">
                <label>অংশগ্রহণকারী সংখ্যা (Entries)</label>
                <input
                  type="number"
                  value={formData.entries}
                  onChange={(e) => setFormData({ ...formData, entries: Number(e.target.value) })}
                />
              </div>
              <div className="form-group">
                <label>বিজয়ী (যদি সম্পন্ন হয়)</label>
                <input
                  type="text"
                  value={formData.winner}
                  onChange={(e) => setFormData({ ...formData, winner: e.target.value })}
                  placeholder="যেমন: প্রথম স্থান - রাহুল রায়"
                />
              </div>
              <div className="form-group">
                <label>নিয়মাবলী (প্রতি লাইনে একটি করে নিয়ম লিখুন)</label>
                <textarea
                  rows="4"
                  value={formData.rules}
                  onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
                  placeholder="১. বয়স ১৮ এর বেশি হতে হবে&#10;২. গানটি একক হতে হবে"
                  style={{ width: '100%', padding: '8px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.1)', color: '#fff', border: '1px solid #FFD700' }}
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

export default AllCompetitions;