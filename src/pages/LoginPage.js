import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../components/images/logo.png"; // আপনার ছবির পাথ মিলিয়ে নেবেন
import './LoginPage.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      // অ্যাডমিন লগইন ইমেইল চেক
      if (
        (credentials.email === 'ujanetv@gmail.com' || credentials.email === 'user@gmail.com') && 
        credentials.password === 'bhawaiya2026'
      ) {
        setIsLoading(false);
        
        // --- ১. LocalStorage এ এডমিন ফ্লেগ সেভ করা ---
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', credentials.email);
        
        // --- ২. পুরো অ্যাপে লগইন সিগন্যাল ফায়ার করা ---
        window.dispatchEvent(new Event("authChange"));

        alert('লগইন সফল হয়েছে! UJAN ETV-তে আপনাকে স্বাগতম।');
        navigate('/');
      } else {
        setIsLoading(false);
        setError('ভুল ইমেইল অথবা পাসওয়ার্ড! আবার চেষ্টা করুন।');
      }
    }, 1000);
  };

  return (
    <div className="login-page-container">
      <div className="login-card-wrapper">
        <div className="login-card">
          <div className="login-header">
            <Link to="/">
              <img src={logo} alt="UJAN ETV Logo" className="login-logo" />
            </Link>
            <div className="stage-badge-sm">🔐 শিল্পী ও শ্রোতা প্যানেল</div>
            <h2 className="login-title">UJAN ETV-তে লগ ইন করুন</h2>
            <p className="login-subtitle">ভাওয়াইয়ার সুরে মেতে উঠতে আপনার একাউন্টে প্রবেশ করুন</p>
          </div>

          {error && <div className="login-error-alert">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">ইমেইল ঠিকানা</label>
              <div className="input-with-icon">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  placeholder="আপনার ইমেইল লিখুন"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">পাসওয়ার্ড</label>
              <div className="input-with-icon">
                <span className="input-icon">🔒</span>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  required
                />
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={credentials.rememberMe}
                  onChange={handleChange}
                />
                <span>মনে রাখুন</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('পাসওয়ার্ড রিকভারি লিঙ্ক ইমেইলে পাঠানো হবে।'); }} className="forgot-password">
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div>

            <button type="submit" className="login-submit-btn" disabled={isLoading}>
              {isLoading ? 'যাচাই করা হচ্ছে...' : 'লগ ইন করুন →'}
            </button>
          </form>

          <div className="login-footer">
            <p>নতুন একাউন্ট করতে চান? <Link to="/register">নিবন্ধন করুন</Link></p>
            <Link to="/" className="back-home-link">← হোম পেজে ফিরে যান</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;