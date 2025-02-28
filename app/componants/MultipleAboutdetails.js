import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const AsehetikAboutpage = ({ MultipleAboutdeta }) => {
  return (
    <>
      {MultipleAboutdeta &&
        MultipleAboutdeta?.value?.map((val, index) => (
          <>
            {val?.aesthetik_anfrage_1_main_title && (
              <Categories
                key={index}
                title={val?.aesthetik_anfrage_1_main_title}
                description={val?.aesthetik_anfrage_1_content}
                BTN={val?.aesthetik_anfrage_1_button}
              />
            )}
            {val?.aesthetik_all_faltenunterspritzung &&
              val?.aesthetik_all_faltenunterspritzung?.map((valData, ind) => {
                return (
                  <section
                    // className="py-[30px] md:py-[40px] lg:py-[50px] bg-Bgslate"
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
                        {/* Image Section */}
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
                        {/* Content Section */}
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
                  </section>
                );
              })}
          </>
        ))}
    </>
  );
};

export default AsehetikAboutpage;
