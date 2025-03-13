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
    // <section className="py-[30px] md:py-[40px] lg:py-[50px]">
    //   <div className="w-full max-w-[1780px] px-[15px]  lg:px-0 ms-auto !ps-[15px]">
    //     <div className="flex flex-col-reverse  lg:flex-row gap-4 md:gap-8  py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:left-15px lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:-z-10">
    //       <div className="flex gap-5 flex-col w-full justify-center lg:w-[50%] px-0  lg:px-4  lg:gap-8 2xl:px-[100px]">
    //         <div className="flex relative">
    //           <h2
    //             dangerouslySetInnerHTML={{
    //               __html: main_title,
    //             }}
    //           ></h2>
    //         </div>
    //         <div
    //           className="flex flex-col gap-4 md:gap-6"
    //           dangerouslySetInnerHTML={{ __html: standorte_content }}
    //         ></div>
    //         {BTN && (
    //           <Link
    //             href={BTN?.url}
    //             target={BTN?.target}
    //             className="flex self-start text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
    //             aria-label="link-button"
    //             role="link"
    //           >
    //             {BTN?.title}
    //           </Link>
    //         )}
    //       </div>
    //       <div className=" relative flex self-start lg:self-center flex-col w-full lg:w-[55%] h-full xm:h-[500px] 2xl:h-[804px]  md:flex-row">
    //         {standorte_image && (
    //           <Image
    //             src={standorte_image}
    //             alt="about-right.png"
    //             className="w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px] bg-white"
    //             layout="fill"
    //             objectFit="cover"
    //           />
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-[20px] group reverse">
      <div className="px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] xlg:my-[100px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px]">
        <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <div className="sticky top-40">
                <div className="aspect-square bg-white">
                  {standorte_image && (
                    <Image
                      src={standorte_image}
                      alt="about-right.png"
                      className="w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px]"
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
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
          <div className="absolute border border-[#1A8281] inset-0 lg:left-1/3 -z-10 group-[.reverse]:lg:right-1/3 group-[.reverse]:lg:left-0"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutLambsheim;
