"use client";
import React, { useEffect, useState } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    setVisible(scrollY > 100); // Show button after 100px scroll

    const progress = (scrollY / maxScroll) * 100;
    setBorderProgress(progress);
  };

  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 50 ;
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    visible && (
      <button
        onClick={smoothScrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top"
        style={{
          backgroundColor: isHovered
          ? "rgb(26 130 129 / var(--tw-bg-opacity, 1))"
          : "#b9b3a0",
          cursor: "pointer",
          width: "50px",
          height: "50px",
          zIndex: "999",
          position: "fixed",
          right: "32px",
          bottom: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",  
          borderRadius: "100%",
          boxShadow: "0 4px 16px 0 rgba(0, 0, 0, 0.4)",
          transition: "background-color 0.3s ease",
        }}
      >
        <svg
          className="icon__arrow-up"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="#ffffff"
        >
          <title>Back to top</title>
          <path d="M18.71,11.71a1,1,0,0,1-1.42,0L13,7.41V19a1,1,0,0,1-2,0V7.41l-4.29,4.3a1,1,0,0,1-1.42-1.42l6-6a1,1,0,0,1,1.42,0l6,6A1,1,0,0,1,18.71,11.71Z"></path>
        </svg>
      </button>
    )
  );
};

export default TopButton;
