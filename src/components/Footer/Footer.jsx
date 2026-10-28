import React from 'react';
import { MapPin, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top-grid">
          {/* Column 1: College Info & Crest */}
          <div className="footer-col col-brand">
            <div className="footer-brand">
              <div className="footer-logo-box">
                <img src="/alvas-logo.png?v=3" alt="Alva's Logo" className="footer-crest" />
              </div>
              <div className="footer-brand-title">
                <span className="brand-primary">ALVA'S</span>
                <span className="brand-secondary">COLLEGE OF PHYSIOTHERAPY</span>
              </div>
            </div>
            <p className="footer-about-text">
              Pioneering excellence in physiotherapy education and healthcare research since 1995. A premier constituent institution of Alva's Education Foundation (AEF), Moodbidri.
            </p>
            <div className="footer-affiliation-badge">
              <Award size={18} className="badge-star-icon" />
              <span>Affiliated to Rajiv Gandhi University of Health Sciences (RGUHS), Karnataka</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Academic Programs</h4>
            <ul className="footer-links-list">
              <li><a href="#bpt">Bachelor of Physiotherapy (BPT)</a></li>
              <li><a href="#mpt">Master of Physiotherapy (MPT)</a></li>
              <li><a href="#phd">Ph.D. in Physiotherapy</a></li>
              <li><a href="#admission-procedures">Admission Procedures</a></li>
              <li><a href="#registration">Online Registration</a></li>
            </ul>
          </div>

          {/* Column 3: Departments */}
          <div className="footer-col">
            <h4 className="footer-col-title">Specialized Departments</h4>
            <ul className="footer-links-list">
              <li><a href="#musculoskeletal-sports">Musculoskeletal & Sports</a></li>
              <li><a href="#neurological-psychosomatic">Neurological & Psychosomatic</a></li>
              <li><a href="#cardio-respiratory">Cardio - Respiratory Conditions</a></li>
              <li><a href="#paediatric">Paediatric Physiotherapy</a></li>
              <li><a href="#community-physiotherapy">Community Physiotherapy</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Campus & Contact</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Alva's Health Complex, Smt. Sundari Ananda Alva Campus, Moodbidri, D.K. Karnataka - 574227</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon" />
                <span>+91 8258 238104 / 238111</span>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>physiotherapy@alvas.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Alva's College of Physiotherapy and Research Centre. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#student-portal">Anti-Ragging Committee</a>
            <span className="dot-sep">•</span>
            <a href="#anti-ragging-affidavit">Affidavit</a>
            <span className="dot-sep">•</span>
            <a href="#accreditations">Accreditations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
