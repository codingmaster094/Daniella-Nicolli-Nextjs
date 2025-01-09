"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image' 
import LocationSvg from '../../public/images/location.svg'
import PhoneSvg from '../../public/images/phone.svg'
import FaxSvg from '../../public/images/fax.svg'
import MailSvg from '../../public/images/mail.svg'
import FacebookSvg from '../../public/images/face-book.svg'
import InstagramSvg from '../../public/images/Whiteinstgram.svg'
import GVPimg from '../../public/images/Gvp-logo.png'
import YellowGVP from '../../public/images/gvp-yellow-logo.png'
import Link from 'next/link'
import axios from "axios";
const Footer = () => {
  const [FooterData, setFooterData] = useState(null);
  const fetchFooterData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/acf-options"
      );
      setFooterData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  return (
    <footer className='bg-salte w-full'>
        <div className="container mx-auto px-[15px] ">
                 <div className="flex  gap-8 flex-wrap lg:justify-between flex-col md:flex-row py-8 md:py-20">
                      <div className="flex flex-col w-auto    2xl:w-[25%] gap-5 sm:gap-[34px]">
                        <h4>{FooterData?.kontakt_label}</h4>
                        <ul className='[&_li>img]:mt-4'>
                          <li>
                              <Image src={LocationSvg} alt="location-svg"/>
                              <div dangerouslySetInnerHTML={{ __html: FooterData?.footer_address}}/>
                          </li>
                          <li>
                            <span>
                                <Image src={PhoneSvg} alt="phone-svg"/>
                            </span>
                            {
                              FooterData?.footer_phone_number && 
                                <Link href={FooterData?.footer_phone_number?.url}>{FooterData?.footer_phone_number?.title}</Link>
                            }
                          </li>
                          <li>
                            <span>
                                <Image src={FaxSvg} alt="fax-svg"/>
                            </span>
                            {
                              FooterData?.footer_fax_number && 
                                <Link href={FooterData?.footer_fax_number?.url} aria-label="contact-link" role="link">{FooterData?.footer_fax_number?.title}</Link>
                            }
                          </li>
                          <li>
                            <span>
                                <Image src={MailSvg} alt="MailSvg"/>
                            </span>
                            {
                              FooterData?.footer_email_address && 
                                <Link href={FooterData?.footer_email_address?.url} aria-label="email-link" role="link">{FooterData?.footer_email_address.title}</Link>
                            }
                          </li>
                        </ul>   
                        <ul className="flex flex-row [&_li]:w-[38px] [&_li]:h-[38px] [&_li]:bg-Teal [&_li]:rounded-full [&_li]:items-center [&_li]:justify-center [&_li]:p-2">
                          <li>
                          {
                            FooterData?.footer_facebook_link && 
                            <Link href={FooterData?.footer_facebook_link?.url} aria-label="facebook-link" role="link">
                                <Image src={FacebookSvg} alt='facebook-svg'></Image>
                            </Link>
                          }
                          </li>
                          <li>
                          {
                            FooterData?.footer_instagram_link && 
                            <Link href={FooterData?.footer_instagram_link?.url} aria-label="Instagram-link" role="link">
                                <Image src={InstagramSvg} alt='instgram-svg'></Image>
                            </Link>
                          }
                          </li>
                        </ul>    
                      </div>
                       <div className="flex flex-col w-auto    2xl:w-[16.8%] gap-5 sm:gap-[34px]">
                        <h4>{FooterData?.footer_sprechzeiten_label}</h4>
                        <ul className='[&_li]:gap:10 [&_li]:gap-0 sm:[&_li]:justify-between [&_li]:w-auto sm:[&_li]:w-[220px]'
                        dangerouslySetInnerHTML={{ __html: FooterData?.footer_business_hours?.replace(/<\/?ul[^>]*>/g, '')}}
                        >
                        </ul>   
                      </div>
                      <div className="flex flex-col w-auto   2xl:w-[16.8%] gap-5 sm:gap-[34px]">
                        <h4>{FooterData?.footer_navigation_label}</h4>
                        <ul>
                          <li>
                            <Link href="/" aria-label="footer-link" role="link">Start</Link>
                          </li>
                          <li>
                            <Link href="/Aesthetics" aria-label="footer-link" role="link">Ästhetik</Link>
                          </li>
                          <li>
                          <Link href="/Naturheilmedizin" aria-label="footer-link" role="link">Naturheilmedizin</Link>
                          </li>
                          <li>
                          <Link href="/Blog" aria-label="footer-link" role="link">Blog</Link>
                          </li>
                          <li>
                          <Link href="/Ubermich" aria-label="footer-link" role="link">Uber mich</Link>
                          </li>
                          <li>
                             <Link href="/Contact" aria-label="footer-link" role="link">Kontakt</Link>
                          </li>
                        </ul>   
                      </div>
                      <div className="flex flex-col   w-auto    2xl:w-[16.8%] gap-5 sm:gap-[34px]">
                        <h4>{FooterData?.footer_rechtliches_label}</h4>
                        <ul>
                          <li>
                            <Link href="/impressum" aria-label="footer-link" role="link">Impressum </Link>
                          </li>
                          <li>
                            <Link href="/datenschutzerklarung" aria-label="footer-link" role="link">Datenschutzerklärung</Link>
                          </li>
                        </ul>   
                      </div>
                      <div className="flex md:flex-col md:w-[47%]  lg:w-auto 2xl:w-[16%] gap-4 flex-wrap">
                      {
                        FooterData && 
                        FooterData?.footer_all_logos?.map((val,index) => (
                         <div className="flex w-[150px] h-[150px] overflow-hidden" key={index}>
                          {
                            val.footer_all_logo_url && 
                         <Link href={val.footer_all_logo_url?.url} aria-label="image-link" role="link">
                              <Image src={val.footer_all_logo} width={150} height={150} alt='GVPimg' className='object-cover rounded-[10px]'/>
                         </Link>
                          }
                         </div>
                        ))
                      }
                      </div>
                 </div>
            </div>
            <div className="flex  justify-center bg-Teal p-[15px] text-white" dangerouslySetInnerHTML={{ __html: FooterData?.footer_copyright_content}}>
                     
            </div>
    </footer>
  )
}

export default Footer