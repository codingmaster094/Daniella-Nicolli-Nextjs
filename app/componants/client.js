"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ClientCarousel = ({ main_title, section_all_partners }) => {
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

            jQuery(".Client-sliders").owlCarousel({
              loop: true,
              margin: 12,
              nav: true,
              dots: true,
              items: 6,
              autoplay: true,
              autoplaySpeed: 3000,
              autoplayHoverPause: false,
              navText: [
                '<img src="/images/Vector(4).png"  width="20px" height="20px" role="presentation" aria-label="Previous Slide" alt="Previous Slide" />',
                '<img src="/images/vector5.png" width="20px" height="20px" role="presentation"  aria-label="Next Slide" alt="Next Slide" />',
              ],
              responsive: {
                0: { items: 1 },
                400: { items: 2 },
                600: { items: 3 },
                800: { items: 4 },
                1350: { items: 6 },
              },
              onInitialized: function () {
                // Add role="button" to navigation and dots
                document
                  .querySelectorAll(".owl-prev, .owl-next")
                  .forEach((button) => {
                    button.setAttribute(
                      "aria-label",
                      button.classList.contains("owl-prev")
                        ? "Previous Slide"
                        : "Next Slide"
                    );
                    button.setAttribute("role", "button");
                  });

                document.querySelectorAll(".owl-dot").forEach((dot) => {
                  dot.setAttribute("role", "button");
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
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="container px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 text-center">
          {main_title && <h2>{main_title}</h2>}
          <div
            className="owl-carousel Client-sliders relative"
            ref={carouselRef}
          >
            {section_all_partners?.value &&
              section_all_partners?.value.map((val, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="client-logo text-center flex items-center justify-center">
                      {val.partners_section_all_partners_website_link ? (
                        <Link
                          href={
                            val.partners_section_all_partners_website_link?.url
                          }
                          target={
                            val.partners_section_all_partners_website_link
                              ?.target
                          }
                          aria-label={
                            val.partners_section_all_partners_website_link
                              ?.title
                          }
                          className="block"
                        >
                          <Image
                            src={val.partners_section_all_partners_logos}
                            alt={`Client logo for ${val.partners_section_all_partners_website_link?.title}`}
                            className="!w-auto"
                            height={85}
                            width={157}
                          />
                        </Link>
                      ) : (
                        <Image
                          src={val.partners_section_all_partners_logos}
                          alt={`Client logo ${index + 1}`}
                          className="!w-auto"
                          height={85}
                          width={157}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
