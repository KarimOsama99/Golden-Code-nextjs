'use client';

import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Scrollbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <ul className={`smothscroll ${isVisible ? 'active' : ''}`}>
      <li>
        <AnchorLink
          href="#scrool"
          aria-label="Scroll to top"
          className="thm-btn--aso thm-btn--aso_dark"
        >
          <i className="far fa-arrow-up"></i>
        </AnchorLink>
      </li>
    </ul>
  );
};

export default Scrollbar;