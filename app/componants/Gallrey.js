"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import React from "react";
import PreviousBTN from "../../public/images/PreviousBTN.png";
import NextBTN from "../../public/images/NextBTN.png";
import ReactDOMServer from "react-dom/server";

const Gallrey = ({ main_title, gallery_images }) => {
  const carouselRef = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadOwlCarousel = async () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src = process.env.NEXT_PUBLIC_JQUERY_URL;
        jQueryScript.onload = () => {
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href = process.env.NEXT_PUBLIC_OWL_CAROUSEL_CSS;
          document.head.appendChild(owlCarouselCSS);
          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src = process.env.NEXT_PUBLIC_OWL_CAROUSEL_JS;
          owlCarouselJS.onload = () => {
            window.$ = window.jQuery;
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
                    alt="Previous"
                    width={20}
                    height={20}
                  />
                ),
                ReactDOMServer.renderToStaticMarkup(
                  <Image src={NextBTN} alt="Next" width={20} height={20} />
                ),
              ],
              responsive: {
                0: {
                  items: 1,
                },
                520: {
                  items: 2,
                },
                991: {
                  items: 3,
                },
                1280: {
                  items: 4,
                },
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
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };
      loadOwlCarousel();
    }
  }, []);
  return (
    <section className="pt-[30px] md:pt-[40px] lg:pt-[50px]">
      <div className="flex flex-col gap-6 md:gap-11">
        <div className="flex justify-center px-4">
          <h2
            className="text-h3 lg:text-h2"
            dangerouslySetInnerHTML={{
              __html: main_title,
            }}
          ></h2>
        </div>
        <div
          className="owl-carousel hover-sliders gallrey relative"
          ref={carouselRef}
        >
          {gallery_images &&
            gallery_images?.map((image, index) => (
              <div key={index} className="items">
                <div className="flex h-[500px]  lg:h-[700px]">
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={image.width}
                    height={image.height}
                    className="object-cover c  w-full h-full"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallrey;
