// src/App.js
import React from 'react';
// import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CompetitionList from './components/CompetitionList/CompetitionList';
import Winners from './components/Winners/Winners';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <CompetitionList />
      <Winners />
      <About />
      <Footer />
    </div>
  );
}

export default App;