import React from "react";
import Image from "next/image";
import Link from "next/link";

const LendingAbout = ({ title, content, allData, BTN, section_show }) => {
  console.log("title", title);
  return (
    section_show && (
      <section className="py-[30px] group bg-Bgslate px-4 3xl:py-[100px]">
        <div className="container max-w-full lg:max-w-[1440px] mx-auto">
          <div className="flex flex-col  gap-6 md:gap-11 lg:gap-16">
            <h2 className="text-xl text-center lg:text-2xl xl:text-[33px] font-bold xl:leading-snug">
              {title}
            </h2>
            {content && (
              <div
                className="space-y-2"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            )}

            {allData &&
              allData?.map((treatment) => (
                <div
                  key={treatment.landing_aesthetic_treatments_details_title}
                  className="flex flex-col border border-Teal text-left p-4 sm:p-8 gap-8"
                >
                  <div className="space-y-4 ">
                    <h3 className="text-xl lg:text-2xl xl:text-[28px] !font-normal">
                      {treatment.landing_aesthetic_treatments_details_title}
                    </h3>

                    <div
                      className="ulDiv link-blocks space-y-4"
                      dangerouslySetInnerHTML={{
                        __html:
                          treatment.landing_aesthetic_treatments_details_content,
                      }}
                    />
                  </div>
                  <div className="mb-4">
                    <Image
                      src={
                        treatment.landing_aesthetic_treatments_details_images
                          .url
                      }
                      alt={
                        treatment.landing_aesthetic_treatments_details_images
                          .alt
                      }
                      width={
                        treatment.landing_aesthetic_treatments_details_images
                          .width
                      }
                      height={
                        treatment.landing_aesthetic_treatments_details_images
                          .height
                      }
                    />
                  </div>
                </div>
              ))}
            {BTN && (
              <div className="text-center">
                <Link
                  href={BTN.url || "#"}
                  target={BTN?.target || "_self"}
                  className="uppercase bg-[#1A8281] py-4 px-9 text-white inline-block"
                >
                  {BTN?.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default LendingAbout;
