"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Chevronsvg from "../../public/images/chevron.svg";

const Accordian = ({ main_title, all_faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default
  const contentRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.height = activeIndex === index ? content.scrollHeight + "px" : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
          <h2 className="sm:text-h3 lg:text-h2">{main_title}</h2>
          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-0 sm:gap-5">
              {all_faqs &&
                all_faqs.map((item, index) => (
                  <div
                    key={index}
                    className={`accordian flex flex-col gap-4 p-4 lg:p-8 transition-all duration-300 ${
                      activeIndex === index
                        ? "active border-[1.5px] shadow-[0px_4px_13px_-2px_#1310220f,0px_4.8px_24.4px_-6px_#1310221a]"
                        : "border border-transparent"
                    }`}
                  >
                    <div
                      className="accordian-header flex justify-between gap-2 cursor-pointer"
                      onClick={() => handleClick(index)}
                    >
                      <h3 className="text-a sm:text-xl md:text-h4 !font-medium">
                        {item.all_faqs_question}
                      </h3>
                      <span
                        className={`arrow w-[28px] h-[28px] inline-block flex-shrink-0 transition-transform rounded-full ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                      >
                        <Image src={Chevronsvg} alt="Chevron-svg" />
                      </span>
                    </div>
                    <div
                      className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                      ref={(el) => (contentRefs.current[index] = el)}
                      style={{
                        height: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                      }}
                    >
                      <p
                        className="pt-2"
                        dangerouslySetInnerHTML={{
                          __html: item.all_faqs_answers
                            ?.replace(/<p>/g, "")
                            .replace(/<\/p>/g, "")
                            .replace(/&amp;/g, "&"),
                        }}
                      ></p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordian;
