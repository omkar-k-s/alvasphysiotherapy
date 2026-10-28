import React from 'react';
import { GraduationCap, Users2, BookOpen, Building2 } from 'lucide-react';
import './StatisticsSection.css';

export default function StatisticsSection() {
  const stats = [
    {
      id: 1,
      value: '30+',
      label: 'Years of Excellence',
      icon: <GraduationCap size={28} />,
    },
    {
      id: 2,
      value: '1000+',
      label: 'Alumni Network',
      icon: <Users2 size={28} />,
    },
    {
      id: 3,
      value: '3',
      label: 'Programs Offered',
      icon: <BookOpen size={28} />,
    },
    {
      id: 4,
      value: 'Modern',
      label: 'Labs & Infrastructure',
      icon: <Building2 size={28} />,
    },
  ];

  return (
    <section className="statistics-section" aria-label="College Key Statistics">
      <div className="container">
        <div className="stats-card">
          <div className="stats-grid">
            {stats.map((item, index) => (
              <div key={item.id} className="stat-item">
                <div className="stat-icon-circle">
                  {item.icon}
                </div>
                <div className="stat-info">
                  <span className="stat-value">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
                {index < stats.length - 1 && <div className="stat-divider" aria-hidden="true"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
