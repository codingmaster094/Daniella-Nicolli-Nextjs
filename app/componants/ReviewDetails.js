"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const ReviewDetails = () => {
  const [ReviweDetail, setReviweDetail] = useState(null);
  const fetchReviweDetail = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/google-reviews/?id=520"
      );
      setReviweDetail(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchReviweDetail();
  }, []);

  const carouselRef = useRef();

  useEffect(() => {
    const loadOwlCarousel = async () => {
      // Load jQuery
      const jQueryScript = document.createElement("script");
      jQueryScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
      jQueryScript.onload = () => {
        // Load Owl Carousel CSS
        const owlCarouselCSS = document.createElement("link");
        owlCarouselCSS.rel = "stylesheet";
        owlCarouselCSS.href =
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
        document.head.appendChild(owlCarouselCSS);

        // Load Owl Carousel JS
        const owlCarouselJS = document.createElement("script");
        owlCarouselJS.src =
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
        owlCarouselJS.onload = () => {
          // Initialize Owl Carousel
          const $ = window.jQuery;
          $(carouselRef.current).owlCarousel({
            loop: true,
            margin: 12,
            nav: false,
            dots: true,
            items: 1, // Start with 1 item for mobile
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayHoverPause: true,
            responsive: {
              0: { items: 1 },
              400: { items: 2 },
              600: { items: 3 },
              800: { items: 4 },
              1350: { items: 6 },
            },
          });
        };
        document.body.appendChild(owlCarouselJS);
      };
      document.body.appendChild(jQueryScript);
    };

    loadOwlCarousel();
  }, []);

  return (
    <div  dangerouslySetInnerHTML={{ __html: ReviweDetail?.html }}/>
   
  );
};

export default ReviewDetails;
