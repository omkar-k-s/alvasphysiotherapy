import React from 'react';
import {
  GraduationCap,
  Users,
  HeartPulse,
  BookOpenCheck,
  ArrowRight,
  Award,
} from 'lucide-react';
import HeroBackground from './HeroBackground';
import './HeroSection.css';

export default function HeroSection() {
  const features = [
    {
      id: 1,
      title: 'Evidence-Based',
      subtitle: 'Education',
      icon: <BookOpenCheck size={22} />,
      colorClass: 'icon-blue',
    },
    {
      id: 2,
      title: 'Experienced',
      subtitle: 'Faculty',
      icon: <GraduationCap size={22} />,
      colorClass: 'icon-orange',
    },
    {
      id: 3,
      title: 'Modern',
      subtitle: 'Infrastructure',
      icon: <HeartPulse size={22} />,
      colorClass: 'icon-red',
    },
    {
      id: 4,
      title: 'Holistic',
      subtitle: 'Student Development',
      icon: <Users size={22} />,
      colorClass: 'icon-green',
    },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Decorative Physiotherapy-Themed Background (Pure React + SVG + CSS) */}
      <HeroBackground />

      <div className="container hero-container">
        {/* Left Content Column */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">W E L C O M E &nbsp; T O</span>
          </div>

          <h1 className="hero-heading">
            Alva’s College Of{' '}
            <span className="hero-highlight">Physiotherapy</span>{' '}
            And Research Centre
          </h1>

          <div className="hero-meta-group">
            <p className="hero-affiliate">
              Affiliated to Rajiv Gandhi University of Health Sciences
            </p>
            <p className="hero-since">Since 1995</p>
          </div>

          {/* 4 Feature Highlights Grid */}
          <div className="hero-features-grid">
            {features.map((feat) => (
              <div key={feat.id} className="hero-feature-item">
                <div className={`feature-icon-wrapper ${feat.colorClass}`}>
                  {feat.icon}
                </div>
                <div className="feature-text-block">
                  <span className="feature-primary-text">{feat.title}</span>
                  <span className="feature-secondary-text">{feat.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#courses" className="btn-primary-teal">
              <span>Explore Our Courses</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
            <a href="#about-us" className="btn-secondary-teal">
              <span>About Us</span>
              <ArrowRight size={18} className="btn-arrow-orange" />
            </a>
          </div>
        </div>

        {/* Right Visual Image Collage */}
        <div className="hero-right">
          <div className="hero-collage-wrapper">
            {/* Primary Main Campus Building Card */}
            <div className="main-campus-card">
              <img
                src="/images/hero/hero-campus-building.jpg"
                alt="Alva's College of Physiotherapy Campus Building"
                className="campus-img"
              />
            </div>

            {/* Top Right Floating Treatment Card with Split Script */}
            <div className="floating-card-top">
              <div className="card-top-inner">
                <div className="treatment-script-panel">
                  <div className="script-container">
                    <p className="script-line-1">Restoring Movement</p>
                    <p className="script-line-2">Building Healthier Lives</p>
                    <div className="script-orange-bar" aria-hidden="true"></div>
                  </div>
                </div>
                <div className="treatment-photo-panel">
                  <img
                    src="/images/hero/hero-physio-treatment.jpg"
                    alt="Physiotherapist assisting patient rehabilitation"
                    className="treatment-img"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Right Floating Rehabilitation Facilities Card */}
            <div className="floating-card-bottom">
              <img
                src="/images/hero/hero-rehab-lab.jpg"
                alt="Modern Physiotherapy and Rehabilitation Department Lab"
                className="rehab-lab-img"
              />
              
              {/* Circular Excellence Badge in Deep Teal & Gold */}
              <div className="excellence-badge">
                <div className="badge-icon-circle">
                  <Award size={20} className="badge-award-icon" />
                </div>
                <div className="badge-text-content">
                  <span className="badge-title">EXCELLENCE IN</span>
                  <span className="badge-sub">PHYSIOTHERAPY EDUCATION</span>
                  <span className="badge-year">SINCE 1995</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

