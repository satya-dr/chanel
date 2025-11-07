// src/pages/RegistrationPage.js
import React from 'react';
import Header from '../components/Header/Header';
import RegistrationForm from '../components/Registration/RegistrationForm';
import Footer from '../components/Footer/Footer';

const RegistrationPage = () => {
  return (
    <>
      <Header />
      <main>
        <RegistrationForm />
      </main>
      <Footer />
    </>
  );
};

export default RegistrationPage;