// src/pages/FestivalPage.js
import React from 'react';
import Header from '../components/Header/Header';
import Festival from '../components/Festival/Festival';
import Footer from '../components/Footer/Footer';

const FestivalPage = () => {
  return (
    <>
      <Header />
      <main>
        <Festival />
      </main>
      <Footer />
    </>
  );
};

export default FestivalPage;