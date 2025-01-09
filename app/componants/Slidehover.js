"use client";
import Image from "next/image";
import React from "react";
import WhiteVellrySvg from "../../public/images/Whitevelly.svg";
import { useEffect, useRef } from "react";
import Link from "next/link";
const Slidehover = ({ main_title ,all_referenzen }) => {
  const carouselRef = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadOwlCarousel = async () => {
        const jQueryScript = document.createElement("script");
        jQueryScript.src =
          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
        jQueryScript.onload = () => {
          const owlCarouselCSS = document.createElement("link");
          owlCarouselCSS.rel = "stylesheet";
          owlCarouselCSS.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(owlCarouselCSS);
          const owlCarouselJS = document.createElement("script");
          owlCarouselJS.src =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
          owlCarouselJS.onload = () => {
            window.$ = window.jQuery;
            jQuery(".hover-sliders").owlCarousel({
              loop: true,
              nav: true,
              dots: false,
              items: 4,
              responsive: {
                0: {
                  items: 1,
                },
                520: {
                  items: 1,
                },
                768: {
                  items: 2,
                },
                800: {
                  items: 2,
                },
                991: {
                  items: 3,
                },
                1280: {
                  items: 4,
                },
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
    <>
      <section className="pt-10 md:pt-[70px] lg:pt-[100px]">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center">
            <h2 className="text-h3 lg:text-h2">{main_title}</h2>
          </div>
          <div
            className="owl-carousel hover-sliders relative bg-slider-image bg-cover bg-center bg-no-repeat"
            ref={carouselRef}
          >
            {all_referenzen &&
              all_referenzen?.value?.map((item, index) => (
                <div key={index} className="items h-[550px] lg:h-[700px] border-r border-Border flex items-end py-12  px-6 group relative after:absolute after:top-0  after:left-0 after:bg-slider-bg after:w-full after:h-full after:opacity-0 hover:after:opacity-100 transition-all ease-in duration-700">
                  <div className=" flex flex-col  *:text-white h-full lg:h-[70%] justify-end z-10 transition-all ease-in duration-700">
                    <div className="flex flex-col gap-4 h-[40px] sm:h-[80px] group-hover:h-full transition-all ease-in duration-700">
                      <div className=" flex gap-4   items-center  *:text-white ">
                        <span className="flex flex-shrink-0">
                          <Image src={WhiteVellrySvg} alt="WhiteVellySvg" />
                        </span>{
                             item.all_referenzen_title && <Link href="#" className="*:text-white hover:text-Teal " aria-label='link-title' role='link'>
                             <h3 className="text-[23px] 4xl:text-h3">{item.all_referenzen_title}</h3>
                           </Link>
                        }
                        
                      </div>
                      <div className="flex flex-col gap-2  opacity-0 group-hover:opacity-100 transition-all ease-in duration-500">
                        <p dangerouslySetInnerHTML={{ __html:item.all_referenzen_content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                      </div>
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

export default Slidehover;
