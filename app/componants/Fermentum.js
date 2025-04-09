"use client"; // Ensure this component is rendered on the client-side

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import equalSlides from "../until/equalSlides";

const Fermentum = ({ main_title, all_vorteile }) => {
  const carouselRef = useRef();
  equalSlides();

  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-white">
      <div className="w-full max-w-[1550px] px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center text-center">
            <h2
              className="sm:text-h3 lg:text-h2"
              dangerouslySetInnerHTML={{ __html: main_title }}
            />
          </div>

          <div className="slider-wrapper flex gap-3 lg:gap-10 items-center p-2">
            <div className="prosSwiper-prev border rounded-full border-teal p-1 sm:p-2 hidden xl:block">
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
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              ref={carouselRef}
              className="prosSwiper"
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              loop={true}
              navigation={{
                nextEl: ".prosSwiper-next",
                prevEl: ".prosSwiper-prev",
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              breakpoints={{
                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {all_vorteile?.value?.map((service) => (
                <SwiperSlide
                  key={service.id || service.home_all_vorteile_title}
                  className="border border-teal"
                >
                  <div className="p-6 xl:p-12 space-y-4">
                    <div className="flex items-center gap-6">
                      <Image
                        src={service.home_all_vorteile_icon}
                        width={48}
                        height={48}
                        alt={`Service Icon for ${service.home_all_vorteile_title}`}
                        className="!w-12 h-12"
                      />
                      <h3
                        className="text-black md:text-h4 text-teal-700"
                        dangerouslySetInnerHTML={{
                          __html: service.home_all_vorteile_title,
                        }}
                      />
                    </div>
                    <div className="flex">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service.home_all_vorteile_content
                            ?.replace(/<p>/g, "")
                            .replace(/<\/p>/g, "")
                            .replace(/&amp;/g, "&"),
                        }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination static mt-3 md:mt-6" />
            </Swiper>
            <div className="prosSwiper-next border rounded-full border-teal p-1 sm:p-2 hidden xl:block">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fermentum;
