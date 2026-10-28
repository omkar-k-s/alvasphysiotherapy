import React from 'react';
import {
  GraduationCap,
  Users,
  HeartPulse,
  BookOpenCheck,
  ArrowRight,
  Award,
} from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  const features = [
    {
      id: 1,
      title: 'Evidence-Based',
      subtitle: 'Education',
      icon: <BookOpenCheck size={20} />,
      colorClass: 'icon-blue',
    },
    {
      id: 2,
      title: 'Experienced',
      subtitle: 'Faculty',
      icon: <GraduationCap size={20} />,
      colorClass: 'icon-orange',
    },
    {
      id: 3,
      title: 'Modern',
      subtitle: 'Infrastructure',
      icon: <HeartPulse size={20} />,
      colorClass: 'icon-red',
    },
    {
      id: 4,
      title: 'Holistic',
      subtitle: 'Student Development',
      icon: <Users size={20} />,
      colorClass: 'icon-green',
    },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Decorative Botanical Watermark SVGs */}
      <div className="hero-decorations" aria-hidden="true">
        <svg className="botanical-svg-top-left" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-20,180 C40,110 110,60 210,40 C140,90 90,160 50,250 Z" fill="#90CDF4" opacity="0.32" />
          <path d="M-40,120 C20,70 90,30 180,10 C120,60 80,120 30,200 Z" fill="#63B3ED" opacity="0.28" />
          <path d="M20,240 C90,190 160,150 260,140 C190,180 140,240 100,320 Z" fill="#BEE3F8" opacity="0.38" />
          <path d="M60,310 C120,270 180,240 270,240 C210,270 170,320 140,390 Z" fill="#E2E8F0" opacity="0.4" />
        </svg>

        <svg className="botanical-svg-top-right" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M280,40 C210,90 160,150 140,240 C180,170 240,120 310,90 Z" fill="#90CDF4" opacity="0.22" />
          <path d="M220,10 C170,60 130,120 110,200 C150,140 200,90 270,60 Z" fill="#63B3ED" opacity="0.18" />
        </svg>
      </div>

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

          {/* 4 Feature Highlights */}
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
            <a href="#courses" className="btn-primary-navy">
              <span>Explore Our Courses</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
            <a href="#about-us" className="btn-secondary-outline">
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
                src="/images/hero_campus_building.jpg"
                alt="Alva's College of Physiotherapy Campus Building"
                className="campus-img"
              />
            </div>

            {/* Top Right Floating Treatment Card with Split Script Wave */}
            <div className="floating-card-top">
              <div className="card-top-inner">
                <div className="treatment-script-panel">
                  <div className="script-container">
                    <p className="script-line-1">Restoring Movement</p>
                    <p className="script-line-2">Building Healthier Lives</p>
                  </div>
                  {/* Organic wave shape */}
                  <svg className="script-wave-separator" viewBox="0 0 20 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0,0 Q18,50 0,100 L20,100 L20,0 Z" fill="#ffffff" />
                  </svg>
                </div>
                <div className="treatment-photo-panel">
                  <img
                    src="/images/hero_physio_treatment.jpg"
                    alt="Physiotherapist assisting patient rehabilitation"
                    className="treatment-img"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Right Floating Rehabilitation Facilities Card */}
            <div className="floating-card-bottom">
              <img
                src="/images/hero_rehab_lab.jpg"
                alt="Modern Physiotherapy and Rehabilitation Department Lab"
                className="rehab-lab-img"
              />
              
              {/* Circular Excellence Badge */}
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
