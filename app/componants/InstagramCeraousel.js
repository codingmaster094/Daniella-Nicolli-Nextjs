"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ReactDOMServer from "react-dom/server";

const InstagramCarousel = ({ Instagrampost }) => {
  const carouselRef = useRef();

  useEffect(() => {
    if (typeof window !== "undefined" && Instagrampost.length > 0) {
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
            window.$(carouselRef.current).owlCarousel({
              loop: true,
              nav: true,
              dots: false,
              items: 4,
              navText: [
                ReactDOMServer.renderToStaticMarkup(
                  <Image src="/prev-btn.png" alt="Previous" width={20} height={20} />
                ),
                ReactDOMServer.renderToStaticMarkup(
                  <Image src="/next-btn.png" alt="Next" width={20} height={20} />
                ),
              ],
              responsive: {
                0: { items: 1 },
                520: { items: 2 },
                991: { items: 3 },
                1280: { items: 4 },
              },
            });
          };
          document.body.appendChild(owlCarouselJS);
        };
        document.body.appendChild(jQueryScript);
      };
      loadOwlCarousel();
    }
  }, [Instagrampost]);

  return (
    <div className="instagram-carousel-container">
      <div ref={carouselRef} className="hover-sliders owl-carousel">
        {Instagrampost?.map((post) => (
          <div key={post.id} className="instagram-item">
            <Image src={post.media_url} alt={post.caption} width={480} height={701} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramCarousel;
