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
              />
            )}

            {val?.aesthetik_all_faltenunterspritzung &&
              val?.aesthetik_all_faltenunterspritzung?.map((valData, ind) => {
                console.log("valData");
                const isEven = ind % 2 === 0;
                return (
                  <section
                    key={ind}
                    className={`pb-10 py-[30px] md:py-[40px] lg:py-[50px] ${
                      isEven
                        ? "bg-Bgslate"
                        : "bg-white  flex justify-end items-end"
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
                              ? "pl-0 lg:pl-4 pr-0 lg:pr-4  2xl:pr-[100px]"
                              : "pr-0 lg:pr-4 pl-0 lg:pl-4 2xl:pl-[100px]"
                          }  relative z-10`}
                        >
                          <div className="flex flex-col gap-5 2xl:gap-6 lg:flex-[50%] flex-shrink-0 justify-center">
                            <div className="flex flex-col gap-4">
                              <div className="flex relative">
                                <h2>
                                  {
                                    valData.aesthetik_all_faltenunterspritzung_title
                                  }
                                </h2>
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
                                className="flex flex-col gap-5 2xl:gap-6 flex-1 lg:flex-[50%] flex-shrink-0"
                              >
                                <div className="flex flex-col gap-4 flex-1">
                                  {ind.home_leistungen_section_sub_content_title && (
                                    <h3 className="text-h4 2xl:text-h3">
                                      {
                                        ind.home_leistungen_section_sub_content_title
                                      }
                                    </h3>
                                  )}
                                  <div
                                    className="flex gap-4 text-body 2xl:text-a [&_ul>li]:font-medium *:bg-salte *:p-4 sm:*:w-[calc(50%-8px)] justify-center flex-wrap *:gap-1 *:grid list-g-disc"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        valData?.aesthetik_all_faltenunterspritzung_note,
                                    }}
                                  ></div>
                                </div>
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

{
  /* <section
                    className={`py-[30px] md:py-[40px] lg:py-[50px] ${
                      ind % 2 === 0 ? "bg-Bgslate" : "bg-white"
                    }`}
                    key={ind}
                    id={valData?.aesthetik_anfrage_id}
                  >
                    <div className="container px-[15px] mx-auto">
                      <div
                        className={`flex flex-col ${
                          ind % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                        } gap-4 md:gap-10 2xl:gap-[100px] items-start`}
                      >
           
                        <div
                          className={
                            ind % 2 === 1
                              ? "flex items-start flex-col text-black-800 w-full sm:w-[500px]  lg:w-1/2 2xl:w-[35%] lg:flex-row  ps-6 2xl:ps-16 pb-6 2xl:pb-16 relative after:absolute after:left-0  after:top-12 after:border after:border-Teal after:w-[calc(100%-24px)] 2xl:after:w-[calc(100%-48px)] after:h-[calc(100%-48px)] after:z-0"
                              : "flex items-start flex-col w-full sm:w-[500px]  lg:w-1/2 2xl:w-[35%] lg:flex-row  pe-8 pb-8 2xl:pe-16 2xl:pb-16 relative  after:absolute after:right-0 after:top-12 after:border after:border-Teal after:w-[calc(100%-24px)] 2xl:after:w-[calc(100%-48px)]  after:h-[calc(100%-48px)] after:z-0"
                          }
                        >
                          <div className="w-full h-full">
                            <Image
                              src={
                                valData.aesthetik_all_faltenunterspritzung_image
                              }
                              alt="About-img"
                              objectFit="cover"
                              className="w-full  object-cover  h-full relative z-[1]"
                              width={578}
                              height={578}
                            />
                          </div>
                        </div>
                    
                        <div className="flex gap-5 flex-col w-full justify-center lg:w-1/2  2xl:w-[60%] ps-0 lg:px-4 lg:gap-[25px]">
                          <div className="flex relative">
                            <h2>
                              {valData.aesthetik_all_faltenunterspritzung_title}
                            </h2>
                          </div>
                          <div
                            className="flex flex-col gap-6"
                            dangerouslySetInnerHTML={{
                              __html:
                                valData?.aesthetik_all_faltenunterspritzung_content,
                            }}
                          ></div>
                          <div
                            className="link--block flex flex-col text-black-800 gap-5 p-4 border border-Teal"
                            dangerouslySetInnerHTML={{
                              __html:
                                valData?.aesthetik_all_faltenunterspritzung_note,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </section> */
}
