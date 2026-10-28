import React from 'react';
import { ArrowRight, Award, Stethoscope, Mail } from 'lucide-react';
import './FacultySection.css';

export default function FacultySection() {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Stephen Raj P.',
      designation: 'Principal & Professor',
      department: 'Physiotherapy in Neurological Sciences',
      qualifications: 'BPT, MPT (Neuro), Ph.D.',
      experience: '22+ Years Academic & Clinical Experience',
      initials: 'SR',
    },
    {
      id: 2,
      name: 'Dr. Vivek M.',
      designation: 'Professor & HOD',
      department: 'Musculoskeletal & Sports Physiotherapy',
      qualifications: 'BPT, MPT (Musculoskeletal)',
      experience: '18+ Years Clinical Specialist',
      initials: 'VM',
    },
    {
      id: 3,
      name: 'Dr. Deepa K.',
      designation: 'Professor & HOD',
      department: 'Cardio-Respiratory Physiotherapy',
      qualifications: 'BPT, MPT (Cardio-Pulmonary)',
      experience: '15+ Years ICU & Cardiac Rehab',
      initials: 'DK',
    },
    {
      id: 4,
      name: 'Dr. Rajesh K.',
      designation: 'Associate Professor & HOD',
      department: 'Paediatric & Community Physiotherapy',
      qualifications: 'BPT, MPT (Paediatrics)',
      experience: '14+ Years Child Neuro Rehab',
      initials: 'RK',
    },
  ];

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
