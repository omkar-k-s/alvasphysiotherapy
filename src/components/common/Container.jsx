import React from 'react';

/**
 * Reusable Container layout component
 * Provides consistent maximum width and responsive horizontal padding.
 */
export default function Container({ children, className = '', ...props }) {
  return (
    <div className={`container ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

