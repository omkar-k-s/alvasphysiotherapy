import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import './NewsSection.css';

export default function NewsSection() {
  const newsItems = [
    {
      id: 1,
      image: '/images/news_symposium.jpg',
      category: 'Academic Conference',
      title: 'National Physiotherapy Conference on Evidence-Based Rehabilitation',
      date: 'October 2026',
      summary:
        'Faculty and research scholars gathered to present groundbreaking findings in neuromuscular therapy, exercise physiology, and sports trauma management.',
      link: '#photo-gallery',
    },
    {
      id: 2,
      image: '/images/news_camp.jpg',
      category: 'Community Outreach',
      title: 'Community Health, Posture & Geriatric Mobility Camp',
      date: 'November 2026',
      summary:
        'Student clinicians and faculty provided comprehensive ergonomic screenings and individualized therapeutic exercise plans for rural residents.',
      link: '#photo-gallery',
    },
    {
      id: 3,
      image: '/images/about_modern_facilities.jpg',
      category: 'Hands-on Workshop',
      title: 'Advanced Workshop on Clinical Gait & Biomechanical Analysis',
      date: 'December 2026',
      summary:
        'Intensive hands-on training for postgraduate students on computerized motion tracking, EMG sensors, and functional gait retraining techniques.',
      link: '#photo-gallery',
    },
  ];

  return (
    <section className="news-section" id="news-events" aria-label="News and Events">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-eyebrow">
            <span className="eyebrow-dash"></span>
            <span className="eyebrow-text">NEWS & EVENTS</span>
            <span className="eyebrow-dash"></span>
          </div>

          <h2 className="section-title">Latest Updates</h2>

          <p className="section-subtitle">
            Stay updated with academic symposiums, clinical workshops, and community outreach initiatives at Alva’s.
          </p>
        </div>

        {/* 3 News Cards Grid */}
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-card-image-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="news-card-img"
                  loading="lazy"
                />
                <span className="news-category-badge">{item.category}</span>
              </div>

              <div className="news-card-body">
                <div className="news-meta-date">
                  <Calendar size={15} className="meta-cal-icon" />
                  <span>{item.date}</span>
                </div>

                <h3 className="news-card-title">{item.title}</h3>
                <p className="news-card-summary">{item.summary}</p>

                <div className="news-card-footer">
                  <a href={item.link} className="btn-news-read">
                    <span>Read More</span>
                    <ArrowRight size={16} className="btn-arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="news-cta-wrapper">
          <a href="#photo-gallery" className="btn-news-view-all">
            <span>View All Updates</span>
            <ArrowRight size={18} className="btn-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
