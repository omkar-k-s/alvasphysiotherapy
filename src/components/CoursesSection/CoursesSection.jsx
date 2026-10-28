import React from 'react';
import { Clock, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import './CoursesSection.css';

export default function CoursesSection() {
  const courses = [
    {
      id: 'bpt',
      badge: 'Undergraduate',
      title: 'Bachelor of Physiotherapy (BPT)',
      image: '/images/about_academic_excellence.jpg',
      description:
        'A comprehensive undergraduate programme combining foundational medical sciences with intensive clinical internships to develop skilled physiotherapy practitioners.',
      duration: '4½ Years (incl. 6 Months Internship)',
      eligibility: '10+2 / PUC with Physics, Chemistry & Biology',
      features: ['Clinical Bedside Training', 'Hands-on Biomechanics Lab', 'Rotational Hospital Postings'],
      link: '#bpt',
    },
    {
      id: 'mpt',
      badge: 'Postgraduate',
      title: 'Master of Physiotherapy (MPT)',
      image: '/images/hero_physio_treatment.jpg',
      description:
        'Advanced master’s programme offering in-depth clinical specialisations, diagnostic acumen, and evidence-based clinical decision making.',
      duration: '2 Years Full-Time',
      eligibility: 'BPT Degree with minimum 50% aggregate',
      features: [
        'Musculoskeletal & Sports',
        'Neurological & Psychosomatic',
        'Cardio-Respiratory & Paediatrics',
      ],
      link: '#mpt',
    },
    {
      id: 'phd',
      badge: 'Doctoral Research',
      title: 'PhD in Physiotherapy',
      image: '/images/hero_rehab_lab.jpg',
      description:
        'A premier research degree fostering scholarly inquiry, clinical innovation, and scientific contributions to the global field of physical rehabilitation.',
      duration: '3 to 5 Years',
      eligibility: 'MPT Degree from a recognised university',
      features: ['Advanced Biomechanics Centre', 'Peer-Reviewed Research Guidance', 'Interdisciplinary Studies'],
      link: '#phd',
    },
  ];

  return (
    <section className="courses-section" id="courses" aria-label="Courses Offered">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">OUR PROGRAMS</span>
            <span className="eyebrow-dash"></span>
          </div>

          <h2 className="section-title">Courses Offered</h2>

          <p className="section-subtitle">
            Explore physiotherapy programmes designed to support your academic and professional journey.
          </p>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <article key={course.id} className="course-card">
              <div className="course-card-image-box">
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card-img"
                  loading="lazy"
                />
                <span className="course-badge">{course.badge}</span>
              </div>

              <div className="course-card-body">
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.description}</p>

                <div className="course-meta-list">
                  <div className="course-meta-item">
                    <Clock size={16} className="meta-icon" />
                    <span className="meta-text">{course.duration}</span>
                  </div>
                  <div className="course-meta-item">
                    <GraduationCap size={16} className="meta-icon" />
                    <span className="meta-text">{course.eligibility}</span>
                  </div>
                </div>

                <div className="course-highlights-group">
                  <span className="highlights-label">Program Highlights:</span>
                  <ul className="course-bullets" role="list">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="course-bullet-item">
                        <CheckCircle size={14} className="bullet-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="course-card-footer">
                  <a href={course.link} className="btn-course-details">
                    <span>View Details</span>
                    <ArrowRight size={16} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
