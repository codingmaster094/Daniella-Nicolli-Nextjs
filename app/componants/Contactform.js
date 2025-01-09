"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Phone from '../../public/images/greenphone.svg'
import Email from '../../public/images/greenmail.svg'
import location from '../../public/images/greenlocation.svg'
import Twitter from '../../public/images/Twitter.svg'
import facebook from '../../public/images/facebook.svg'
import Instagram from '../../public/images/instagram.svg'
import  Chat from '../../public/images/message.svg'
import axios from "axios";
import Link from "next/link";
const Contactform = ({main_title,content , live_chat_with_us , form_address}) => {
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
    <section className="pb-10 md:pb-[70px] lg:pb-[100px]  w-full">
    <div className="container mx-auto px-[15px]">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 mx-auto p-0 sm:p-4 md:p-6 lg:p-[50px]">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <h2>{main_title}</h2>
                  <p dangerouslySetInnerHTML={{ __html:content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                </div>
              <div className="flex justify-between gap-6 flex-col lg:flex-row">
                  <div className="flex flex-col w-full  lg:w-[60%]">
                   <form action="" className='w-full'>
                        <div className="input-group flex flex-wrap gap-4 ">
                               <div className="input-box w-full">
                                   <label htmlFor="Name" className='hidden'>Name</label>
                                   <input type="text" placeholder='Name' className='border w-full border-Teal outline-none px-6 py-4 placeholder:text-black-900'/>
                               </div>
                               <div className="input-box flex-auto sm:flex-1">
                                  <label htmlFor="Name" className='hidden'>Email</label>
                                  <input type="email" placeholder='Email' className='border w-full placeholder:text-black-900 border-Teal outline-none px-6 py-4'/>
                               </div>
                               <div className="input-box flex-auto sm:flex-1">
                                  <label htmlFor="Name" className='hidden'>Telefon</label>
                                    <input type="tel" name="" id="" placeholder='Telefon' className='border placeholder:text-black-900 w-full border-Teal outline-none px-6 py-4'/>
                               </div>
                               <div className="input-box w-full">
                                    <label htmlFor="Name" className='hidden'>Ihre Nachricht</label>
                                    <textarea name="" id="" placeholder='Ihre Nachricht'className='border placeholder:text-black-900 w-full border-Teal outline-none px-6 py-4 resize-none h-[110px]'></textarea>
                               </div>
                               <div className="input-box w-full">
                                   <p>Bitte wählen Sie aus, über welchen Weg ich Sie kontaktieren darf:</p>
                               </div>
                               <div className="input-box flex gap-2">
                                   <input type="checkbox" name="" id=""/>
                                   <label htmlFor="Email">Email</label>
                               </div>
                               <div className="input-box flex gap-2">
                                   <input type="checkbox" name="" id=""/>
                                   <label htmlFor="Telefon">Telefon</label>
                               </div>
                                   <p>Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. Die Daten werden nach abgeschlossener Bearbeitung Ihrer Anfrage gelöscht. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@heilpraktikerin-nicolli.de widerrufen. Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in unserer Datenschutzerklärung.</p>
                               <div className="input-box flex gap-2 w-full">
                                   <input type="checkbox" name="" id=""/>
                                   <label htmlFor="checkbox">Hiermit bestätige ich den Datenschutz gelesen zu haben.</label>
                               </div>
                               <p>Bitte beweise, dass du kein Spambot bist und wähle das Symbol Fahne aus.</p>
                              
                        </div>

                        <button type="submit" className='flex self-start justify-center mt-6 md:mt-8 lg:mt-12 bg-white border border-Teal text-Teal hover:bg-Teal hover:text-white font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in w-full ' aria-label="link-button" role="button">
                                       NACHRICHT SENDEN
                               </button>
                    </form>  
                  </div>
                  <div className="flex flex-col w-full  lg:w-[30%] gap-6 sm:gap-8 *:flex-shrink-0">
                    <div className="flex flex-col gap-6 [div&_a]:text-black-900 text-a font-medium">
                    <div className="flex gap-5 ">
                           <span>
                              <Image src={Phone} alt='phone-svg'/>
                           </span>
                           {
                             footer_phone_number &&  <Link href={ContactOptionData?.footer_phone_number.url} role='link' aria-label='address-link' >{ContactOptionData?.footer_phone_number.title}</Link>
                           }
                           
                      </div>
                      <div className="flex gap-5">
                           <span>
                              <Image src={Email} alt='email-svg'/>
                           </span>
                           {
                               footer_email_address &&  <Link href={ContactOptionData?.footer_email_address.url} role='link' aria-label='address-link'>{ContactOptionData?.footer_email_address.title}</Link>
                           }
                          
                      </div>
                      <div className="flex gap-5">
                           <span>
                              <Image src={Chat} alt='chat-svg'/>
                           </span>
                           {
                            live_chat_with_us &&
                            <Link href={live_chat_with_us.url} role='link' aria-label='address-link'>{live_chat_with_us.title}</Link>
                           }
                      </div>
                      <div className="flex gap-5">
                           <span>
                              <Image src={location} alt='location-svg'/>
                           </span>
                            <span>{form_address?.title}</span>
                      </div>
                    </div>
                      <div className="flex gap-4">
                        {
                           ContactOptionData?.footer_facebook_link &&  <Link href={ContactOptionData?.footer_facebook_link?.url} className='inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]' aria-label="image-button" role="link">
                           <Image src={facebook} alt='facebook'/>
                       </Link>
                        }
                         {
                                    ContactOptionData?.footer_twitter_link &&  <Link href={ContactOptionData?.footer_twitter_link?.url} className='inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]' aria-label="image-button" role="link">
                                    <Image src={Twitter} alt='Twitter'/>
                           </Link>
                         }
                         {
                             ContactOptionData?.footer_instagram_link && <Link href={ContactOptionData?.footer_instagram_link?.url} className='inline-flex w-8 h-8 items-center justify-center border border-Teal rounded-[3px]' aria-label="image-button" role="link">
                             <Image src={Instagram} alt='Instagram'/>
                         </Link>
                         }
                          
                      </div>
                  </div>
              </div>
        </div>
    </div>
    </section>
  )
}

export default Contactform