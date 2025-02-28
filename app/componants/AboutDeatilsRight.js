import Image from "next/image";
import React from "react";
const AboutDeatilsRight = ({ title, description, Images }) => {
  return (
    <section className="py-[30px] md:py-[40px]  lg:py-[50px] bg-Bgslate">
      <div className="container px-[15px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-10 2xl:gap-[100px]">
          <div className="flex  flex-col w-full lg:w-[35%] lg:flex-row p-0 lg:pe-16 lg:pb-16 relative after:none lg:after:absolute lg:after:right-0 lg:after:top-12 lg:after:border lg:after:border-Teal lg:after:w-[calc(100%-48px)] lg:after:h-[calc(100%-48px)] lg:after:z-0">
            <div className="flex w-auto lg:w-full h-full sm:h-[500px] 2xl:h-[578px] object-top">
              {Images && (
                <Image
                  src={Images}
                  width={464}
                  height={578}
                  alt="About-img"
                  objectFit="cover"
                  className='"w-full object-contain lg:object-cover h-full relative z-[1]'
                />
              )}
            </div>
          </div>
          <div className="flex gap-5 flex-col w-full  justify-center lg:w-[60%]  ps-0  lg:px-4  lg:gap-[25px]">
            <div className="flex relative">
              <h2>{title}</h2>
            </div>
            <div className="flex flex-col gap-6">
              <p
                dangerouslySetInnerHTML={{
                  __html: description
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, "")
                    .replace(/&amp;/g, "&"),
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDeatilsRight;
