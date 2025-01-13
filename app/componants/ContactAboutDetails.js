"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
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
terminbuchung_text
}) => {
    const [ContactOptionData, setContactOptionData] = useState(null);
    const fetchContactOptionData = async () => {
      try {
        const response = await axios.get(
          'https://daniella.blog-s.de/wp-json/custom/v1/acf-options'
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
         <section className="py-10 md:py-[70px]  lg:py-[100px]">
           <div className=" flex flex-col gap-8">
                <div className="flex w-full max-w-[1548px] px-[15px] gap-4 sm:gap-8  flex-col pb-4 lg:pb-[25px] mx-auto text-center justify-center ">
                 <h2>{main_title}</h2>
                 <p dangerouslySetInnerHTML={{ __html:content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                </div>
                <div className="w-full max-w-[1780px] flex flex-col lg:flex-row  gap-4 lg:gap-0 py-0 lg:py-[64px] relative after:none lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:border lg:after:border-Teal lg:after:w-[60%] lg:after:h-full lg:after:-z-10">
                        <div className="flex items-center flex-col w-full lg:w-[45%] h-full sm:h-[500px] object-top lg:h-auto lg:flex-row py-0 lg:py-[15px] bg-white">
                           {
                            image && 
                            <Image src={image} width={836} height={550} alt="about-left.png" className="w-full object-contain sm:object-cover  h-full"/>
                           }
                        </div>
                        <div className="flex gap-5  flex-col w-full justify-center lg:w-[60%]    lg:gap-8 ">
                                <div className="flex flex-col sm:flex-row flex-wrap     lg:pe-8 gap-4">
                                    <div className="flex flex-col active flex-1  group *:hover:text-white border border-Teal gap-4 sm:gap-6 p-6 hover:bg-Teal *hover:text-white transition-all duration-700 ease-in">
                                        <h3>{telefonnummer_label}</h3>
                                         {
                                            ContactOptionData?.footer_phone_number &&  <Link href={ContactOptionData?.footer_phone_number.url}>{ContactOptionData?.footer_phone_number.title}</Link>
                                         }
                                          {
                                              telefonnummer_button && <Link href='#' className='mt-auto flex self-start text-center  group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal  px-5 py-3 lg:px-9 sm:py-4 transition-all duration-700 ease-in' aria-label="link-button" role="link">{telefonnummer_button}</Link>
                                          }
                                        
                                    </div>
                                    <div className="flex flex-col active flex-1 group *:hover:text-white border border-Teal gap-4 sm:gap-6 p-6  hover:bg-Teal *hover:text-white transition-all duration-700 ease-in" aria-label="link-button" role="link">
                                        <h3>{email_label}</h3>
                                        {
                                            ContactOptionData?.footer_email_address && <Link href={ContactOptionData?.footer_email_address.url} className="text-a">{ContactOptionData?.footer_email_address.title}</Link>
                                         }
                                       {
                                        email_button &&  <Link href='/' className='mt-auto flex self-start text-center  group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal  px-5 py-3 lg:px-9 sm:py-4 transition-all duration-700 ease-in' aria-label="link-button" role="link">{email_button}</Link>
                                       }
                                    </div>
                                    <div className="flex flex-col active flex-1 group *:hover:text-white border border-Teal gap-4 sm:gap-6 p-6  hover:bg-Teal *hover:text-white transition-all duration-700 ease-in" aria-label="link-button" role="link">
                                        <h3>{terminbuchung_label}</h3>
                                        <span className='text-a'>{terminbuchung_text}</span>
                                        {
                                           terminbuchung_button?.title && <Link href="#" className='mt-auto flex self-start text-center  group-hover:!bg-white group-hover:!text-Teal bg-Teal text-white   font-normal   px-5 py-3 lg:px-9 sm:py-4 transition-all duration-700 ease-in' aria-label="link-button" role="link">{terminbuchung_button?.title}</Link>
                                        }
                                    </div>
                            </div>
                        </div>
                </div>
           </div>
          </section>
  )
}

export default ContactAboutDetails