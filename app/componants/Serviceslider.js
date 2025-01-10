"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import Image from 'next/image';
const Serviceslider = ({main_title , all_ablauf}) => {
    const carouselRef = useRef();
          useEffect(() => {
              if (typeof window !== "undefined") {
                const loadOwlCarousel = async () => {
                    const jQueryScript = document.createElement("script");
                    jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
                    jQueryScript.onload = () => {
                    const owlCarouselCSS = document.createElement("link");
                    owlCarouselCSS.rel = "stylesheet";
                    owlCarouselCSS.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
                    document.head.appendChild(owlCarouselCSS);
                    const owlCarouselJS = document.createElement("script");
                    owlCarouselJS.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
                    owlCarouselJS.onload = () => {
                      window.$ = window.jQuery;
                     jQuery(".Serviceslider").owlCarousel({
                      loop: true,
                      margin:20,
                      nav: true,
                      dots: true,
                      items: 4,
                      responsive: {
                          0: {
                              items: 1
                          },
                          570: {
                              items: 2,
                              nav: false
                          },
                          800: {
                              items: 2,
                              nav: false
                          },
                          1000:{
                              items:3,
                              nav: false
                          },
                          1600:{
                            items:4,
                            
                          }
                      } 
                      }); 
                      const buttons = document.querySelectorAll('.owl-dot');
                      buttons.forEach((button, index) => {
                        button.setAttribute('aria-label', `Slide ${index + 1}`);
                      });
                    };
                      document.body.appendChild(owlCarouselJS);
                    };
                      document.body.appendChild(jQueryScript);
                };
                loadOwlCarousel();
              }
            }, []);
  return (
     <>
     <section className="py-10  md:py-[70px] lg:py-[100px]">
         <div className="w-full max-w-[1470px] px-[15px] mx-auto">
           <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 ">
             <div className="flex justify-center">
                <h2 className='text-h3 lg:text-h2'>{main_title}</h2>
             </div>
             <div className="owl-carousel Serviceslider relative" ref={carouselRef}>
             {
               all_ablauf?.value?.map((val,index) => (
                <div className="items flex justify-center" key={index}>
                    <div className="flex flex-col gap-4 w-[250px]">
                         <div className="flex gap-6 sm:gap-8 border border-Teal rounded-full flex-col   w-[250px] h-[250px] items-center justify-center">
                              <Image src={val.home_all_ablauf_image} width={64} height={64} alt="ServiceImg1" className='!w-14 h-14'/>
                              <h3 className='text-a md:text-h4'>{val.home_all_ablauf_title}</h3>
                         </div>
                         <div className="flex">
                            <p dangerouslySetInnerHTML={{ __html: val.home_all_ablauf_content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                         </div>
                    </div>
               </div>
               ))
             }
             </div>
           </div>
       </div>
     </section>
     </>
   );
}

export default Serviceslider