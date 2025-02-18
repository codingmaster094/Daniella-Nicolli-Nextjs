"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutLambsheim = ({
  main_title,
  standorte_content,
  BTN,
  standorte_image,
}) => {
  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="w-full max-w-[1780px] px-[15px]  lg:px-0 ms-auto !ps-[15px]">
        <div className="flex flex-col-reverse  lg:flex-row gap-4 md:gap-8  py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:left-15px lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:-z-10">
          <div className="flex gap-5 flex-col w-full justify-center lg:w-[50%] px-0  lg:px-4  lg:gap-8 2xl:px-[100px]">
            <div className="flex relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[2px] after:bg-Teal">
              <h2>{main_title}</h2>
            </div>
            <div
              className="flex flex-col gap-4 md:gap-6"
              dangerouslySetInnerHTML={{ __html: standorte_content }}
            ></div>
            {BTN && (
              <Link
                href={BTN?.url}
                target={BTN?.target}
                className="flex self-start text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                aria-label="link-button"
                role="link"
              >
                {BTN?.title}
              </Link>
            )}
          </div>
          <div className=" relative flex self-start lg:self-center flex-col w-full lg:w-[55%] h-full xm:h-[500px] 2xl:h-[804px]  md:flex-row">
            {standorte_image && (
              <Image
                src={standorte_image}
                alt="about-right.png"
                className="w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px] bg-white"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLambsheim;
