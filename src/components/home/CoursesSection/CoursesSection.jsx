import React from 'react';
import { Clock, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { coursesData } from '../../../data/coursesData';
import './CoursesSection.css';

export default function CoursesSection() {
  const courses = coursesData;

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

