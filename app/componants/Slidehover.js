"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import WhiteVellrySvg from "../../public/images/Whitevelly.svg";
import PreviousBTN from "../../public/images/PreviousBTN.png";
import NextBTN from "../../public/images/NextBTN.png";
import ReactDOMServer from "react-dom/server";

const Slidehover = ({ main_title, all_referenzen, enabledisable_referenz }) => {
  const carouselRef = useRef();

  useEffect(() => {
    const loadOwlCarousel = async () => {
      // Load jQuery dynamically
      const jQueryScript = document.createElement("script");
      jQueryScript.src = "/js/jquery.min.js";
      jQueryScript.defer = true; // Defer loading
      jQueryScript.onload = () => {
        // Load OwlCarousel CSS
        const owlCarouselCSS = document.createElement("link");
        owlCarouselCSS.rel = "stylesheet";
        owlCarouselCSS.href = "/js/owl.carousel.min.css";
        document.head.appendChild(owlCarouselCSS);

        // Load OwlCarousel JS
        const owlCarouselJS = document.createElement("script");
        owlCarouselJS.src = "/js/owl.carousel.min.js";
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
      if (window.jQuery && jQuery(".hover-sliders").length) {
        jQuery(".hover-sliders").owlCarousel({
          loop: true,
          nav: true,
          dots: false,
          items: 4,
          autoplay: true,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          navText: [
            ReactDOMServer.renderToStaticMarkup(
              <Image
                src={PreviousBTN}
                alt="Previous Slide"
                width={20}
                height={20}
              />
            ),
            ReactDOMServer.renderToStaticMarkup(
              <Image src={NextBTN} alt="Next Slide" width={20} height={20} />
            ),
          ],
          responsive: {
            0: { items: 1 },
            520: { items: 1 },
            768: { items: 2 },
            800: { items: 2 },
            991: { items: 3 },
            1280: { items: 4 },
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

        // Set aria-labels for navigation buttons
      }
    };

    if (typeof window !== "undefined") {
      loadOwlCarousel();
    }
  }, []);

  return (
    enabledisable_referenz && (
      <section className="pt-[30px] md:pt-[40px] lg:pt-[50px]">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center px-4">
            <h2
              className="sm:text-h3 lg:text-h2"
              dangerouslySetInnerHTML={{
                __html: main_title,
              }}
            ></h2>
          </div>
          <div
            className="owl-carousel hover-sliders relative bg-slider-image bg-cover bg-center bg-no-repeat"
            ref={carouselRef}
          >
            {all_referenzen &&
              all_referenzen.value?.map((item, index) => (
                <div
                  key={index}
                  className="items h-[550px] lg:h-[700px] border-r border-Border flex items-end py-12 px-6 group relative after:absolute after:top-0 after:left-0 after:bg-slider-bg after:w-full after:h-full after:opacity-0 hover:after:opacity-100 transition-all ease-in duration-700"
                >
                  <div className="flex flex-col *:text-white h-[295px] md:h-[355px] 2xl:h-[320px] justify-end z-10 transition-all ease-in duration-700">
                    <div className="flex flex-col gap-4 h-[40px] sm:h-[80px] group-hover:h-full transition-all ease-in duration-700">
                      <div className="flex gap-4 items-center *:text-white">
                        <span className="flex flex-shrink-0">
                          <Image src={WhiteVellrySvg} alt="WhiteVellySvg" />
                        </span>
                        {item.all_referenzen_title && (
                          <h3
                            className="text-[23px] 4xl:text-h3"
                            dangerouslySetInnerHTML={{
                              __html: item.all_referenzen_title,
                            }}
                          ></h3>
                        )}
                      </div>
                      <div
                        className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all ease-in duration-500"
                        dangerouslySetInnerHTML={{
                          __html: item.all_referenzen_content,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Slidehover;
