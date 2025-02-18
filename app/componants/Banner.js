"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DOMPurify from "dompurify";
const BannerCarousel = ({ slidesData, className }) => {
  const carouselRef = useRef();

  return (
    <section>
      <div className={`Banner ${className || ""} `}>
        <div className="owl-carousel Banner-sliders relative" ref={carouselRef}>
          {slidesData &&
            slidesData?.map((slide, index) => (
              <div className="item" key={index}>
                {console.log("slide", slide)}
                <div
                  className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                  style={{ backgroundImage: `url(${slide.hero_slider_image})` }}
                >
                  <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                    <h1>{slide.hero_slider_main_title}</h1>
                    <ul
                      className="menu"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          slide.hero_slider_content
                        ).replace(/<\/?ul[^>]*>/g, ""),
                      }}
                    ></ul>
                    {slide?.hero_slider_button && (
                      <Link
                        href={slide.hero_slider_button?.url}
                        target={slide.hero_slider_button?.target}
                        className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                        aria-label={
                          slide.hero_slider_button.title || "button link"
                        }
                      >
                        {slide.hero_slider_button?.title}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
