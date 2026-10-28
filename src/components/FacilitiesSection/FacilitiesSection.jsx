import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './FacilitiesSection.css';

export default function FacilitiesSection() {
  const facilities = [
    {
      id: 1,
      title: 'Physiotherapy Laboratories',
      subtitle: 'Hands-on Clinical Skill Simulation',
      description:
        'State-of-the-art anatomy, physiology, and biomechanics laboratories designed for comprehensive practical exposure and clinical skill development.',
      image: '/images/about_modern_facilities.jpg',
    },
    {
      id: 2,
      title: 'Rehabilitation & Exercise Therapy',
      subtitle: 'Advanced Therapeutic Gymnasiums',
      description:
        'Equipped with body-weight support gait training systems, functional capacity evaluation units, and specialized rehabilitation apparatus.',
      image: '/images/hero_rehab_lab.jpg',
    },
    {
      id: 3,
      title: 'Electrotherapy & Modalities',
      subtitle: 'Latest Biophysical Agents',
      description:
        'Advanced clinical electrotherapy modalities including interferential therapy (IFT), laser therapy, therapeutic ultrasound, and computerized traction.',
      image: '/images/facility_electrotherapy.jpg',
    },
    {
      id: 4,
      title: 'Library & Learning Resources',
      subtitle: 'Comprehensive Medical Repository',
      description:
        'Extensive collection of international physiotherapy journals, specialized textbooks, digital research databases, and dedicated e-learning suites.',
      image: '/images/facility_library.jpg',
    },
  ];

  return (
    <section className="facilities-section" id="facilities" aria-label="Our Infrastructure">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">OUR INFRASTRUCTURE</span>
            <span className="eyebrow-dash"></span>
          </div>

          <h2 className="section-title">World-Class Facilities</h2>

          <p className="section-subtitle">
            Discover the learning spaces and clinical resources that support physiotherapy education and practical training.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="facilities-grid">
          {facilities.map((fac) => (
            <article key={fac.id} className="facility-card">
              <div className="facility-card-image-box">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="facility-card-img"
                  loading="lazy"
                />
                <div className="facility-image-gradient"></div>
              </div>

              <div className="facility-card-content">
                <span className="facility-card-subtitle">{fac.subtitle}</span>
                <h3 className="facility-card-title">{fac.title}</h3>
                <p className="facility-card-desc">{fac.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="facilities-cta-container">
          <a href="#facilities" className="btn-facilities-view">
            <span>View All Facilities</span>
            <ArrowRight size={18} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
