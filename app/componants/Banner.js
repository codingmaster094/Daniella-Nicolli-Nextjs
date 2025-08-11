"use client";
import Image from "next/image";
import Link from "next/link";

const BannerCarousel = ({ title, img, content, BTN }) => {

  return (
    <section className="relative w-screen lg:h-[75vh] h-full ">
      <div className="Banner relative w-full h-full">
        <div className="Banner-sliders relative overflow-hidden w-full h-full">
          <div className="item relative w-full h-full">
            <div className="lg:bg-banner bg-banner-img bg-cover w-full relative lg:flex-row flex-col">
              <Image
                src={img}
                alt="Hero banner image"
                role="img"
                fill
                sizes="100vw" // ensures responsive optimal sizes
                quality={85} // slightly higher for hero sharpness
                priority // preloads automatically in Next.js
                fetchPriority="high" // hint for browser
                // placeholder="blur" // CLS-safe placeholder
                // blurDataURL={blurImg} // low-quality preview
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 10%"
                }}
                className="!relative lg:!absolute top-0 left-0 w-full h-full"
/>

              <div className="flex flex-col bg-Bgwhite my-[15px] p-6 lg:p-10 gap-4 lg:gap-8 w-full lg:w-[845px] relative z-10">
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
                <ul
                  className="menu list-g-disc li"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></ul>
                {BTN && (
                  <Link
                  
                    href={BTN?.url}
                    target={BTN?.target}
                    className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                    aria-label={BTN?.title || "button link"}
                  >
                    {BTN?.title}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;


