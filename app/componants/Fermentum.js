"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import Image from 'next/image';
const Fermentum = ({main_title , all_vorteile}) => {
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
                 jQuery(".slider").owlCarousel({
                  loop: true,
                  margin: 30,
                  nav: true,
                  dots: true,
                  items: 4,
                  navText: [
                            '<img src="/images/Vector(4).png" alt="Previous" />',
                            '<img src="/images/vector5.png" alt="Next" />'
                      ],
                  responsive: {
                      0: {
                          items: 1
                      },
                      400: {
                          items: 1
                          
                      },
                      800: {
                          items: 2,
                          nav:false
                      },
                      1400: {
                        items:3,
                          nav:false
                      },
                      1600:{
                          items:3
                      }
                  } 
                  }); 
                  const buttons1 = document.querySelectorAll('.owl-prev');
                  const buttons2 = document.querySelectorAll('.owl-next');
                  buttons1.forEach((button, index) => {
                    button.setAttribute('aria-label', `Slide ${index + 1}`);
                  });
                  buttons2.forEach((button, index) => {
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
     <section className="py-10 pt-0 md:py-[70px] md:pt-0 lg:py-[100px]">
         <div className="w-full max-w-[1550px] px-[15px] mx-auto">
           <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 ">
             <div className="flex justify-center">
                <h2 className='sm:text-h3 lg:text-h2'>{main_title}</h2>
             </div>
             <div className="owl-carousel slider relative" ref={carouselRef}>
             {all_vorteile?.value?.map((service, index) => (
               <div className=" items p-[1px]" key={index}>
                    <div className="flex flex-col  p-6 xl:p-12 gap-4 border border-Teal">
                         <div className="flex gap-6 items-center">
                              <Image src={service.home_all_vorteile_icon} width={56} height={56} alt="ServiceSvg1" className='!w-12 h-12'/>
                              <h3 className='text-a md:text-h4  text-Teal'>{service.home_all_vorteile_title}</h3>
                         </div>
                         <div className="flex">
                            <p dangerouslySetInnerHTML={{ __html: service.home_all_vorteile_content?.replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/&amp;/g, '&')}}></p>
                         </div>
                    </div>
               </div>
             ))}
             </div>
           </div>
       </div>
     </section>
     </>
   );
}
export default Fermentum