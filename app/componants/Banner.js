"use client";
import Image from "next/image";
import Link from "next/link";

const BannerCarousel = ({ title, img, content, BTN }) => {
  return (
    <section>
      <div className={`Banner`}>
        <div className="Banner-sliders relative overflow-hidden">
          <div className="item">
            <div className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]">
              <Image
                src={img}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                alt="hero banner image"
                role="img"
                fill
                priority={true}
              />
              <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                <h1
                  dangerouslySetInnerHTML={{
                    __html: title,
                  }}
                ></h1>
                <ul
                  className="menu list-g-disc li"
                  dangerouslySetInnerHTML={{
                    __html: content,
                  }}
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
