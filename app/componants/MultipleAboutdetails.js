import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const AsehetikAboutpage = ({ MultipleAboutdeta }) => {
  return (
    <>
      {MultipleAboutdeta &&
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
                    className={`pb-10 py-[30px] md:py-[40px] lg:py-[50px] ${
                      isEven
                        ? "bg-Bgslate"
                        : "bg-white flex justify-end items-end"
                    }`}
                    id={valData.aesthetik_anfrage_id}
                  >
                    <div className="w-full max-w-[1780px] px-[15px] pe-[15px]">
                      <div
                        className={`flex z-10 flex-col lg:flex-row gap-4 md:gap-8 lg:gap-0 py-0 lg:py-[64px] relative 
                        lg:after:absolute lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:z-0 ${
                          isEven
                            ? "lg:flex-row lg:after:right-0"
                            : "lg:flex-row-reverse lg:after:left-0"
                        }`}
                      >
                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end items-start lg:items-center flex-col w-full lg:w-[55%] h-full">
                          <Image
                            src={
                              valData.aesthetik_all_faltenunterspritzung_image
                            }
                            alt="About-img"
                            objectFit="cover"
                            className={`relative z-[1] py-0 lg:py-[30px] ${
                              isEven ? "bg-Bgslate" : "bg-white"
                            }`}
                            width={578}
                            height={578}
                          />
                        </div>
                        <div
                          className={`flex gap-5 flex-col w-full justify-center lg:gap-8 lg:w-[50%] ${
                            isEven
                              ? "pl-0 lg:pl-4 pr-0 lg:pr-4 2xl:pr-[100px]"
                              : "pr-0 lg:pr-4 pl-0 lg:pl-4 2xl:pl-[100px]"
                          } relative z-10`}
                        >
                          <div className="flex flex-col gap-5 2xl:gap-6 lg:flex-[50%] flex-shrink-0 justify-center">
                            <div className="flex flex-col gap-4">
                              <div className="flex relative">
                                <h2
                                  dangerouslySetInnerHTML={{
                                    __html:
                                      valData.aesthetik_all_faltenunterspritzung_title,
                                  }}
                                ></h2>
                              </div>
                              <div
                                className="flex flex-col gap-4 text-body 2xl:text-a [&_ul>li]:font-medium"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    valData?.aesthetik_all_faltenunterspritzung_content,
                                }}
                              ></div>
                              <div
                                key={ind.id}
                                className="flex flex-wrap xlg:justify-center gap-4 mt-4"
                              >
                                {valData
                                  ?.aesthetik_all_faltenunterspritzung_contents
                                  ?.aesthetik_all_faltenunterspritzung_content_items &&
                                  Array.isArray(
                                    valData
                                      .aesthetik_all_faltenunterspritzung_contents
                                      .aesthetik_all_faltenunterspritzung_content_items
                                  ) &&
                                  valData.aesthetik_all_faltenunterspritzung_contents.aesthetik_all_faltenunterspritzung_content_items.map(
                                    (items, i) => {
                                      return (
                                        <div
                                          className="flex flex-col gap-4 bg-salte p-4 xlg:w-[calc(50%-8px)]"
                                          key={i}
                                        >
                                          {items.aesthetik_all_faltenunterspritzung_content_items_title && (
                                            <h3
                                              className="text-h4 2xl:text-h3"
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  items.aesthetik_all_faltenunterspritzung_content_items_title,
                                              }}
                                            ></h3>
                                          )}
                                          <ul
                                            className="menu menu1 list-g-disc text-[18px]"
                                            dangerouslySetInnerHTML={{
                                              __html:
                                                items?.aesthetik_all_faltenunterspritzung_content_items
                                                  ?.replace(/<ul>/g, "")
                                                  .replace(/<\/ul>/g, "")
                                                  .replace(/&amp;/g, "&"),
                                            }}
                                          ></ul>
                                        </div>
                                      );
                                    }
                                  )}
                              </div>
                            </div>
                          </div>
                        </div>
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
