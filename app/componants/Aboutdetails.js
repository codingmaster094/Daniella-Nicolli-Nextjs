"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Aboutdetails = (props) => {
  const { main_title, section_image, section_content, section_sub_content } =
    props;

  const sanitizedContent = section_content
    ?.replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/&amp;/g, "&");

  return (
    <section className="pb-10 py-[30px] md:py-[40px] lg:py-[50px] bg-Bgslate">
      <div className="w-full max-w-[1780px] px-[15px] pe-[15px]">
        <div className="flex z-10 flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0 py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:z-0">
          <div className="flex items-start lg:items-center flex-col w-full lg:w-[55%] h-full xm:h-[550px] object-top 2xl:h-auto md:flex-row">
            {section_image?.url ? (
              <Image
                src={section_image?.url}
                width={section_image?.width || 908}
                height={section_image?.height || 744}
                alt="About Section Image"
                className="w-full object-cover h-full relative z-[1] py-0 lg:py-[30px] bg-Bgslate"
                priority
              />
            ) : null}
          </div>
          <div className="flex gap-5 flex-col w-full justify-center lg:w-[50%] px-0 lg:px-4 lg:gap-8 2xl:px-[100px] relative z-10">
            <div className="flex relative">
              <h2>{main_title && main_title}</h2>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: sanitizedContent,
              }}
            ></p>
            <div className="flex flex-col gap-2 sm:flex-row ">
              {section_sub_content &&
                section_sub_content?.value.map((item) => (
                  <div
                    key={item.id}
                    className="flex bg-salte flex-col  p-6 2xl:p-8 gap-5 2xl:gap-6 flex-1 lg:flex-[50%] flex-shrink-0"
                  >
                    <div className="flex flex-col gap-4 flex-1">
                      <h3 className="text-h4 2xl:text-h3">
                        {item.home_leistungen_section_sub_content_title}
                      </h3>
                      <div
                        className="flex flex-col gap-4 text-body 2xl:text-a [&_ul>li]:font-medium"
                        dangerouslySetInnerHTML={{
                          __html:
                            item.home_leistungen_section_sub_content_content,
                        }}
                      ></div>
                    </div>
                    {item.home_leistungen_section_sub_content_button && (
                      <Link
                        href={
                          item?.home_leistungen_section_sub_content_button?.url
                        }
                        target={
                          item?.home_leistungen_section_sub_content_button
                            ?.target
                        }
                        className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 2xl:px-9 2xl:py-4 transition-all duration-700 ease-in"
                        aria-label="link-button"
                        role="link"
                      >
                        {item.home_leistungen_section_sub_content_button.title}
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutdetails;
