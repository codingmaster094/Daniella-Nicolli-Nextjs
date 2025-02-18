"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Fermentum = ({ main_title, all_vorteile }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const loadOwlCarousel = async () => {
      // Load jQuery dynamically
      const jQueryScript = document.createElement("script");
      jQueryScript.src = process.env.NEXT_PUBLIC_JQUERY_URL;
      jQueryScript.defer = true; // Defer loading
      jQueryScript.onload = () => {
        // Load OwlCarousel CSS
        const owlCarouselCSS = document.createElement("link");
        owlCarouselCSS.rel = "stylesheet";
        owlCarouselCSS.href = process.env.NEXT_PUBLIC_OWL_CAROUSEL_CSS;
        document.head.appendChild(owlCarouselCSS);

        // Load OwlCarousel JS
        const owlCarouselJS = document.createElement("script");
        owlCarouselJS.src = process.env.NEXT_PUBLIC_OWL_CAROUSEL_JS;
        owlCarouselJS.defer = true; // Defer loading
        owlCarouselJS.onload = () => {
          // Ensure jQuery is accessible globally
          window.$ = window.jQuery;
          initializeOwlCarousel();
        };
        document.body.appendChild(owlCarouselJS);
      };
      document.body.appendChild(jQueryScript);
    };

    const initializeOwlCarousel = () => {
      if (window.jQuery && jQuery(".slider").length) {
        jQuery(".slider").owlCarousel({
          loop: true,
          margin: 30,
          nav: true,
          dots: true,
          items: 4,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          navText: [
            '<img src="/images/Vector(4).png"  width="20px" height="20px"   alt="Previous Slide" />',
            '<img src="/images/vector5.png" width="20px" height="20px"    alt="Next Slide" />',
          ],
          responsive: {
            0: { items: 1 },
            400: { items: 1 },
            800: { items: 2, nav: false },
            1400: { items: 3, nav: false },
            1600: { items: 3 },
          },
          onInitialized: function () {
            // Select all dots and navigation buttons
            const dots = document.querySelectorAll(".owl-dot");
            const navPrevButtons = document.querySelectorAll(".owl-prev");
            const navNextButtons = document.querySelectorAll(".owl-next");

            // Set attributes for dots
            dots.forEach((dot, index) => {
              dot.setAttribute("role", "button");
              dot.setAttribute("aria-label", index === 0 ? "next" : "prev");
            });

            // Set attributes for previous navigation buttons
            navPrevButtons.forEach((btn) => {
              btn.setAttribute("role", "button");
              btn.setAttribute("aria-label", "prev");
            });

            // Set attributes for next navigation buttons
            navNextButtons.forEach((btn) => {
              btn.setAttribute("role", "button");
              btn.setAttribute("aria-label", "next");
            });
          },
        });
      }
    };

    if (typeof window !== "undefined") {
      loadOwlCarousel();
    }
  }, []);

  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-Bgslate">
      <div className="w-full max-w-[1550px] px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center">
            <h2 className="sm:text-h3 lg:text-h2">{main_title}</h2>
          </div>
          <div className="owl-carousel slider relative" ref={carouselRef}>
            {all_vorteile?.value?.map((service, index) => (
              <div className="items p-[1px]" key={index}>
                <div className="flex flex-col p-6 xl:p-12 gap-4 border border-Teal">
                  <div className="flex gap-6 items-center">
                    <Image
                      src={service.home_all_vorteile_icon}
                      width={56}
                      height={56}
                      alt="ServiceSvg1"
                      className="!w-12 h-12"
                    />
                    <h3 className="text-black md:text-h4 text-Teal">
                      {service.home_all_vorteile_title}
                    </h3>
                  </div>
                  <div className="flex">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: service.home_all_vorteile_content
                          ?.replace(/<p>/g, "")
                          .replace(/<\/p>/g, "")
                          .replace(/&amp;/g, "&"),
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fermentum;
