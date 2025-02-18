"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Serviceslider = ({ main_title, all_ablauf }) => {
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
      if (window.jQuery && jQuery(".Serviceslider").length) {
        jQuery(".Serviceslider").owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          autoHeight: true,
          items: 4,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          navText: [
            '<img src="/images/Vector(4).png"  width="20px" height="20px"  alt="Previous Slide" />',
            '<img src="/images/vector5.png" width="20px" height="20px"   alt="Next Slide" />',
          ],
          responsive: {
            0: { items: 1 },
            570: { items: 2, nav: false },
            800: { items: 2, nav: false },
            1000: { items: 3, nav: false },
            1600: { items: 4 },
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
      <div className="w-full max-w-[1470px] px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center">
            <h2 className="sm:text-h3 lg:text-h2">{main_title}</h2>
          </div>
          <div className="owl-carousel Serviceslider" ref={carouselRef}>
            {all_ablauf?.value?.map((val, index) => (
              <div
                className="items flex justify-center gap-4 w-full sm:w-[250px] overflow:hidden items-center bg-Bgslate"
                key={index}
              >
                <div className="item-box flex flex-col justify-center items-center gap-4 bg-Bgslate">
                  <div className="flex gap-6 sm:gap-8 border-[2px] border-Teal rounded-full flex-col p-2 w-[180px] h-[180px] xm:w-[250px] xm:h-[250px] items-center justify-center ">
                    <Image
                      src={val.home_all_ablauf_image}
                      width={64}
                      height={64}
                      alt="ServiceImg1"
                      className="!w-14 h-14 object-contain"
                    />
                    <h3 className="text-a md:text-h4 lg:text-h3">
                      {val.home_all_ablauf_title}
                    </h3>
                  </div>
                  <div className="flex text-center">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: val.home_all_ablauf_content
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

export default Serviceslider;
