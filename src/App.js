import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Header from './components/Header/Header'; // Header Import (পাথ প্রয়োজনমতো মিলিয়ে নিন)
// import Footer from './components/Footer/Footer'; // যদি Footer থাকে

// Pages
import HomePage from './pages/HomePage';
// import GalleryPage from './pages/GalleryPage';
import AllSongsPage from './pages/AllSongsPage';
import RegistrationPage from './pages/RegistrationPage';
import ArtistsPage from './pages/ArtistsPage';
import NewSongsPage from './pages/NewSongsPage';
import LiveShowsPage from './pages/LiveShowsPage';
import EventsPage from './pages/EventsPage';
import FestivalPage from './pages/FestivalPage';
import AboutPage from './pages/AboutPage';
import CompetitionsPage from './pages/CompetitionsPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // --- LocalStorage থেকে Admin Status ট্র্যাক করা ---
  useEffect(() => {
    const checkAdminStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAdmin(loggedIn);
    };

    checkAdminStatus(); // অ্যাপ খোলার সাথে সাথে চেক হবে

    // অন্য কোনো পেজ বা ট্যাব থেকে লগইন/লগআউট হলে রিয়েল-টাইমে আপডেট হবে
    window.addEventListener('storage', checkAdminStatus);
    return () => window.removeEventListener('storage', checkAdminStatus);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* ১. হেডার এখানে রাখলে সব পেজেই হেডার অটোমেটিক দেখাবে */}
        <Header isAdmin={isAdmin} />

        <Routes>
          {/* ২. HomePage-এ isAdmin prop পাঠানো হলো (যাতে Hero বা Featured Performance এডিট করা যায়) */}
          <Route path="/" element={<HomePage isAdmin={isAdmin} />} />
          
          {/* অন্যান্য পেজের রাউট */}
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
          <Route path="/all-songs" element={<AllSongsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/new-songs" element={<NewSongsPage />} />
          <Route path="/live" element={<LiveShowsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/festival" element={<FestivalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
        </Routes>

        {/* ৩. ফুটার থাকলে এখানে রাখতে পারেন */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;