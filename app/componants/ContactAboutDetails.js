"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import ContactBox from "./ContactBox";
const ContactAboutDetails = ({
  main_title,
  content,
  image,
  telefonnummer_label,
  kontakt_whatsapp_label,
  email_label,
  terminbuchung_label,
  telefonnummer_button,
  kontakt_whatsapp_button_text,
  email_button,
  terminbuchung_button,
  terminbuchung_text,
}) => {
  const [ContactOptionData, setContactOptionData] = useState(null);
  const fetchContactOptionData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_HEADER_BASE_URL}/acf-options`
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
    <>
      <section className="pt-[30px] md:pt-[40px] pb-0 lg:pt-[50px]">
        <div className=" flex flex-col gap-8 px-[15px]">
          <div className="flex relative w-full max-w-[1578px]  gap-4 sm:gap-8 flex-col mx-auto text-center justify-center ">
            <h2
              dangerouslySetInnerHTML={{
                __html: main_title,
              }}
            ></h2>
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
          <div className="w-full max-w-[1200px] mx-auto   flex flex-col lg:flex-row  gap-6  justify-center ">
            {/* <div className="flex flex-shrink-0 px-4  items-center flex-col w-full lg:w-1/3 2xl:w-[45%]  md:flex-row py-0 lg:py-[15px] bg-white">
              {
                image && (
                  <Image
                    src={image}
                    width={836}
                    height={550}
                    alt="about-left.png"
                    className="w-full object-cover object-center lg:object-left 2xl:object-center h-full"
                  />
                )
              }
            </div> */}

            <div className="flex w-full flex-col sm:flex-row flex-wrap  gap-4">
              <ContactBox
                title={telefonnummer_label}
                value={ContactOptionData?.footer_phone_number?.title}
                buttonText={telefonnummer_button}
                buttonLink={ContactOptionData?.footer_phone_number?.url}
                buttonTarget={ContactOptionData?.footer_phone_number?.target}
              />

              <ContactBox
                title={kontakt_whatsapp_label}
                // value={ContactOptionData?.footer_whatsapp_number?.title}
                buttonText={kontakt_whatsapp_button_text}
                buttonLink={ContactOptionData?.footer_whatsapp_number?.url}
                buttonTarget={ContactOptionData?.footer_whatsapp_number?.target}
              />
              <ContactBox
                title={email_label}
                value={ContactOptionData?.footer_email_address?.title}
                buttonText={email_button}
                buttonLink={ContactOptionData?.footer_email_address?.url}
                buttonTarget={ContactOptionData?.footer_email_address?.target}
              />

              <ContactBox
                title={terminbuchung_label}
                value={terminbuchung_text}
                buttonText={terminbuchung_button?.title}
                buttonLink={terminbuchung_button?.url}
                buttonTarget={terminbuchung_button?.target}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactAboutDetails;
