import React from 'react';

/**
 * Reusable ImageCard component
 * Standardizes image presentation with aspect ratio, overlay, and badge options.
 */
export default function ImageCard({
  imageSrc,
  imageAlt,
  badgeText,
  className = '',
  imageClassName = '',
  children,
  ...props
}) {
  return (
    <div className={`image-card ${className}`.trim()} {...props}>
      <div className="image-card-frame">
        <img
          src={imageSrc}
          alt={imageAlt || ''}
          className={`image-card-img ${imageClassName}`.trim()}
          loading="lazy"
        />
        {badgeText && <span className="image-card-badge">{badgeText}</span>}
      </div>
      {children && <div className="image-card-body">{children}</div>}
    </div>
  );
}

