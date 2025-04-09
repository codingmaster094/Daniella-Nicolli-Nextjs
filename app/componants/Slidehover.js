"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import WhiteVellrySvg from "../../public/images/Whitevelly.svg";

const Slidehover = ({bg_image , main_title, all_referenzen, enabledisable_referenz }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  
    const nextSlide = () => {
      if (swiperInstance) swiperInstance.slideNext();
    };
  
    const prevSlide = () => {
      if (swiperInstance) swiperInstance.slidePrev();
    };
  
      const duplicatedSlides = all_referenzen?.value?.concat(
        all_referenzen?.value
      );

  return (
    enabledisable_referenz && (
      <section className="pt-[30px] md:pt-[40px] lg:pt-[50px]">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
          <div className="flex justify-center px-4 text-center">
            <h2
              className="sm:text-h3 lg:text-h2"
              dangerouslySetInnerHTML={{
                __html: main_title,
              }}
            ></h2>
          </div>
          <div className="slider-wrapper relative z-10">
            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 2500 }}
              loop={true}
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
              className="swiper referanceSwiper select-none text-white"
            >
              {duplicatedSlides &&
                duplicatedSlides?.map((item, index) => (
                  <SwiperSlide>
                    <div className="group border-r p-6 xl:pt-12 border-white flex flex-col justify-end gap-8 relative z-10 min-h-[500px] xl:min-h-[700px]">
                      <div className="flex items-start gap-4">
                        <Image src={WhiteVellrySvg} alt="" className="mt-3" />
                        <h2
                          className="text-[23px] 4xl:text-h3 text-white"
                          dangerouslySetInnerHTML={{
                            __html: item.all_referenzen_title,
                          }}
                        ></h2>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.all_referenzen_content,
                        }}
                        className="space-y-4 transition-all duration-500 group-hover:pb-6 max-h-0 group-hover:max-h-[700px] overflow-hidden"
                      ></div>
                      <div className="absolute inset-0 teal-gradient -z-10 top-full group-hover:top-0 transition-all duration-500"></div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            <div class="absolute inset-0 -z-20">
              <Image
                src={bg_image}
                width={1920}
                height={700}
                alt=""
                class="size-full object-cover"
              />
            </div>
            <div class="absolute inset-0 -z-10 blc-gradient"></div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 bg-[#000] bg-opacity-10 rounded-r-sm left-0 text-white p-1 sm:p-2 hidden xl:block z-30"
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
              className="absolute top-1/2 -translate-y-1/2 bg-[#000] bg-opacity-10 rounded-l-sm right-0 text-white p-1 sm:p-2 hidden xl:block z-30"
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

export default Slidehover;
