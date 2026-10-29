import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { eventsData } from '../../../data/eventsData';
import './NewsSection.css';

export default function NewsSection() {
  const newsItems = eventsData;

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

