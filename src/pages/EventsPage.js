// src/pages/EventsPage.js
import React from 'react';
import Header from '../components/Header/Header';
import Events from '../components/Events/Events';
import Footer from '../components/Footer/Footer';

const EventsPage = () => {
  return (
    <>
      <Header />
      <main>
        <Events />
      </main>
      <Footer />
    </>
  );
};

export default EventsPage;