"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
const ContactAboutDetails = ({
  main_title,
  content,
  image,
  telefonnummer_label,
  email_label,
  terminbuchung_label,
  telefonnummer_button,
  email_button,
  terminbuchung_button,
  terminbuchung_text,
}) => {
  const [ContactOptionData, setContactOptionData] = useState(null);
  const fetchContactOptionData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/acf-options"
      );
      setContactOptionData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchContactOptionData();
  }, []);

  return (
    <section className="pt-[30px] md:pt-[40px] pb-0 lg:pt-[50px]">
      <div className=" flex flex-col gap-8">
        <div className="flex relative w-full max-w-[1578px] px-[15px] gap-4 sm:gap-8 flex-col mx-auto text-center justify-center ">
          <h2>{main_title}</h2>
          {content && (
            <p
              dangerouslySetInnerHTML={{
                __html: content
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            ></p>
          )}
        </div>
        <div className="w-full max-w-[1780px]  flex flex-col lg:flex-row  gap-4 lg:gap-0 py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:right-[15px] lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[80%] 2xl:after:w-[60%] lg:after:h-full lg:after:-z-10">
          <div className="flex flex-shrink-0 px-4  items-center flex-col w-full lg:w-1/3 2xl:w-[45%]  md:flex-row py-0 lg:py-[15px] bg-white">
            {image && (
              <Image
                src={image}
                width={836}
                height={550}
                alt="about-left.png"
                className="w-full object-cover object-center lg:object-left 2xl:object-center h-full"
              />
            )}
          </div>
          <div className="flex gap-5  flex-col w-full justify-center lg:w:1/2 2xl:w-[60%]    lg:gap-8 ">
            <div className="flex flex-col sm:flex-row flex-wrap px-4   2xl:px-8 gap-2">
              <div className="flex flex-col active w-full md:w-[32.22%] border border-Teal gap-4 4xl:gap-6 p-4   *hover:text-white transition-all duration-500 ease-in-out">
                {/* <h3 className="text-h4 2xl:text-h3">{telefonnummer_label}</h3> */}
                <h3 className="text-h4">{telefonnummer_label}</h3>
                <div className="block *:text-sm *:2xl:text-base *:4xl:text-a *:break-words">
                  <p>{ContactOptionData?.footer_phone_number.title}</p>
                </div>
                {ContactOptionData?.footer_phone_number && (
                  <Link
                    href={ContactOptionData?.footer_phone_number.url}
                    target={ContactOptionData?.footer_phone_number.target}
                    className="text-body lg:text-a block mt-auto"
                  >
                    <button className="mt-auto flex self-start text-center text-base 4xl:text-a group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal  p-3 2xl:px-9 sm:py-4 transition-all duration-500 ease-in-out">
                      {telefonnummer_button}
                    </button>
                  </Link>
                )}
              </div>
              <div className="flex flex-col active w-full md:w-[32.22%] border border-Teal gap-4 4xl:gap-6 p-4   *hover:text-white transition-all duration-500 ease-in-out">
                <h3 className=" text-h4">{email_label}</h3>
                <div className="block  *:text-sm *:2xl:text-base *:4xl:text-a *:break-words">
                  <p>{ContactOptionData?.footer_email_address.title}</p>
                </div>

                {ContactOptionData?.footer_email_address && (
                  <Link
                    href={ContactOptionData?.footer_email_address.url}
                    target={ContactOptionData?.footer_email_address.target}
                    className="text-body lg:text-a block mt-auto"
                  >
                    <button className="mt-auto flex self-start text-center text-base 4xl:text-a group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal  p-3 2xl:px-9 sm:py-4 transition-all duration-700 ease-in">
                      {email_button}
                    </button>
                  </Link>
                )}
              </div>
              <div className="flex flex-col active w-full md:w-[32.22%] border border-Teal gap-4 4xl:gap-6 p-4  *hover:text-white transition-all duration-500 ease-in-out">
                <h3 className=" text-h4">{terminbuchung_label}</h3>
                <div className="block *:text-sm *:2xl:text-base *:4xl:text-a *:break-words">
                  <p>{terminbuchung_text}</p>
                </div>
                {terminbuchung_button && (
                  <Link
                    href={terminbuchung_button?.url}
                    target={terminbuchung_button?.target}
                    className="mt-auto text-body  lg:text-a break-words  block"
                  >
                    <button className="mt-auto flex self-start text-center text-base 4xl:text-a group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal   p-3 2xl:px-9 sm:py-4 transition-all duration-700 ease-in">
                      {terminbuchung_button?.title}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAboutDetails;
