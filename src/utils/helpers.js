/**
 * General helper utilities
 */

/**
 * Conditionally join class names into a single string.
 * @param  {...any} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format phone number string for tel: link protocol
 * @param {string} phone
 * @returns {string}
 */
export function formatTelLink(phone) {
  if (!phone) return '';
  return phone.split('/')[0].trim().replace(/\s+/g, '');
}

