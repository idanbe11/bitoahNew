// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Privacy from './components/Privacy';
import FormPage from './components/FormPage';
import UserWayWidget from './components/UserWayWidget'; // ✅

import './App.css';

function App() {
  return (
    <>
      <UserWayWidget /> {/* ✅ Adds the UserWay accessibility widget */}
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
