"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ClientCarousel = ({
  main_title,
  section_all_partners,
  activate_deactivate,
}) => {
  const carouselRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadOwlCarousel = async () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src = "/js/jquery.min.js";
        jQueryScript.onload = () => {
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href = "/js/owl.carousel.min.css";
          document.head.appendChild(owlCarouselCSS);

          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src = "/js/owl.carousel.min.js";
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
                '<img src="/images/Vector(4).png" width="20px" height="20px"  alt="Previous Slide" />',
                '<img src="/images/vector5.png" width="20px" height="20px"  alt="Next Slide" />',
              ],
              responsive: {
                0: { items: 1 },
                400: { items: 2 },
                600: { items: 3 },
                800: { items: 4 },
                1350: { items: 6 },
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
    activate_deactivate && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px]">
        <div className="container px-[15px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 text-center">
            {main_title && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: main_title,
                }}
              ></h2>
            )}
            <div
              className="owl-carousel Client-sliders relative"
              ref={carouselRef}
            >
              {section_all_partners?.value &&
                section_all_partners?.value.map((val, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="client-logo text-center flex items-center justify-center">
                        {val.partners_section_all_partners_website_link.url ? (
                          <Link
                            href={
                              val.partners_section_all_partners_website_link
                                ?.url
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
    )
  );
};

export default ClientCarousel;
