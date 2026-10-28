import React, { useState, useEffect, useRef } from 'react';
import { navigationItems } from '../../data/navigationData';
import { institutionalInfo } from '../../data/institutionalData';
import {
  Building2,
  Phone,
  Mail,
  Award,
  ShieldCheck,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react';
import './Header.css';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const closeTimeoutRef = useRef(null);
  const navRef = useRef(null);

  // Handle desktop mouse enter
  const handleMouseEnter = (itemId, hasDropdown) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    if (hasDropdown) {
      setActiveDropdown(itemId);
    } else {
      setActiveDropdown(null);
    }
  };

  // Handle desktop mouse leave with slight delay for ergonomics
  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  // Handle click for touch or keyboard users
  const handleItemClick = (e, item) => {
    if (item.hasDropdown) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.id ? null : item.id);
    }
  };

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = (itemId) => {
    setExpandedMobileItem(expandedMobileItem === itemId ? null : itemId);
  };

  return (
    <header className="site-header" ref={navRef}>
      {/* Tier 1: Institutional Information Bar */}
      <div className="top-info-bar" role="complementary" aria-label="Institutional Information">
        <div className="info-bar-container">
          {/* Left Info Group */}
          <div className="info-bar-left">
            <div className="info-item">
              <Building2 size={15} className="info-icon" aria-hidden="true" />
              <span>College Code: <strong className="info-code-gold">{institutionalInfo.collegeCode}</strong></span>
            </div>
            <span className="info-divider" aria-hidden="true">|</span>
            <div className="info-item">
              <Phone size={14} className="info-icon" aria-hidden="true" />
              <a href={`tel:${institutionalInfo.phone.split('/')[0].trim()}`} className="info-link">
                {institutionalInfo.phone}
              </a>
            </div>
            <span className="info-divider" aria-hidden="true">|</span>
            <div className="info-item">
              <Mail size={14} className="info-icon" aria-hidden="true" />
              <a href={`mailto:${institutionalInfo.email}`} className="info-link">
                {institutionalInfo.email}
              </a>
            </div>
          </div>

          {/* Right Info Group */}
          <div className="info-bar-right">
            <div className="info-item">
              <Award size={15} className="info-icon" aria-hidden="true" />
              <span>{institutionalInfo.affiliation}</span>
            </div>
            <span className="info-divider" aria-hidden="true">|</span>
            <div className="info-item">
              <ShieldCheck size={15} className="info-icon" aria-hidden="true" />
              <span>{institutionalInfo.recognition}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Navigation Bar */}
      <div className="main-nav-bar">
        <div className="header-container">
          {/* Brand / Logo */}
          <a href="#home" className="header-logo" aria-label="Alva's Physiotherapy Home">
            <div className="logo-emblem-box">
              <img
                src="/alvas-logo.png?v=4"
                alt="Alva's Education Foundation Emblem"
                className="logo-crest"
              />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">ALVA'S</span>
              <span className="logo-subtitle">PHYSIOTHERAPY</span>
            </div>
          </a>

          {/* Desktop Main Navigation */}
          <nav className="desktop-navigation" aria-label="Main Navigation">
            <ul className="nav-list" role="menubar">
              {navigationItems.map((item) => {
                const isOpen = activeDropdown === item.id;
                const isDepartment = item.id === 'department';

                return (
                  <li
                    key={item.id}
                    className={`nav-item ${item.isActive ? 'is-active' : ''} ${isOpen ? 'menu-open' : ''}`}
                    onMouseEnter={() => handleMouseEnter(item.id, item.hasDropdown)}
                    onMouseLeave={handleMouseLeave}
                    role="none"
                  >
                    <a
                      href={item.href}
                      className={`nav-link ${item.isActive ? 'active-link' : ''}`}
                      role="menuitem"
                      aria-haspopup={item.hasDropdown ? 'true' : undefined}
                      aria-expanded={item.hasDropdown ? isOpen : undefined}
                      onClick={(e) => handleItemClick(e, item)}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`nav-chevron ${isOpen ? 'rotate-chevron' : ''}`}
                          size={14}
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`dropdown-menu ${isDepartment ? 'dropdown-department' : ''} ${
                          isOpen ? 'is-visible' : ''
                        }`}
                        role="menu"
                        aria-label={`${item.label} sub-menu`}
                      >
                        <ul className="dropdown-list">
                          {item.submenus.map((sub) => (
                            <li key={sub.id} role="none" className="dropdown-item">
                              <a
                                href={sub.href}
                                role="menuitem"
                                className="dropdown-link"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="dropdown-link-text">{sub.label}</span>
                                <ArrowRight className="dropdown-arrow-hover" size={16} aria-hidden="true" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-nav-inner">
          <div className="mobile-drawer-header">
            <div className="mobile-logo">
              <img src="/alvas-logo.png?v=4" alt="Alva's Logo" className="mobile-crest" />
              <div className="mobile-logo-text">
                <span className="mobile-logo-title">ALVA'S</span>
                <span className="mobile-logo-sub">PHYSIOTHERAPY</span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Info Strip */}
          <div className="mobile-drawer-meta">
            <div className="mobile-meta-pill">
              <Building2 size={13} />
              <span>Code: <strong>{institutionalInfo.collegeCode}</strong></span>
            </div>
            <div className="mobile-meta-pill">
              <Phone size={13} />
              <span>{institutionalInfo.phone}</span>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {navigationItems.map((item) => {
              const isExpanded = expandedMobileItem === item.id;

              return (
                <li key={item.id} className="mobile-nav-item">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        type="button"
                        className={`mobile-nav-btn ${item.isActive ? 'active-mobile-link' : ''}`}
                        onClick={() => toggleMobileAccordion(item.id)}
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`mobile-chevron ${isExpanded ? 'rotate-chevron' : ''}`}
                        />
                      </button>

                      {isExpanded && (
                        <ul className="mobile-submenu-list">
                          {item.submenus.map((sub) => (
                            <li key={sub.id} className="mobile-submenu-item">
                              <a
                                href={sub.href}
                                className="mobile-submenu-link"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {sub.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className={`mobile-nav-link ${item.isActive ? 'active-mobile-link' : ''}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mobile-nav-footer">
            <p className="mobile-college-meta">{institutionalInfo.affiliation}</p>
            <p className="mobile-college-since">{institutionalInfo.recognition}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
