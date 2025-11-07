// src/pages/CompetitionsPage.js
import React from 'react';
import Header from '../components/Header/Header';
import AllCompetitions from '../components/Competitions/AllCompetitions';
import Footer from '../components/Footer/Footer';

const CompetitionsPage = () => {
  return (
    <>
      <Header />
      <main>
        <AllCompetitions />
      </main>
      <Footer />
    </>
  );
};

export default CompetitionsPage;