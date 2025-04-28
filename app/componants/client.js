"use client"; // Ensure this file is a client component in Next.js 14

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import equalSlides from "../until/equalSlides";

const ClientCarousel = ({
  main_title,
  section_all_partners,
  activate_deactivate,
}) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };
  const duplicatedSlides = section_all_partners?.value?.concat(
    section_all_partners?.value
  );

  equalSlides();

  return (
    activate_deactivate && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px]">
        <div className="container px-[15px] mx-auto">
          <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 text-center">
            {main_title && (
              <h2 dangerouslySetInnerHTML={{ __html: main_title }} />
            )}
            <div className="slider-wrapper flex gap-3 sm:gap-10 items-center">
              <button
                className="clientSwiper-prev border rounded-full border-Teal p-1 sm:p-2 hidden xl:!block"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-chevron-left"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 6l-6 6l6 6" />
                </svg>
              </button>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                className="clientSwiper select-none"
                spaceBetween={16}
                autoplay={{ delay: 2500 }}
                loop={true}
                pagination={{ el: ".swiper-pagination" }}
                onSwiper={setSwiperInstance}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 28,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1400: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                  1600: {
                    slidesPerView: 6,
                    spaceBetween: 30,
                  },
                }}
              >
                {duplicatedSlides.map((val, index) => (
                  <SwiperSlide
                    key={index}
                    className="grid place-content-center place-items-center"
                  >
                    {val.partners_section_all_partners_website_link.url ? (
                      <Link
                        href={
                          val.partners_section_all_partners_website_link.url
                        }
                        target={
                          val.partners_section_all_partners_website_link.target
                        }
                        aria-label={
                          val.partners_section_all_partners_website_link.title
                        }
                        className="block"
                      >
                        <Image
                          src={val.partners_section_all_partners_logos}
                          alt={`Client logo for ${val.partners_section_all_partners_website_link.title}`}
                          className="!w-auto"
                          height={85}
                          width={157}
                          loading="lazy"  
      
                        />
                      </Link>
                    ) : (
                      <Image
                        src={val.partners_section_all_partners_logos}
                        alt={`Client logo ${index + 1}`}
                        className="!w-auto"
                        height={85}
                        width={157}
                        loading="lazy"  
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                className="clientSwiper-next border rounded-full border-Teal p-1 sm:p-2 hidden xl:!block"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default ClientCarousel;
