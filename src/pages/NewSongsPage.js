// src/pages/NewSongsPage.js
import React from 'react';
import Header from '../components/Header/Header';
import NewSongs from '../components/NewSongs/NewSongs';
import Footer from '../components/Footer/Footer';

const NewSongsPage = () => {
  return (
    <>
      <Header />
      <main>
        <NewSongs />
      </main>
      <Footer />
    </>
  );
};

export default NewSongsPage;