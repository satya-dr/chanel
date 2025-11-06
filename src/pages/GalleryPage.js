// src/pages/GalleryPage.js
import React from 'react';
import Header from '../components/Header/Header';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';

const GalleryPage = () => {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;