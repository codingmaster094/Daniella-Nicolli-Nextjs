"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Chevronsvg from '../../public/images/chevron.svg';

const Accordian = ({ main_title, all_faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]);
  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-10 md:py-[70px] lg:py-[100px] bg-Bgslate">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
          <h2 className="sm:text-h3 lg:text-h2">{main_title}</h2>
          <div className="flex w-full">
            <div className="accordian-inner flex flex-col w-full text-left gap-0 sm:gap-5">
              {all_faqs &&
                all_faqs?.map((item, index) => (
                <div
                  key={index}
                  className={`accordian flex flex-col  gap-4  p-4 lg:p-8 ${
                    activeIndex === index ? "active" : ""
                  } ${activeIndex === index ? "border-[1.5px] border-Teal" : "border border-transparent "}`}    
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
                      <Image src={Chevronsvg} alt="Chevron-svg"/>
                    </span>
                  </div>
                  <div
                    className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                      maxHeight: activeIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0px",
                    }}
                    ref={(el) => (contentRefs.current[index] = el)}
                  >
                    <p  dangerouslySetInnerHTML={{ __html: item.all_faqs_answers?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&') }}></p>
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
