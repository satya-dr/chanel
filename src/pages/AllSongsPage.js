// src/pages/AllSongsPage.js
import React from 'react';
import Header from '../components/Header/Header';
import AllSongs from '../components/AllSongs/AllSongs.js';
import Footer from '../components/Footer/Footer';

const AllSongsPage = () => {
  return (
    <>
      <Header />
      <main>
        <AllSongs />
      </main>
      <Footer />
    </>
  );
};

export default AllSongsPage;