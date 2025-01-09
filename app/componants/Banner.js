"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
const BannerCarousel = ({slidesData,className}) => {
  const carouselRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadOwlCarousel = async () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        jQueryScript.onload = () => {
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(owlCarouselCSS);

          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
          owlCarouselJS.onload = () => {
            window.$ = window.jQuery;
            jQuery(".Banner-sliders").owlCarousel({
              loop: true,
              items: 1,
              lazyLoad: true,
              autoplay: false,
              nav: true,
              dots: false,
            });
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };

      loadOwlCarousel();
    }
  }, []);
  return (
    <>
  <section>
      <div className={`Banner ${className || ""}`}>
        <div className="owl-carousel Banner-sliders relative" ref={carouselRef}>
          {slidesData?.value &&
            slidesData?.value?.map((slide, index) => (
            <div className="item" key={index}>
              <div
                className="bg-banner bg-banner-img bg-cover"
                style={{ backgroundImage: `url(${slide.hero_slider_image})` }}
              >
                <div className="flex flex-col bg-Bgwhite p-6 lg:p-12 gap-4 lg:gap-8">
                  <h1>{slide.hero_slider_main_title}</h1>
                  <ul
                    className="menu"
                    dangerouslySetInnerHTML={{
                      __html: slide.hero_slider_content.replace(/<\/?ul[^>]*>/g, '') // Replace `&amp;` with `&`
                    }}
                  ></ul>
                  {
                    slide?.hero_slider_button &&
                    <Link
                      href={slide.hero_slider_button?.url}
                      className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in" aria-label="link-button" role="link"
                    >
                      {slide.hero_slider_button.title}
                    </Link>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default BannerCarousel;