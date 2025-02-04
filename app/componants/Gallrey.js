"use client";
import { useEffect, useRef } from "react";
import Image from 'next/image';
import React from 'react'
import PreviousBTN from "../../public/images/PreviousBTN.png";
import NextBTN from "../../public/images/NextBTN.png";
import ReactDOMServer from "react-dom/server";

const Gallrey = ({main_title , gallery_images}) => {
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
               jQuery(".hover-sliders").owlCarousel({
                loop: true,
                nav: true,
                dots:false,
                items: 4,
                navText: [
                             ReactDOMServer.renderToStaticMarkup(
                               <Image src={PreviousBTN} alt="Previous" width={20} height={20} />
                          ),
                             ReactDOMServer.renderToStaticMarkup(
                               <Image src={NextBTN} alt="Next" width={20} height={20} />
                            ),
                           ],
                responsive: {
                    0: {
                        items: 1
                    },
                    520: {
                        items: 2,
                    },
                    991: {
                        items: 3,
                    },
                    1280: {
                    
                        items: 4
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
      <section>
         <div className="flex flex-col gap-6 md:gap-11 lg:gap-16">
                <div className="flex justify-center">
                    <h2 className="text-h3 lg:text-h2">
                    {main_title}
                    </h2>
                </div>
                <div
                    className="owl-carousel hover-sliders gallrey relative"
                    ref={carouselRef}
                >
                    {gallery_images &&
                     gallery_images?.map((image, index) => (
                    <div key={index} className="items" >
                        <div className="flex h-[500px]  lg:h-[700px]">
                        <Image
                        src={image.url}
                        alt={image.title}
                        width={image.width}
                        height={image.height}
                        className="object-cover c  w-full h-full" 
                        />
                        </div>
                    </div>
                    ))}
                </div>
         </div>
      </section>
    );
}

export default Gallrey