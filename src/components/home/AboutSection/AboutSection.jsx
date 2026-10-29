import React from 'react';
import {
  GraduationCap,
  Landmark,
  HeartPulse,
  Users,
  ArrowRight,
} from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const highlights = [
    {
      id: 'affiliation',
      text: 'Affiliated to Rajiv Gandhi University of Health Sciences, Karnataka',
      icon: GraduationCap,
      colorClass: 'icon-aqua',
    },
    {
      id: 'recognition',
      text: 'Recognised by the relevant government authorities and statutory bodies',
      icon: Landmark,
      colorClass: 'icon-orange',
    },
    {
      id: 'training',
      text: 'Focus on comprehensive clinical training, healthcare research, and innovation',
      icon: HeartPulse,
      colorClass: 'icon-pink',
    },
    {
      id: 'development',
      text: 'Student-centred learning, mentorship, and holistic professional development',
      icon: Users,
      colorClass: 'icon-green',
    },
  ];

  return (
    <section className="about-section" id="about-us" aria-label="About Our College">
      {/* Decorative Physiotherapy-Themed Background Elements */}
      <div className="about-decorations" aria-hidden="true">
        {/* Faint Anatomical Spine Illustration along far-left edge */}
        <img
          src="/images/hero/spine-illustration.svg"
          alt=""
          className="about-spine-illustration"
          loading="lazy"
        />

        {/* Top-Right Flowing Layered Teal & Aqua Waves with Contour Lines */}
        <svg
          className="about-waves-top-right"
          viewBox="0 0 460 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutWaveGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#48AAAD" stopOpacity="0.32" />
              <stop offset="60%" stopColor="#8BDADD" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#BDEDEF" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="aboutWaveGrad2" x1="100%" y1="0%" x2="0%" y2="80%">
              <stop offset="0%" stopColor="#BDEDEF" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#EAF8F8" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 160,0 C 240,40 340,90 410,180 C 445,225 460,270 460,320 L 460,0 Z"
            fill="url(#aboutWaveGrad2)"
          />
          <path
            d="M 0,0 C 110,65 240,135 370,145 C 420,150 450,125 460,95 L 460,25 C 410,65 350,80 290,70 C 190,50 90,18 0,0 Z"
            fill="url(#aboutWaveGrad1)"
          />
          <path
            d="M 90,0 C 190,45 300,120 410,120 C 440,120 455,105 460,90"
            stroke="#48AAAD"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M 220,0 C 290,32 370,85 450,112"
            stroke="#48AAAD"
            strokeWidth="1"
            opacity="0.25"
          />
          <path
            d="M 240,0 C 310,36 390,92 460,120"
            stroke="#48AAAD"
            strokeWidth="1"
            opacity="0.20"
          />
        </svg>

        {/* Bottom-Left Flowing Organic Waves */}
        <svg
          className="about-waves-bottom-left"
          viewBox="0 0 360 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="aboutBotGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#BDEDEF" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#EAF8F8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0,220 L 0,80 C 60,105 130,140 200,175 C 260,202 310,215 360,220 Z"
            fill="url(#aboutBotGrad1)"
          />
          <path
            d="M 0,115 C 65,140 140,172 215,200 C 265,216 310,218 360,220"
            stroke="#48AAAD"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.32"
          />
        </svg>

        {/* Upper-Left Subtle Dotted Pattern (5x4 Matrix above Photo) */}
        <svg
          className="about-dots-upper-left"
          width="96"
          height="72"
          viewBox="0 0 96 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#168F95" opacity="0.22">
            <circle cx="8" cy="8" r="2.2" /><circle cx="28" cy="8" r="2.2" /><circle cx="48" cy="8" r="2.2" /><circle cx="68" cy="8" r="2.2" /><circle cx="88" cy="8" r="2.2" />
            <circle cx="8" cy="28" r="2.2" /><circle cx="28" cy="28" r="2.2" /><circle cx="48" cy="28" r="2.2" /><circle cx="68" cy="28" r="2.2" /><circle cx="88" cy="28" r="2.2" />
            <circle cx="8" cy="48" r="2.2" /><circle cx="28" cy="48" r="2.2" /><circle cx="48" cy="48" r="2.2" /><circle cx="68" cy="48" r="2.2" /><circle cx="88" cy="48" r="2.2" />
            <circle cx="8" cy="68" r="2.2" /><circle cx="28" cy="68" r="2.2" /><circle cx="48" cy="68" r="2.2" /><circle cx="68" cy="68" r="2.2" /><circle cx="88" cy="68" r="2.2" />
          </g>
        </svg>

        {/* Right-Side Subtle Dotted Pattern */}
        <svg
          className="about-dots-right"
          width="90"
          height="54"
          viewBox="0 0 90 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#168F95" opacity="0.20">
            <circle cx="9" cy="9" r="1.8" /><circle cx="27" cy="9" r="1.8" /><circle cx="45" cy="9" r="1.8" /><circle cx="63" cy="9" r="1.8" /><circle cx="81" cy="9" r="1.8" />
            <circle cx="9" cy="27" r="1.8" /><circle cx="27" cy="27" r="1.8" /><circle cx="45" cy="27" r="1.8" /><circle cx="63" cy="27" r="1.8" /><circle cx="81" cy="27" r="1.8" />
            <circle cx="9" cy="45" r="1.8" /><circle cx="27" cy="45" r="1.8" /><circle cx="45" cy="45" r="1.8" /><circle cx="63" cy="45" r="1.8" /><circle cx="81" cy="45" r="1.8" />
          </g>
        </svg>

        {/* Pale-Teal Medical Cross Accent */}
        <svg
          className="about-medical-cross"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 13,3 C 13,1.3 14.3,0 16,0 L 20,0 C 21.7,0 23,1.3 23,3 L 23,13 L 33,13 C 34.7,13 36,14.3 36,16 L 36,20 C 36,21.7 34.7,23 33,23 L 23,23 L 23,33 C 23,34.7 21.7,36 20,36 L 16,36 C 14.3,36 13,34.7 13,33 L 13,23 L 3,23 C 1.3,23 0,21.7 0,20 L 0,16 C 0,14.3 1.3,13 3,13 L 13,13 Z"
            fill="#8BDADD"
            fillOpacity="0.40"
          />
        </svg>

        {/* Bottom-Right Faint Watermark of Campus Building */}
        <div className="about-watermark-wrapper">
          <img
            src="/images/campus/campus-building.jpg"
            alt=""
            className="about-watermark-img"
          />
        </div>
      </div>

      <div className="about-main-container">
        {/* Left Column: Campus Photograph with Thick White Frame & Establishment Badge */}
        <div className="about-image-column">
          <div className="about-image-frame">
            <img
              src="/images/campus/campus-building.jpg"
              alt="Alva's College of Physiotherapy and Research Centre Campus Building"
              className="about-clinical-img"
              loading="lazy"
            />

            {/* Establishment Badge */}
            <div className="about-badge-card">
              <div className="badge-icon-box" aria-hidden="true">
                <Landmark size={24} className="badge-building-icon" />
              </div>
              <div className="badge-text-box">
                <span className="badge-highlight-number">Since 1995</span>
                <span className="badge-highlight-sub">Premier Physiotherapy Institute</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Heading, Highlights & CTA Button */}
        <div className="about-content-column">
          {/* Eyebrow with Left Teal Dash */}
          <div className="about-eyebrow">
            <span className="about-eyebrow-dash" aria-hidden="true"></span>
            <span className="about-eyebrow-text">ABOUT OUR COLLEGE</span>
          </div>

          {/* Main Heading with Two-Tone Coloring */}
          <h2 className="about-heading">
            <span className="heading-line-navy">Shaping Future Physiotherapists</span>
            <span className="heading-line-teal">Through Excellence</span>
          </h2>

          {/* Institutional Description */}
          <p className="about-description">
            Alva’s College of Physiotherapy and Research Centre is committed to providing quality
            physiotherapy education, clinical training, and opportunities for academic and
            professional development.
          </p>

          {/* 4 Icon-Led Institutional Highlights */}
          <div className="about-highlights-list" role="list">
            {highlights.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="about-highlight-item" role="listitem">
                  <div className={`highlight-icon-circle ${item.colorClass}`} aria-hidden="true">
                    <IconComponent size={22} className="highlight-svg-icon" strokeWidth={2.2} />
                  </div>
                  <span className="highlight-text">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* Call-to-Action Button */}
          <div className="about-cta-wrapper">
            <a href="#about-us" className="btn-about-teal">
              <span>Learn More About Us</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
