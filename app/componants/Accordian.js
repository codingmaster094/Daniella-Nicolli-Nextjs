"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Chevronsvg from "../../public/images/chevron.svg";

const Accordian = ({ main_title, all_faqs, show_section, loading }) => {
  console.log("loading", loading);
  const [selected, setSelected] = useState(0); // Open first item by default
  const [height, setHeight] = useState("0px"); // State for height
  const contentRefs = useRef(new Map());

  useEffect(() => {
    // Set the height based on the selected index
    if (selected !== null && contentRefs.current.get(selected)) {
      setHeight(`${contentRefs.current.get(selected).scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [selected]);

  useEffect(() => {
    // Set initial height for the first item
    if (all_faqs && all_faqs.length > 0) {
      setHeight(`${contentRefs.current.get(0)?.scrollHeight}px`);
    }
  }, [all_faqs]);

  const handleClick = (index) => {
    if (selected === index) {
      setSelected(null); // Close if already open
    } else {
      setSelected(index); // Open the clicked item
    }
  };

  return (
    show_section && (
      <section className="py-[30px] md:py-[40px] lg:py-[50px] bg-white">
        <div className="container mx-auto px-[15px]">
          <div className="flex w-full max-w-[1140px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
            {loading ? (
              <div className="h-8 w-3/4 bg-gray-200 animate-pulse mx-auto"></div>
            ) : (
              <h2
                className="sm:text-h3 lg:text-h2"
                dangerouslySetInnerHTML={{
                  __html: main_title,
                }}
              ></h2>
            )}
            <div className="flex w-full">
              <div className="accordian-inner flex flex-col w-full text-left gap-0 sm:gap-4">
                {loading ? Array(4)
            .fill("")
            .map((_, i) => {
              return (
                       <div className="p-4 sm:p-8 space-y-4 2xl:w-full grow animate-pulse">
                            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                          </div>
                )}) : (
                  all_faqs?.map((item, index) => (
                    <div
                      key={index}
                      className={`accordian flex flex-col p-4  transition-all shadow-[0px_4px_13px_-2px_#1310220f,0px_4.8px_24.4px_-6px_#1310221a] duration-300 ${
                        selected === index ? "active" : "border-transparent"
                      }`}
                    >
                      <div
                        className="accordian-header flex justify-between gap-2 cursor-pointer"
                        onClick={() => handleClick(index)}
                      >
                        <h3
                          className="text-a sm:text-xl !font-medium"
                          dangerouslySetInnerHTML={{
                            __html: item.all_faqs_question,
                          }}
                        ></h3>
                        <span
                          className={`arrow w-[28px] h-[28px] inline-block flex-shrink-0 transition-transform rounded-full ${
                            selected === index ? "rotate-180" : ""
                          }`}
                        >
                          <Image src={Chevronsvg} alt="Chevron-svg" />
                        </span>
                      </div>
                      <div
                        className="accordion-content overflow-hidden transition-all duration-300 ease-in-out"
                        ref={(el) => el && contentRefs.current.set(index, el)}
                        style={{
                          maxHeight: selected === index ? height : "0px",
                        }}
                      >
                        <p
                          className="pt-4"
                          dangerouslySetInnerHTML={{
                            __html: item.all_faqs_answers
                              ?.replace(/<p>/g, "")
                              .replace(/<\/p>/g, "")
                              .replace(/&amp;/g, "&"),
                          }}
                        ></p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Accordian;
