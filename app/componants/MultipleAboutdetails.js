"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Categories from "./Categories";

const AsehetikAboutpage = ({ MultipleAboutdeta, loading }) => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [MultipleAboutdeta]);
  return (
    <>
      {loading
        ? Array(2)
            .fill("")
            .map((_, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px]`}
                >
                  {/* Swap position based on even or odd */}
                  {isEven ? (
                    <>
                      <div className="lg:w-1/2">
                        <div className="ph-item w-full h-full"></div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20 w-full">
                          <div className="ph-title text-xl lg:text-2xl xl:text-[33px] font-bold xl:leading-snug"></div>
                          <div className="ph-text w-full h-full space-y-2"></div>
                          <div className="flex gap-2 flex-wrap">
                            {Array(2)
                              .fill("")
                              .map((_, j) => (
                                <div
                                  key={j}
                                  className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow animate-pulse"
                                >
                                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                                  <div className="h-10 bg-gray-300 rounded w-1/4"></div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lg:w-1/2">
                        <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20 w-full">
                          <div className="ph-title text-xl lg:text-2xl xl:text-[33px] font-bold xl:leading-snug"></div>
                          <div className="ph-text w-full h-full space-y-2"></div>
                          <div className="flex gap-2 flex-wrap">
                            {Array(2)
                              .fill("")
                              .map((_, j) => (
                                <div
                                  key={j}
                                  className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow animate-pulse"
                                >
                                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                                  <div className="h-10 bg-gray-300 rounded w-1/4"></div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="ph-item w-full h-full"></div>
                      </div>
                    </>
                  )}
                </div>
              );
            })
        : MultipleAboutdeta &&
          MultipleAboutdeta?.value?.map((val, index) => (
            <React.Fragment key={index}>
              {val?.aesthetik_anfrage_1_main_title && (
                <Categories
                  title={val?.aesthetik_anfrage_1_main_title}
                  description={val?.aesthetik_anfrage_1_content}
                  BTN={val?.aesthetik_anfrage_1_button}
                  bg_img={val?.aesthetik_anfrage_1_image}
                />
              )}

              {val?.aesthetik_all_faltenunterspritzung &&
                val?.aesthetik_all_faltenunterspritzung?.map((valData, ind) => {
                  const isEven = ind % 2 === 0;
                  return (
                    <section
                      key={ind}
                      className={`py-[20px] group ${
                        isEven ? "bg-white " : "bg-white reverse"
                      }`}
                      id={valData.aesthetik_anfrage_id}
                    >
                      <div
                        className={`px-4 sm:px-[50px] 3xl:px-0 py-0 3xl:py-[100px] my-[10px] md:my-[30px] 3xl:mr-[100px] relative z-10 group-[.reverse]:3xl:mr-[0] group-[.reverse]:3xl:ml-[100px] ${
                          isEven ? "3xl:mr-[100px]" : "3xl:ml-[100px]"
                        }  relative z-10`}
                      >
                        <div className="container max-w-3xl lg:max-w-full 3xl:p-0 relative z-10 3xl:static p-4 sm:p-10 mx-auto">
                          <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 3xl:gap-[100px] group-[.reverse]:lg:flex-row-reverse">
                            <div
                              className={
                                valData.aesthetik_all_faltenunterspritzung_image_show
                                  ? "lg:w-1/3"
                                  : "lg:w-1/2"
                              }
                            >
                              <div className="sticky top-40">
                                <div className="aspect-square bg-white">
                                  {valData.aesthetik_all_faltenunterspritzung_image && (
                                    <Image
                                      src={
                                        valData.aesthetik_all_faltenunterspritzung_image
                                      }
                                      alt="about-right.png"
                                      className={`w-auto object-contain lg:object-cover h-full py-0 lg:py-[30px] ${
                                        isEven ? "bg-white" : "bg-white"
                                      }`}
                                      layout="fill"
                                      objectFit="cover"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div
                              className={`${
                                valData.aesthetik_all_faltenunterspritzung_image_show
                                  ? "lg:w-2/3"
                                  : "lg:w-1/2"
                              } flex justify-center items-center`}
                            >
                              <div className="space-y-6 3xl:pr-[100px] group-[.reverse]:3xl:pr-[0] group-[.reverse]:3xl:pl-[100px] 3xl:py-20 w-full">
                                {valData.aesthetik_all_faltenunterspritzung_title && (
                                  <h2
                                    className="text-xl lg:text-2xl xl:text-[33px] font-bold xl:leading-snug"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        valData.aesthetik_all_faltenunterspritzung_title,
                                    }}
                                  />
                                )}
                                <div
                                  className="space-y-2"
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      valData?.aesthetik_all_faltenunterspritzung_content,
                                  }}
                                />
                                <div className="flex gap-2 flex-wrap">
                                  {valData
                                    ?.aesthetik_all_faltenunterspritzung_contents
                                    ?.aesthetik_all_faltenunterspritzung_content_items &&
                                    Array.isArray(
                                      valData
                                        .aesthetik_all_faltenunterspritzung_contents
                                        .aesthetik_all_faltenunterspritzung_content_items
                                    ) &&
                                    valData.aesthetik_all_faltenunterspritzung_contents.aesthetik_all_faltenunterspritzung_content_items?.map(
                                      (item, i) => (
                                        <div
                                          key={i}
                                          className="bg-[#FDF6EE] p-4 sm:p-8 space-y-4 2xl:w-[calc(50%-4px)] grow"
                                        >
                                          <div className="link-blocks space-y-2">
                                            {item.aesthetik_all_faltenunterspritzung_content_items_title && (
                                              <h3 className="text-5 lg:text-[24px]  xl:font-semibold">
                                                {
                                                  item.aesthetik_all_faltenunterspritzung_content_items_title
                                                }
                                              </h3>
                                            )}

                                            <ul
                                              className="menu menu1 list-g-disc text-[18px]"
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  item?.aesthetik_all_faltenunterspritzung_content_items
                                                    ?.replace(/<ul>/g, "")
                                                    .replace(/<\/ul>/g, "")
                                                    .replace(/&amp;/g, "&"),
                                              }}
                                            />
                                          </div>
                                        </div>
                                      )
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`
                ${
                  valData.aesthetik_all_faltenunterspritzung_image_show
                    ? "lg:left-1/4 group-[.reverse]:lg:right-1/4"
                    : "lg:left-1/3 group-[.reverse]:lg:right-1/3"
                } absolute border border-[#1A8281] inset-0 -z-10 group-[.reverse]:lg:left-0`}
                          ></div>
                        </div>
                      </div>
                    </section>
                  );
                })}
            </React.Fragment>
          ))}
    </>
  );
};

export default AsehetikAboutpage;
