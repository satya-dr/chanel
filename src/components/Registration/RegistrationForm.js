import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    age: '',
    address: '',
    songType: '',
    songTitle: '',
    experience: '',
    videoLink: '',
    termsAccepted: false
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('আপনার রেজিস্ট্রেশন সফলভাবে জমা হয়েছে!');
    }, 2000);
  };

  const competitionInfo = {
    title: "ভাওয়াইয়া সংগীত প্রতিযোগিতা ২০২৪",
    deadline: "৩০ ডিসেম্বর, ২০২৪",
    prize: "১,০০,০০০ টাকা",
    fee: "২০০ টাকা"
  };

  return (
    <section className="registration-section">
      <div className="container">
        <div className="competition-header">
          <div className="competition-badge">🔴 নিবন্ধন চলছে</div>
          <h1 className="competition-title">{competitionInfo.title}</h1>
          <div className="competition-details">
            <div className="detail-item">
              <span className="detail-icon">🎁</span>
              <span>পুরস্কার: {competitionInfo.prize}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">⏰</span>
              <span>শেষ তারিখ: {competitionInfo.deadline}</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">💳</span>
              <span>ফি: {competitionInfo.fee}</span>
            </div>
          </div>
        </div>

        <div className="registration-container">
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
            <div className="progress-steps">
              <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <span className="step-number">১</span>
                <span className="step-text">ব্যক্তিগত তথ্য</span>
              </div>
              <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <span className="step-number">২</span>
                <span className="step-text">সংগীত তথ্য</span>
              </div>
              <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                <span className="step-number">৩</span>
                <span className="step-text">নিশ্চিতকরণ</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="registration-form">
            {currentStep === 1 && (
              <div className="form-step">
                <h3 className="step-title">ব্যক্তিগত তথ্য</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="fullName">পূর্ণ নাম *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">মোবাইল নম্বর *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="০১৮XXXXXXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">ইমেইল ঠিকানা</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="age">বয়স *</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      min="16"
                      max="40"
                      placeholder="১৬-৪০ বছরের মধ্যে"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="address">ঠিকানা *</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                    ></textarea>
                  </div>
                </div>

                <div className="form-actions">
                  <div></div>
                  <button type="button" className="btn-next" onClick={nextStep}>
                    পরবর্তী ধাপ <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="form-step">
                <h3 className="step-title">সংগীত তথ্য</h3>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="songType">গানের ধরণ *</label>
                    <select
                      id="songType"
                      name="songType"
                      value={formData.songType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">গানের ধরণ নির্বাচন করুন</option>
                      <option value="ভাওয়াইয়া">ভাওয়াইয়া</option>
                      <option value="ভাটিয়ালি">ভাটিয়ালি</option>
                      <option value="জারি">জারি</option>
                      <option value="সারি">সারি</option>
                      <option value="মুর্শিদি">মুর্শিদি</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="songTitle">গানের শিরোনাম *</label>
                    <input
                      type="text"
                      id="songTitle"
                      name="songTitle"
                      value={formData.songTitle}
                      onChange={handleInputChange}
                      required
                      placeholder="গানের শিরোনাম লিখুন"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="experience">সংগীত অভিজ্ঞতা *</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">অভিজ্ঞতা নির্বাচন করুন</option>
                      <option value="শুরু">প্রাথমিক (০-১ বছর)</option>
                      <option value="মধ্যম">মধ্যম (১-৩ বছর)</option>
                      <option value="অভিজ্ঞ">অভিজ্ঞ (৩+ বছর)</option>
                      <option value="পেশাদার">পেশাদার</option>
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="videoLink">ভিডিও লিঙ্ক (YouTube/Drive) *</label>
                    <input
                      type="url"
                      id="videoLink"
                      name="videoLink"
                      value={formData.videoLink}
                      onChange={handleInputChange}
                      required
                      placeholder="https://youtube.com/your-video"
                    />
                    <small className="help-text">
                      আপনার পরিবেশনের ভিডিও লিঙ্ক প্রদান করুন (সর্বোচ্চ ৩ মিনিট)
                    </small>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-prev" onClick={prevStep}>
                    <span>←</span> পূর্ববর্তী
                  </button>
                  <button type="button" className="btn-next" onClick={nextStep}>
                    পরবর্তী ধাপ <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="form-step">
                <h3 className="step-title">তথ্য নিশ্চিতকরণ</h3>
                
                <div className="confirmation-section">
                  <div className="confirmation-card">
                    <h4>আপনার প্রদত্ত তথ্য মিলিয়ে নিন</h4>
                    
                    <div className="review-info">
                      <div className="info-group">
                        <h5>ব্যক্তিগত তথ্য</h5>
                        <p><strong>নাম:</strong> {formData.fullName}</p>
                        <p><strong>মোবাইল:</strong> {formData.phone}</p>
                        <p><strong>ইমেইল:</strong> {formData.email || 'দেওয়া হয়নি'}</p>
                        <p><strong>বয়স:</strong> {formData.age} বছর</p>
                        <p><strong>ঠিকানা:</strong> {formData.address}</p>
                      </div>

                      <div className="info-group">
                        <h5>সংগীত তথ্য</h5>
                        <p><strong>গানের ধরণ:</strong> {formData.songType}</p>
                        <p><strong>গানের শিরোনাম:</strong> {formData.songTitle}</p>
                        <p><strong>অভিজ্ঞতা:</strong> {formData.experience}</p>
                        <p><strong>ভিডিও লিঙ্ক:</strong> 
                          <a href={formData.videoLink} target="_blank" rel="noopener noreferrer">
                            লিঙ্ক দেখুন 🔗
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="terms-agreement">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="termsAccepted"
                          checked={formData.termsAccepted}
                          onChange={handleInputChange}
                          required
                        />
                        <span>আমি প্রতিযোগিতার সকল নিয়ম ও শর্তাবলী সজ্ঞানচিত্তে মেনে নিতে সম্মত। *</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-prev" onClick={prevStep}>
                    <span>←</span> পূর্ববর্তী
                  </button>
                  <button 
                    type="submit" 
                    className="btn-submit"
                    disabled={!formData.termsAccepted || isSubmitting}
                  >
                    {isSubmitting ? 'জমা হচ্ছে...' : 'নিবন্ধন সম্পন্ন করুন ✓'}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="rules-sidebar">
            <h4>নির্দেশাবলী</h4>
            <div className="rules-list">
              <div className="rule-item">
                <span className="rule-icon">🎵</span>
                <span>শুধুমাত্র ভাওয়াইয়া বা লোকসংগীত</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">👤</span>
                <span>বয়সসীমা ১৬-৪০ বছর</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">⏱️</span>
                <span>ভিডিও দৈর্ঘ্য সর্বোচ্চ ৩ মিনিট</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">💳</span>
                <span>নিবন্ধন ফি: ২০০ টাকা</span>
              </div>
              <div className="rule-item">
                <span className="rule-icon">🏆</span>
                <span>প্রথম পুরস্কার: ১,০০,০০০ টাকা</span>
              </div>
            </div>

            <div className="contact-info">
              <h5>সাহায্যের জন্য</h5>
              <p><span className="c-icon">📞</span> +৯১ XXXXXXX২৬৮</p>
              <p><span className="c-icon">✉️</span> satyajit@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;