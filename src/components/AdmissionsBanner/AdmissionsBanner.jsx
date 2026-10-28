import React from 'react';
import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import './AdmissionsBanner.css';

export default function AdmissionsBanner() {
  const points = [
    'Merit-based RGUHS admission process',
    'Comprehensive clinical hospital training',
    'Dedicated placement and research mentoring',
  ];

  return (
    <section className="admissions-section" id="admission" aria-label="Admissions">
      <div className="container">
        <div className="admissions-banner-card">
          <div className="admissions-grid">
            {/* Left Content */}
            <div className="admissions-content">
              <div className="admissions-eyebrow">
                <span className="eyebrow-dash"></span>
                <span className="eyebrow-text">ADMISSIONS</span>
              </div>

              <h2 className="admissions-heading">
                Begin Your Journey in Physiotherapy
              </h2>

              <p className="admissions-text">
                Take the next step towards an education in physiotherapy and a future in healthcare.
              </p>

              <div className="admissions-points-list">
                {points.map((pt, index) => (
                  <div key={index} className="admissions-point-item">
                    <CheckCircle2 size={16} className="point-check" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="admissions-buttons-group">
                <a href="#registration" className="btn-apply-primary">
                  <span>Apply Now</span>
                  <ArrowRight size={18} className="btn-arrow" />
                </a>

                <a href="#admission-procedures" className="btn-admission-secondary">
                  <span>Admission Details</span>
                  <FileText size={18} className="btn-icon" />
                </a>
              </div>
            </div>

            {/* Right Campus Image */}
            <div className="admissions-image-side">
              <div className="admissions-image-frame">
                <img
                  src="/images/hero_campus_building.jpg"
                  alt="Alva's College of Physiotherapy Campus Building"
                  className="admissions-campus-img"
                  loading="lazy"
                />
                <div className="admissions-floating-badge">
                  <span className="badge-year">Academic Year 2026–27</span>
                  <span className="badge-status">Admissions Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
