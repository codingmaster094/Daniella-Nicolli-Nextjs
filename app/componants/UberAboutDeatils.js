import React from "react";
import Image from "next/image";
const UberAboutDeatils = ({ main_title, content, image, sub_content }) => {
  return (
    //  <section className="pb-10 md:py-[70px] md:pt-0 lg:py-[100px]">
    <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-Bgslate">
      <div className="w-full max-w-[1780px] px-[15px] lg:px-0">
        <div className="flex z-10 flex-col lg:flex-row gap-4 md:gap-8 py-0 lg:py-[30px] relative after:none lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:z-0">
          <div className="flex items-center flex-col w-full lg:w-[50%] md:flex-row">
            {image && (
              <Image
                src={image}
                width={908}
                height={804}
                alt="about-left.png"
                className="w-full object-contain lg:object-cover h-full relative z-[1] py-0 lg:py-[30px] bg-Bgslate"
              />
            )}
          </div>
          <div className="flex gap-5 pe-15 flex-col w-full justify-center lg:w-[50%] px-0  lg:px-4  lg:gap-8 2xl:px-[100px] relative z-10">
            <div className="flex relative">
              <h2
                dangerouslySetInnerHTML={{
                  __html: main_title,
                }}
              ></h2>
            </div>
            <div
              className="flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-4 bg-salte p-4">
                <ul
                  className="menu menu1 list-g-disc text-[18px]"
                  dangerouslySetInnerHTML={{
                    __html: sub_content
                      ?.replace(/<ul>/g, "")
                      .replace(/<\/ul>/g, "")
                      .replace(/&amp;/g, "&"),
                  }}
                ></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UberAboutDeatils;
