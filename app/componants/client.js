"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const ClientCarousel = ({main_title , section_all_partners}) => {
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
    
              jQuery(".Client-sliders").owlCarousel({
                loop: true,
                margin: 12,
                nav: false,
                dots: true,
                items: 6,
                autoplay: true,
                autoplaySpeed: 1500,
                autoplayHoverPause: false,
                navText: [
                  '<img src="/images/Vector(4).png" alt="Previous" />',
                  '<img src="/images/vector5.png" alt="Next" />'
            ],
                responsive: {
                  0: { items: 1 },
                  400: { items: 2 },
                  600: { items: 3 },
                  800: { items: 4 },
                  1350: { items: 6 },
                },
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
    <section className="py-10 md:py-[70px] lg:py-[100px]">
        <div className="container px-[15px] mx-auto">
        <div className="flex flex-col gap-6 md:gap-11 lg:gap-16 text-center">
           <h2>{main_title  && main_title}</h2>
        <div className="owl-carousel Client-sliders relative" ref={carouselRef}>  
        {
          section_all_partners?.value &&
          section_all_partners?.value.map((val,index)=>{
            return (
              <div className="item" key={index}>
                <div className="client-logo text-center flex items-center justify-center sm:justify-between">
                <Link href={val.partners_section_all_partners_website_link?.url} target={val.partners_section_all_partners_website_link?.target} aria-label={val.partners_section_all_partners_website_link?.title} className="block">
                  <Image src={val.partners_section_all_partners_logos} alt={`client-logo${index + 1}`} className="!w-auto" height={85} width={157}/>
                </Link>
                </div>
              </div>
            )
          })
        }
        </div>
        </div>
      </div>
    </section>
    </>
 );
}; 

export default ClientCarousel;