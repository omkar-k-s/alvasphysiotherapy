import React from 'react';
import { ArrowRight, Award, Stethoscope } from 'lucide-react';
import { facultyData } from '../../../data/facultyData';
import './FacultySection.css';

export default function FacultySection() {
  const facultyMembers = facultyData;

  return (
    <section className="faculty-section" id="faculty" aria-label="Our Faculty">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">OUR FACULTY</span>
            <span className="eyebrow-dash"></span>
          </div>

          <h2 className="section-title">Experienced and Dedicated Faculty</h2>

          <p className="section-subtitle">
            Learn from qualified professionals with academic knowledge and clinical experience.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="faculty-grid">
          {facultyMembers.map((member) => (
            <article key={member.id} className="faculty-card">
              <div className="faculty-card-header">
                <div className="faculty-avatar-circle">
                  <span className="faculty-initials">{member.initials}</span>
                </div>
                <div className="faculty-badge-icon" aria-hidden="true">
                  <Stethoscope size={18} />
                </div>
              </div>

              <div className="faculty-card-content">
                <h3 className="faculty-name">{member.name}</h3>
                <span className="faculty-designation">{member.designation}</span>
                <span className="faculty-dept">{member.department}</span>

                <div className="faculty-divider"></div>

                <div className="faculty-details-list">
                  <div className="faculty-detail-row">
                    <Award size={15} className="detail-icon" />
                    <span>{member.qualifications}</span>
                  </div>
                  <div className="faculty-detail-row">
                    <span className="exp-indicator">•</span>
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="faculty-cta-wrapper">
          <a href="#about-us" className="btn-faculty-view">
            <span>View All Faculty</span>
            <ArrowRight size={18} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

