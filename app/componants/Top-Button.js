'use client';
import React, { useEffect, useState } from 'react';

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);

  const toggleVisibility = () => {    
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    setVisible(scrollY > 100);

    const progress = (scrollY / maxScroll) * 100;
    setBorderProgress(progress);
  };

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 50; // Adjust '50' to control speed (higher = slower)
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={smoothScrollToTop}
      className={`fixed bottom-4 right-4 w-12 h-12 flex items-center justify-center bg-white text-black shadow-lg rounded-full z-50 transition-all duration-300 border border-black ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <span
        className="absolute inset-0 rounded-full"
        style={{
          content: "''",
          position: "absolute",
          top: "-3px",
          left: "-3px",
          right: "-3px",
          bottom: "-3px",
          borderRadius: "50%",
          background: `conic-gradient(teal ${borderProgress}%, transparent ${borderProgress}%)`,
          mask: "radial-gradient(circle, transparent 55%, black 55%)",
          WebkitMask: "radial-gradient(circle, transparent 62%, black 55%)",
          zIndex: "-1",
        }}
      ></span>

      {/* Up Arrow Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 5l0 14"></path>
        <path d="M16 9l-4 -4"></path>
        <path d="M8 9l4 -4"></path>
      </svg>
    </button>
  );
};

export default TopButton;
