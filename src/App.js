// src/App.js (সম্পূর্ণ আপডেটেড)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/gallery" element={<GalleryPage />} /> */}
          <Route path="/all-songs" element={<AllSongsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/new-songs" element={<NewSongsPage />} />
          <Route path="/live" element={<LiveShowsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/festival" element={<FestivalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/competitions" element={<CompetitionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;