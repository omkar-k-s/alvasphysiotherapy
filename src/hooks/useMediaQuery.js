import { useSyncExternalStore } from 'react';

/**
 * Custom hook to detect media query matches (e.g. mobile, tablet, desktop)
 * using React 18/19 useSyncExternalStore.
 * @param {string} query - CSS media query string (e.g. '(max-width: 768px)')
 * @returns {boolean}
 */
export function useMediaQuery(query) {
  const subscribe = (callback) => {
    if (typeof window === 'undefined') return () => {};
    const media = window.matchMedia(query);
    if (media.addEventListener) {
      media.addEventListener('change', callback);
      return () => media.removeEventListener('change', callback);
    } else {
      media.addListener(callback);
      return () => media.removeListener(callback);
    }
  };

  const getSnapshot = () => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export default useMediaQuery;
