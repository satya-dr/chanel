// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import CompetitionList from '../components/CompetitionList/CompetitionList';
import NotificationSection from '../components/NotificationSection/NotificationSection';
import LinkCardSwiper from '../components/LinkedCardSwiper/LinkedCardSwiper';
import About from '../components/About/About';
import FAQSection from '../components/Rules/FAQSection';
import Footer from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NotificationSection />
        <LinkCardSwiper />
        <CompetitionList />
        <FAQSection />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;