import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import StatisticsSection from './components/StatisticsSection/StatisticsSection';
import AboutSection from './components/AboutSection/AboutSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import FacilitiesSection from './components/FacilitiesSection/FacilitiesSection';
import FacultySection from './components/FacultySection/FacultySection';
import StudentLifeSection from './components/StudentLifeSection/StudentLifeSection';
import AdmissionsBanner from './components/AdmissionsBanner/AdmissionsBanner';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-root">
      {/* Primary Navigation & Top Institutional Bar */}
      <Header />

      <main id="main-content">
        {/* Completed Hero Section */}
        <HeroSection />

        {/* Section One: College Highlights */}
        <StatisticsSection />

        {/* Section Two: About Our College */}
        <AboutSection />

        {/* Section Three: Courses Offered */}
        <CoursesSection />

        {/* Section Four: Facilities & Infrastructure */}
        <FacilitiesSection />

        {/* Section Five: Faculty */}
        <FacultySection />

        {/* Section Six: Life @ Alva's */}
        <StudentLifeSection />

        {/* Section Seven: Admissions Banner */}
        <AdmissionsBanner />

        {/* Section Eight: News & Events */}
        <NewsSection />
      </main>

      {/* Section Nine: Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
