"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutLambsheim = ({
  main_title,
  standorte_content,
  BTN,
  standorte_image,
  Small_image_show,
}) => {
  return (
      <section className="py-[20px] group reverse">
        <div className="px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px]">
          <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
              <div className={Small_image_show ? "lg:w-1/3" : "lg:w-1/2"}>
                <div className="sticky top-40">
                  <div className="aspect-square bg-white">
                    {standorte_image && (
                      <Image
                        src={standorte_image}
                        alt="about-right.png"
                        className="w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px]"
                        width={683}
                        height={560}
                        objectFit="cover"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${
                  Small_image_show ? "lg:w-2/3" : "lg:w-1/2"
                } flex justify-center items-center`}
              >
                <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20">
                  {main_title && (
                    <h2
                      className="text-xl lg:text-2xl xl:text-[33px] font-bold xl:leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: main_title,
                      }}
                    />
                  )}
                  <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{ __html: standorte_content }}
                  />
                  {BTN && (
                    <Link
                      href={BTN?.url}
                      target={BTN?.target}
                      className="flex self-start text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in w-fit"
                      aria-label="link-button"
                      role="link"
                    >
                      {BTN?.title}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div
              className={`
                ${
                  Small_image_show
                    ? "lg:left-1/4 group-[.reverse]:lg:right-1/4"
                    : "lg:left-1/3 group-[.reverse]:lg:right-1/3"
                } absolute border border-[#1A8281] inset-0 -z-10 group-[.reverse]:lg:left-0`}
            ></div>
          </div>
        </div>
      </section>
    )
};

export default AboutLambsheim;
