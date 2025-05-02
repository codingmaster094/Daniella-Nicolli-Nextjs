"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import commentEqualcontent from "../until/commentEqualcontent";
import ProvenExpert from "../../public/images/ProvenExpert-Logo_dark_RGB.svg";
import JamedaLogo from "../../public/images/Jameda_Daniella_Nicolli.png";
import goggleReview from "../../public/images/google_review.webp";
import Logoshore from "../../public/images/logo_shore.svg";
import HeaderDatas from "../until/HeaderData";


const Comment = ({ main_title, content, slider, reviewlogos }) => {
  const carouselRef = useRef();
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      commentEqualcontent();
    };

    commentEqualcontent(); // Initial call
    window.addEventListener("resize", handleResize); // Reapply on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => swiperInstance?.slideNext();
  const prevSlide = () => swiperInstance?.slidePrev();

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
          <div className="flex justify-center items-center text-center w-full">
            <p
              dangerouslySetInnerHTML={{
                __html: content
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            />
          </div>
          <div
            className="flex justify-center items-center text-center w-full xl:gap-32 lg:gap-20 md:gap-12 sm:gap-8 
          gap-4"
          >
            {reviewlogos?.map((item, i) => (
              <div>
                <Link
                  href={item.logo_url.url}
                  target={item.logo_url.target}
                  title={item.logo_url.title}
                >
                  <Image
                    src={item.logos.url}
                    width={150}
                    height={48}
                    alt="Review Icon "
                    className=""
                  />
                </Link>
              </div>
            ))}
          </div>
          <div className="slider-wrapper flex gap-3 lg:gap-10 items-center p-2">
            <div
              className="prosSwiper-prev border cursor-pointer rounded-full border-Teal p-1 sm:p-2 hidden xl:block"
              onClick={prevSlide}
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
            </div>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              ref={carouselRef}
              className="prosSwiper equal-text"
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              onSwiper={setSwiperInstance}
              navigation={{
                nextEl: ".prosSwiper-next",
                prevEl: ".prosSwiper-prev",
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              breakpoints={{
                700: { slidesPerView: 2, spaceBetween: 20 },
                1200: { slidesPerView: 3, spaceBetween: 20 },
                // 1440: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {slider?.map((item, i) => (
                <SwiperSlide key={item.id || i} className="border border-teal">
                  <div className="p-6 xl:p-10 space-y-4">
                    <div className="flex items-center gap-6">
                      <Image
                        src={item.profile.url}
                        width={48}
                        height={48}
                        alt="Service Icon "
                        className="!w-12 h-12 rounded-full"
                      />
                      <h3
                        className="text-black md:text-h4 heading"
                        dangerouslySetInnerHTML={{
                          __html: item.slider_title,
                        }}
                      />
                    </div>
                    <div className="flex paragraph">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.slider_content
                            ?.replace(/<p>/g, "")
                            .replace(/<\/p>/g, "")
                            .replace(/&amp;/g, "&"),
                        }}
                      />
                    </div>
                    {item.slider_button && (
                      <>
                        <span>Quelle: </span>
                        {item.slider_button.title}
                      </>
                    )}
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-pagination static mt-3 md:mt-6" />
            </Swiper>
            <div
              className="prosSwiper-next border cursor-pointer rounded-full border-Teal p-1 sm:p-2 hidden xl:block"
              onClick={nextSlide}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;

