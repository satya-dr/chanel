import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompetitionCard from './CompetitionCard';
import { supabase } from '../../supabaseClient';
import './CompetitionList.css';

const CompetitionList = () => {
  const [featuredCompetitions, setFeaturedCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        setLoading(true);
        if (!supabase) return;

        const { data, error } = await supabase
          .from('competitions')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(6); // হোমপেজের জন্য প্রথম ৬টি দেখাবে

        if (error) {
          console.error('Supabase Error:', error.message);
          setFeaturedCompetitions([]);
        } else {
          setFeaturedCompetitions(data || []);
        }
      } catch (error) {
        console.error('Data Fetching Exception:', error);
        setFeaturedCompetitions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCompetitions();
  }, []);

  return (
    <section id="competitions" className="competition-section">
      <div className="container">
        <div className="section-header">
          <div className="header-content">
            <div className="stage-badge-sm">🏆 প্রতিযোগিতা</div>
            <h2 className="section-title">বর্তমান প্রতিযোগিতাসমূহ</h2>
            <p className="section-subtitle">উত্তরবঙ্গের সেরা ভাওয়াইয়া সংগীত প্রতিযোগিতায় অংশ নিন এবং আপনার প্রতিভা মেলে ধরুন</p>
          </div>
          <Link to="/competitions" className="view-all-btn">
            সকল প্রতিযোগিতা <span>→</span>
          </Link>
        </div>
        
        <div className="competition-grid">
          {loading ? (
            <p style={{ color: '#FFD700', textAlign: 'center', gridColumn: '1/-1' }}>
              প্রতিযোগিতা লোড হচ্ছে...
            </p>
          ) : featuredCompetitions.length === 0 ? (
            <p style={{ color: '#ccc', textAlign: 'center', gridColumn: '1/-1' }}>
              কোনো প্রতিযোগিতা পাওয়া যায়নি।
            </p>
          ) : (
            featuredCompetitions.map(competition => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitionList;