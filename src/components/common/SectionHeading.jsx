import React from 'react';

/**
 * Reusable SectionHeading component
 * Displays section eyebrow with dashes, main title, and optional subtitle.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : ''} ${className}`.trim()}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span className="eyebrow-dash" aria-hidden="true"></span>
          <span className="eyebrow-text">{eyebrow}</span>
          {centered && <span className="eyebrow-dash" aria-hidden="true"></span>}
        </div>
      )}

      {title && <h2 className="section-title">{title}</h2>}

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

