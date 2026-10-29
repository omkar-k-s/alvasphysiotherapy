import React from 'react';
import HeroSection from '../components/home/HeroSection/HeroSection';
import StatisticsSection from '../components/home/StatisticsSection/StatisticsSection';
import AboutSection from '../components/home/AboutSection/AboutSection';
import CoursesSection from '../components/home/CoursesSection/CoursesSection';
import FacilitiesSection from '../components/home/FacilitiesSection/FacilitiesSection';
import FacultySection from '../components/home/FacultySection/FacultySection';
import StudentLifeSection from '../components/home/StudentLifeSection/StudentLifeSection';
import AdmissionsBanner from '../components/home/AdmissionsBanner/AdmissionsBanner';
import NewsSection from '../components/home/NewsSection/NewsSection';

/**
 * Main Homepage Composition
 * Arranges homepage sections in semantic presentation order.
 */
export default function Home() {
  return (
    <>
      {/* Hero Welcome & Image Collage */}
      <HeroSection />

      {/* Section 1: College Highlights & Key Statistics */}
      <StatisticsSection />

      {/* Section 2: About Our College */}
      <AboutSection />

      {/* Section 3: Academic Courses (BPT, MPT, Ph.D) */}
      <CoursesSection />

      {/* Section 4: World-Class Infrastructure & Labs */}
      <FacilitiesSection />

      {/* Section 5: Faculty & Academic Leadership */}
      <FacultySection />

      {/* Section 6: Life @ Alva's (Cultural, Sports, Graduation) */}
      <StudentLifeSection />

      {/* Section 7: Admissions Banner */}
      <AdmissionsBanner />

      {/* Section 8: News & Recent Events */}
      <NewsSection />
    </>
  );
}

