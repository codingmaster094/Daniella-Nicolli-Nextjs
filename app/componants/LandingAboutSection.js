"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingAboutSection = (props) => {
  const {
    main_title,
    section_image,
    section_content,
    section_sub_content,
    BTN,
    section_show,
    Small_image_show,
  } = props;

  const sanitizedContent = section_content;

  return (
    section_show && (
      <section className="py-[20px] group bg-white">
        <div className="px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px]">
          <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
              <div className={Small_image_show ? "lg:w-1/3" : "lg:w-1/2"}>
                <div className="sticky top-40">
                  <div className="aspect-square bg-white">
                    {section_image?.url && (
                      <Image
                        src={section_image?.url}
                        width={908}
                        height={744}
                        alt="About Section Image"
                        className="w-full object-cover h-full relative z-[1] py-0 lg:py-[30px] bg-white"
                        priority
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className={Small_image_show ? "lg:w-2/3" : "lg:w-1/2"}>
                <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20">
                  {main_title && (
                    <h2
                      className="text-xl lg:text-2xl xl:text-[33px]  xl:leading-snug"
                      dangerouslySetInnerHTML={{ __html: main_title }}
                    />
                  )}
                  <div
                    className="space-y-2"
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                  />
                  <div className="flex gap-2 flex-wrap">
                    {section_sub_content &&
                      section_sub_content?.map((item, i) => (
                        <div
                          key={i}
                          className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow"
                        >
                          <div className="link-blocks space-y-2">
                            {item.home_leistungen_section_sub_content_title && (
                              <>
                                <h3
                                  className="text-xl lg:text-2xl xl:text-[28px] xl:font-semibold"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      item.home_leistungen_section_sub_content_title,
                                  }}
                                ></h3>
                              </>
                            )}
                            {item.home_leistungen_section_sub_content_description && (
                              <p
                                dangerouslySetInnerHTML={{
                                  __html:
                                    item.home_leistungen_section_sub_content_description,
                                }}
                              ></p>
                            )}

                            <ul
                              className="menu list-g-disc text-[16px]"
                              dangerouslySetInnerHTML={{
                                __html:
                                  item.home_leistungen_section_sub_contents_item
                                    ?.replace(/<ul>/g, "")
                                    .replace(/<\/ul>/g, ""),
                              }}
                            />
                          </div>

                          {item.home_leistungen_section_sub_content_button && (
                            <div>
                              <Link
                              
                                href={
                                  item
                                    .home_leistungen_section_sub_content_button
                                    ?.url || "#"
                                }
                                target={
                                  item
                                    .home_leistungen_section_sub_content_button
                                    ?.target || "_self"
                                }
                                className="uppercase bg-[#1A8281] py-4 px-9 text-white inline-block"
                              >
                                {
                                  item
                                    .home_leistungen_section_sub_content_button
                                    ?.title
                                }
                              </Link>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                  <div className="flex justify-center items-center">
                    {BTN && (
                      <Link
                      
                        href={BTN.url}
                        target={BTN.target}
                        className="uppercase bg-[#1A8281] py-4 px-9 text-white inline-block"
                      >
                        {BTN.title}
                      </Link>
                    )}
                  </div>
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
  );
};

export default LandingAboutSection;
