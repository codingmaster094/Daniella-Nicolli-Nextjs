import { useEffect } from "react";

const equalSlides = () => {
  useEffect(() => {
    function setEqualHeight() {
      document.querySelectorAll(".slider-wrapper").forEach((swiper) => {
        let maxHeight = 0;
        const slides = swiper.querySelectorAll(".swiper-slide");

        slides.forEach((slide) => {
          slide.style.minHeight = "auto"; // Reset min-height
          maxHeight = Math.max(maxHeight, slide.clientHeight);
        });

        slides.forEach((slide) => {
          slide.style.minHeight = `${maxHeight}px`;
        });
      });
    }

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);

    return () => window.removeEventListener("resize", setEqualHeight);
  }, []);
};

export default equalSlides;
