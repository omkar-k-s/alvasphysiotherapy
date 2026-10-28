import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-root">
      {/* Primary Navigation & Header */}
      <Header />

      <main id="main-content">
        {/* Hero Section matching the new reference design */}
        <HeroSection />

        {/* Statistics Bar */}
        <StatisticsSection />

        {/* About Us Preview with 3 Feature Image Cards */}
        <AboutSection />
      </main>

      {/* College Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
