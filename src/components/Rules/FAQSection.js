import React, { useState } from 'react';
import './FAQSection.css'; 

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowAllFAQs = () => {
    setShowAllFAQs(!showAllFAQs);
  };

  const allFaqs = [
    { 
      question: "কেমন গান গাওয়া যাবে?", 
      answer: "শুধুমাত্র ভাওয়াইয়া বা লোকসংগীত এই প্রতিযোগিতায় গ্রহণযোগ্য। অন্য কোনো ধারার গান অনুমোদিত নয়।",
      icon: "🎵"
    },
    { 
      question: "অংশগ্রহণের ফি কত?", 
      answer: "প্রথম ধাপের অডিশনের জন্য ২০০ টাকা (₹২০০) ফি প্রযোজ্য। যা রেজিস্ট্রেশন লিঙ্কে পেমেন্ট করতে হবে।",
      icon: "💰"
    },
    { 
      question: "বিজয়ীকে কি শুধু টাকা দেওয়া হবে?", 
      answer: "না। গ্র্যান্ড চ্যাম্পিয়ন পুরস্কারের অর্থ ছাড়াও UJAN ETV চ্যানেলে একটি অফিশিয়াল মিউজিক ভিডিও প্রকাশের সুযোগ পাবেন।",
      icon: "🏆"
    },
    { 
      question: "বিচারক কারা?", 
      answer: "সঙ্গীত জগতের প্রতিষ্ঠিত ব্যক্তিত্বরা এবং কাকু স্বয়ং বিচারক মণ্ডলে থাকবেন।",
      icon: "👨‍⚖️"
    },
    { 
      question: "বয়স সীমা কত?", 
      answer: "প্রতিযোগিতায় অংশগ্রহণের জন্য ন্যূনতম বয়স ১৬ বছর এবং সর্বোচ্চ বয়স ৪০ বছর।",
      icon: "🎂"
    },
    { 
      question: "গানের সময়সীমা কত?", 
      answer: "অডিশনের জন্য গানের সময়সীমা সর্বোচ্চ ৩ মিনিট। সম্পূর্ণ গান রেকর্ড করে জমা দিতে হবে।",
      icon: "⏱️"
    },
    { 
      question: "কোথায় রেজিস্ট্রেশন করতে হবে?", 
      answer: "আমাদের অফিসিয়াল ওয়েবসাইট অথবা UJAN ETV অ্যাপে গিয়ে অনলাইন রেজিস্ট্রেশন সম্পন্ন করতে পারবেন।",
      icon: "📱"
    },
    { 
      question: "রেজাল্ট কিভাবে জানানো হবে?", 
      answer: "প্রতিটি রাউন্ডের রেজাল্ট ওয়েবসাইট, মোবাইল অ্যাপ এবং SMS এর মাধ্যমে জানানো হবে।",
      icon: "📢"
    }
  ];

  const displayedFaqs = showAllFAQs ? allFaqs : allFaqs.slice(0, 4);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="stage-badge-sm">❓ নির্দেশিকা</div>
          <h2 className="section-title">প্রশ্নোত্তর ও নিয়মাবলী</h2>
          <p className="section-subtitle">প্রতিযোগিতা সম্পর্কিত সাধারণ প্রশ্নাবলী ও গুরুত্বপূর্ণ নিয়মাবলীর সংকলন</p>
        </div>
        
        <div className="faq-container">
          {displayedFaqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <div className="faq-icon">{faq.icon}</div>
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-5">
          <button 
            className="view-all-faq-btn"
            onClick={toggleShowAllFAQs}
          >
            {showAllFAQs ? 'কম দেখান ▴' : 'সমস্ত FAQ দেখুন ▾'}
          </button>
        </div>

        <div className="rules-highlight">
          <h3>📋 গুরুত্বপূর্ণ নিয়মাবলী</h3>
          <div className="rules-grid">
            <div className="rule-card">
              <div className="rule-icon">🎤</div>
              <h4>গানের ধরন</h4>
              <p>শুধুমাত্র ভাওয়াইয়া বা লোকসংগীত</p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">👥</div>
              <h4>বয়স সীমা</h4>
              <p>১৬-৪০ বছর</p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">⏰</div>
              <h4>সময়সীমা</h4>
              <p>সর্বোচ্চ ৩ মিনিট</p>
            </div>
            <div className="rule-card">
              <div className="rule-icon">💳</div>
              <h4>রেজিস্ট্রেশন ফি</h4>
              <p>২০০ টাকা</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="cta-buttons">
            <a href="/full-rules-doc" className="full-rules-cta">
              সম্পূর্ণ নিয়মাবলী পড়ুন <span>→</span>
            </a>
            <a href="/register" className="register-cta">
              এখনই রেজিস্টার করুন <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;