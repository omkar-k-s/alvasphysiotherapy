import React from 'react';

/**
 * Reusable Button / Link Component
 * Renders an anchor tag if `href` is provided, otherwise a standard button.
 */
export default function Button({
  children,
  href,
  onClick,
  className = '',
  variant,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const variantClass = variant ? `btn-${variant}` : '';
  const combinedClass = `${variantClass} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} className="btn-icon" aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={18} className="btn-icon" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClass} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
