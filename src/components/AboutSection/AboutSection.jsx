import React from 'react';
import { BookOpen, Laptop, Users2, ArrowRight } from 'lucide-react';
import './AboutSection.css';

export default function AboutSection() {
  const cards = [
    {
      id: 1,
      title: 'Academic Excellence',
      description: 'Comprehensive curriculum with clinical exposure',
      image: '/images/about_academic_excellence.jpg',
      icon: <BookOpen size={20} />,
    },
    {
      id: 2,
      title: 'Modern Facilities',
      description: 'Well-equipped labs and advanced infrastructure',
      image: '/images/about_modern_facilities.jpg',
      icon: <Laptop size={20} />,
    },
    {
      id: 3,
      title: 'Skilled Faculty',
      description: 'Learn from experienced and dedicated faculty',
      image: '/images/about_skilled_faculty.jpg',
      icon: <Users2 size={20} />,
    },
  ];

  return (
    <section className="about-section" id="about-us">
      {/* Subtle Botanical Decoration Bottom Left */}
      <div className="about-decorations" aria-hidden="true">
        <svg className="botanical-svg-bottom" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,180 Q90,120 170,100 Q110,140 50,180 Z" fill="#90CDF4" opacity="0.25" />
          <path d="M30,140 Q80,90 150,70 Q90,120 30,140 Z" fill="#63B3ED" opacity="0.2" />
        </svg>
      </div>

      <div className="container about-container">
        {/* Left Descriptive Column */}
        <div className="about-left-col">
          <div className="about-eyebrow">
            <span className="about-eyebrow-dash"></span>
            <span className="about-eyebrow-text">ABOUT US</span>
          </div>

          <h2 className="about-heading">
            Shaping Future Physiotherapy Professionals
          </h2>

          <p className="about-paragraph">
            Alva’s College of Physiotherapy and Research Centre has been a pioneer in providing quality physiotherapy education since 1995, with a focus on academic excellence, clinical exposure and holistic development.
          </p>

          <a href="#about-us" className="btn-about-action">
            <span>Know More About Us</span>
            <ArrowRight size={18} className="about-btn-arrow" />
          </a>
        </div>

        {/* Right 3 Feature Image Cards */}
        <div className="about-right-col">
          <div className="about-cards-grid">
            {cards.map((card) => (
              <div key={card.id} className="about-feature-card">
                <div className="card-image-wrapper">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="card-feature-img"
                  />
                  <div className="card-gradient-overlay"></div>
                </div>

                <div className="card-info-content">
                  <div className="card-icon-box" aria-hidden="true">
                    {card.icon}
                  </div>
                  <div className="card-text-group">
                    <h3 className="card-feature-title">{card.title}</h3>
                    <p className="card-feature-desc">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
