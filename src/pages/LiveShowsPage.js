// src/pages/LiveShowsPage.js (সংশোধিত)
import React from 'react';
import Header from '../components/Header/Header';
import LiveShows from '../components/LiveShows/LiveShows';
import Footer from '../components/Footer/Footer';

const LiveShowsPage = () => {
  return (
    <>
      <Header />
      <main>
        <LiveShows />
      </main>
      <Footer />
    </>
  );
};

export default LiveShowsPage;