import React from 'react';
import { MapPin, Phone, Mail, Award, ExternalLink } from 'lucide-react';
import { institutionalInfo } from '../../../data/collegeInfo';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Courses', href: '#courses' },
    { label: 'Department', href: '#department' },
    { label: 'Admission', href: '#admission' },
    { label: 'Student Portal', href: '#student-portal' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="site-footer" id="contact" aria-label="Site Footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Column 1: College Identity */}
          <div className="footer-col col-brand">
            <div className="footer-brand">
              <div className="footer-logo-box">
                <img src="/images/logo/alvas-logo.png" alt="Alva's Logo" className="footer-crest" />
              </div>
              <div className="footer-brand-title">
                <span className="brand-primary">ALVA'S</span>
                <span className="brand-secondary">COLLEGE OF PHYSIOTHERAPY</span>
              </div>
            </div>
            <p className="footer-about-text">
              Pioneering excellence in physiotherapy education, clinical expertise, and healthcare research since 1995. A premier constituent institution of Alva's Education Foundation (AEF), Moodbidri.
            </p>
            <div className="footer-affiliation-badge">
              <Award size={18} className="badge-star-icon" />
              <span>Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka &amp; Recognised by Govt. of Karnataka</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col col-quicklinks">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="footer-nav-link">
                    <span className="link-bullet">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="footer-col col-contact">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={20} className="contact-icon" />
                <div className="contact-item-text">
                  <strong>Campus Address:</strong>
                  <span>{institutionalInfo.campusAddress.fullAddress}</span>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <div className="contact-item-text">
                  <strong>Telephone:</strong>
                  <span>{institutionalInfo.phone}</span>
                  <span>{institutionalInfo.alternatePhones.join(' / ')}</span>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <div className="contact-item-text">
                  <strong>Official Email:</strong>
                  <span>{institutionalInfo.email}</span>
                  <span>{institutionalInfo.alternateEmail}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="footer-col col-location">
            <h4 className="footer-col-title">Location</h4>
            <p className="location-desc">
              Situated in the serene educational hub of Moodbidri, Dakshina Kannada, Karnataka, offering accessible clinical hospitals and peaceful campus living.
            </p>
            <div className="location-box">
              <div className="location-map-preview">
                <div className="location-pin-graphic">
                  <MapPin size={24} className="map-pin-pulse" />
                  <span className="pin-text">Alva's Campus, Moodbidri</span>
                </div>
              </div>
              <a
                href={institutionalInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-maps"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {CURRENT_YEAR} Alva's College of Physiotherapy and Research Centre. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#about-us">Privacy Policy</a>
            <span className="dot-sep">•</span>
            <a href="#about-us">Terms of Use</a>
            <span className="dot-sep">•</span>
            <a href="#about-us">Sitemap</a>
            <span className="dot-sep">•</span>
            <a href="#student-portal">Anti-Ragging Committee</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
