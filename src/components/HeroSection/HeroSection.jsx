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
      {/* Decorative Botanical Leaf Accents & Dot Patterns */}
      <div className="hero-decorations" aria-hidden="true">
        {/* Top-left subtle teal organic flow */}
        <svg className="hero-shape-top-left" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-60,0 C80,60 160,180 180,320 C120,380 40,400 -60,400 Z" fill="#EAF8F8" opacity="0.8" />
          <path d="M-100,-40 C40,20 100,120 120,240 C80,300 20,320 -100,320 Z" fill="#D5F0F1" opacity="0.5" />
        </svg>

        {/* Subtle Dotted Pattern Behind Heading */}
        <div className="hero-dot-pattern"></div>

        {/* Bottom-left lush green botanical leaves matching design reference */}
        <svg className="botanical-leaves-bottom-left" viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Leaf 1 */}
          <path
            d="M-40,280 C-10,220 20,160 85,110 C80,160 55,220 0,280 Z"
            fill="#3FA363"
            opacity="0.85"
          />
          <path d="M-20,270 Q25,180 82,112" stroke="#2D7B48" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Main Leaf 2 (Upper left) */}
          <path
            d="M-50,220 C-15,160 10,95 65,45 C55,100 25,165 -30,230 Z"
            fill="#52B774"
            opacity="0.78"
          />
          <path d="M-35,210 Q5,120 62,47" stroke="#378A52" strokeWidth="2" strokeLinecap="round" />

          {/* Accent Leaf 3 (Small Sprout) */}
          <path
            d="M20,280 C50,240 85,210 140,195 C120,235 80,265 30,290 Z"
            fill="#69C888"
            opacity="0.75"
          />
          <path d="M30,275 Q80,225 137,196" stroke="#3FA363" strokeWidth="1.8" strokeLinecap="round" />
        </svg>

        {/* Right-side lush green botanical leaves */}
        <svg className="botanical-leaves-right" viewBox="0 0 160 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M160,80 C110,110 80,160 70,220 C105,185 140,150 160,140 Z"
            fill="#3FA363"
            opacity="0.8"
          />
          <path d="M155,90 Q95,150 72,218" stroke="#2D7B48" strokeWidth="2.2" strokeLinecap="round" />
          
          <path
            d="M160,20 C120,40 95,85 90,140 C120,105 148,70 160,60 Z"
            fill="#52B774"
            opacity="0.75"
          />
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
                src="/images/hero_campus_building.jpg"
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
