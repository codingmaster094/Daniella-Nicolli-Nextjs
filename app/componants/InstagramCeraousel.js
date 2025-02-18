"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ReactDOMServer from "react-dom/server";

const InstagramCarousel = ({ Instagrampost }) => {
  const carouselRef = useRef();
  return (
    <div className="instagram-carousel-container">
      <div ref={carouselRef} className="hover-sliders owl-carousel">
        {Instagrampost?.map((post) => (
          <div key={post.id} className="instagram-item">
            <Image
              src={post.media_url}
              alt={post.caption}
              width={480}
              height={701}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramCarousel;
