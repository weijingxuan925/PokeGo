import React, { useEffect, useState } from 'react';
import './styles.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
      aria-label="返回顶部"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
};

export default BackToTop; 