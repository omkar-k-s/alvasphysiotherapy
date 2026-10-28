import React from 'react';
import { Trophy, Palette, Award, Users2, ArrowRight } from 'lucide-react';
import './StudentLifeSection.css';

export default function StudentLifeSection() {
  const features = [
    {
      id: 1,
      title: 'Sports & Fitness',
      desc: 'National-level sports amenities, athletic tracks, and hands-on sports physiotherapy mentorship.',
      icon: <Trophy size={20} />,
    },
    {
      id: 2,
      title: 'Cultural Activities',
      desc: 'Home to the world-renowned Alva’s Virasat and Nudisiri celebrating art, dance, and music.',
      icon: <Palette size={20} />,
    },
    {
      id: 3,
      title: 'Student Achievements',
      desc: 'Consistently securing top university ranks, clinical excellence awards, and research fellowships.',
      icon: <Award size={20} />,
    },
    {
      id: 4,
      title: 'Alumni Network',
      desc: 'Global network of 1000+ practicing physiotherapists in leading hospitals and sports franchises worldwide.',
      icon: <Users2 size={20} />,
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/images/about_skilled_faculty.jpg',
      alt: 'Clinical Workshops & Learning',
      title: 'Academic & Clinical Workshops',
    },
    {
      id: 2,
      src: '/images/student_life_sports.jpg',
      alt: 'Sports & Fitness Training',
      title: 'Sports & Athletic Training',
    },
    {
      id: 3,
      src: '/images/student_life_cultural.jpg',
      alt: 'Cultural Celebrations',
      title: 'Cultural Festivals & Arts',
    },
    {
      id: 4,
      src: '/images/student_life_graduation.jpg',
      alt: 'Convocation & Graduation',
      title: 'Graduation & Convocation',
    },
  ];

  return (
    <section className="student-life-section" id="life-at-alvas" aria-label="Life at Alva's">
      <div className="container student-life-container">
        {/* Left Side: 4-Photo Visually Balanced Gallery */}
        <div className="life-gallery-column">
          <div className="life-gallery-grid">
            {galleryImages.map((img) => (
              <div key={img.id} className="life-gallery-card">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-card-img"
                  loading="lazy"
                />
                <div className="gallery-card-overlay">
                  <span className="gallery-card-title">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Information & Feature Highlights */}
        <div className="life-content-column">
          <div className="section-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">LIFE @ ALVA'S</span>
          </div>

          <h2 className="section-title">Beyond Academics</h2>

          <p className="life-description">
            Explore campus experiences, student activities, cultural events, sports, and opportunities for personal development.
          </p>

          <div className="life-features-list">
            {features.map((item) => (
              <div key={item.id} className="life-feature-item">
                <div className="life-feature-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="life-feature-text">
                  <h3 className="life-feature-title">{item.title}</h3>
                  <p className="life-feature-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="life-cta-wrapper">
            <a href="#life-at-alvas" className="btn-life-explore">
              <span>Explore Student Life</span>
              <ArrowRight size={18} className="btn-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
