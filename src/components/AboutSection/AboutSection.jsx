import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const highlights = [
    'Affiliated to Rajiv Gandhi University of Health Sciences, Karnataka',
    'Recognised by the relevant government authorities and statutory bodies',
    'Focus on comprehensive clinical training, healthcare research, and innovation',
    'Student-centred learning, mentorship, and holistic professional development',
  ];

  return (
    <section className="about-section" id="about-us" aria-label="About Our College">
      <div className="container about-container">
        {/* Left Column: Large rounded clinical training photo */}
        <div className="about-image-column">
          <div className="about-image-frame">
            <img
              src="/images/about_campus_building.jpg"
              alt="Alva's College of Physiotherapy Campus Building"
              className="about-clinical-img"
              loading="lazy"
            />
            <div className="about-badge-card">
              <span className="badge-highlight-number">Since 1995</span>
              <span className="badge-highlight-sub">Premier Physiotherapy Institute</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information, Highlights & Action */}
        <div className="about-content-column">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dash"></span>
            <span className="about-eyebrow-text">ABOUT OUR COLLEGE</span>
          </div>

          <h2 className="about-heading">
            Shaping Future Physiotherapists Through Excellence
          </h2>

          <p className="about-description">
            Alva’s College of Physiotherapy and Research Centre is committed to providing quality physiotherapy education, clinical training, and opportunities for academic and professional development.
          </p>

          <ul className="about-highlights-list" role="list">
            {highlights.map((point, index) => (
              <li key={index} className="about-highlight-item">
                <div className="highlight-icon-box" aria-hidden="true">
                  <CheckCircle2 size={20} className="highlight-check-icon" />
                </div>
                <span className="highlight-text">{point}</span>
              </li>
            ))}
          </ul>

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
