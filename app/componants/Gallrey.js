"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const Gallrey = ({ main_title, gallery_images, gallery_truefalse }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const nextSlide = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const prevSlide = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const duplicatedSlides = gallery_images?.concat(gallery_images);

  return (
    gallery_truefalse && (
    <section className="pt-[30px] md:pt-[40px] lg:pt-[50px]">
      <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
        <div className="flex justify-center px-4 text-center">
          <h2
            className="sm:text-h3 lg:text-h2"
            dangerouslySetInnerHTML={{ __html: main_title }}
          ></h2>
        </div>
        <div className="slider-wrapper relative z-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              700: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".referanceSwiper-next",
              prevEl: ".referanceSwiper-prev",
            }}
            onSwiper={setSwiperInstance}
            className="swiper referanceSwiper"
          >
            {duplicatedSlides &&
              duplicatedSlides?.map((item, i) => (
                <SwiperSlide>
                  <div className="relative min-h-[500px] xl:min-h-[600px]">
                    <div className="absolute inset-0">
                      <Image
                        src={item.url}
                        width={470}
                        height={600}
                        className="size-full object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 bg-Teal bg-opacity-10 rounded-r-sm left-0 text-white p-1 sm:p-2 hidden xl:block z-30"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 bg-Teal bg-opacity-10 rounded-l-sm right-0 text-white p-1 sm:p-2 hidden xl:block z-30"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left rotate-180"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
    )
  );
};

export default Gallrey;
