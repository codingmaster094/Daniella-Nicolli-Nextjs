import Image from "next/image";
import React from "react";
import Categories from "./Categories";

const AsehetikAboutpage = ({ MultipleAboutdeta }) => {
  return (
    <>
      {MultipleAboutdeta &&
        MultipleAboutdeta?.value?.map((val, index) => (
          <div key={index}>
          <Categories
            title={val?.aesthetik_anfrage_1_main_title}
            description={val?.aesthetik_anfrage_1_content}
            BTN={val?.aesthetik_anfrage_1_button}
        />
            {val?.aesthetik_all_faltenunterspritzung &&
              val?.aesthetik_all_faltenunterspritzung?.map((valData, ind) => (
              <section className="py-10 md:py-[70px] lg:py-[100px]" key={ind}>
                <div className="container px-[15px] mx-auto">
                  <div
                    className={`flex flex-col ${
                      ind % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                    } gap-4 md:gap-10 2xl:gap-[100px] justify-center`}
                  >
                    {/* Image Section */}
                    <div className={`
                    ${ind % 2 === 1 ?  `flex items-center flex-col w-full lg:w-[35%] lg:flex-row p-0 lg:ps-16 lg:pb-16 relative after:none lg:after:absolute lg:after:left-0 lg:after:top-12 lg:after:border lg:after:border-Teal lg:after:w-[calc(100%-48px)] lg:after:h-[calc(100%-48px)] lg:after:-z-10` : `flex   w-full lg:w-[35%] lg:flex-row p-0 lg:pe-16 lg:pb-16 relative after:none lg:after:absolute lg:after:right-0 lg:after:top-12 lg:after:border lg:after:border-Teal 2xl:after:w-[calc(100%-48px)] 2xl:after:h-[calc(100%-48px)] lg:after:-z-10`} `}>
                      <div className="flex w-auto lg:w-full h-full sm:h-[550px] object-top  2xl:h-[578px]  lg:after:z-10">
                        <Image
                          src={valData.aesthetik_all_faltenunterspritzung_image}
                          alt="About-img"
                          objectFit="cover"
                          className="w-full object-contain lg:object-cover  h-full"
                          width={578}
                          height={578}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex gap-5 flex-col w-full justify-center lg:w-[60%] ps-0 lg:px-4 lg:gap-[25px]">
                      <div className="flex relative pb-4 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                        <h2>
                          {valData.aesthetik_all_faltenunterspritzung_title}
                        </h2>
                      </div>
                      <div className="flex flex-col gap-6" dangerouslySetInnerHTML={{
                              __html:
                                valData?.aesthetik_all_faltenunterspritzung_content}}>
                      </div>
                        <div className=" flex flex-col text-black-800 gap-5 p-4 border border-Teal" dangerouslySetInnerHTML={{ __html:valData?.aesthetik_all_faltenunterspritzung_note}}>
                        </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        ))}
    </>
  );
};

export default AsehetikAboutpage;
