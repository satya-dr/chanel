// src/pages/ArtistsPage.js
import React from 'react';
import Header from '../components/Header/Header';
import Artists from '../components/Artists/Artists';
import Footer from '../components/Footer/Footer';

const ArtistsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Artists />
      </main>
      <Footer />
    </>
  );
};

export default ArtistsPage;