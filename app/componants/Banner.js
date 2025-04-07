"use client";
import Image from "next/image";
import Link from "next/link";

const BannerCarousel = ({ title, img, content, BTN, loading }) => {
  return (
    <section className="relative w-screen md:h-screen h-[80vh]">
      <div className="Banner relative w-full h-full">
        <div className="Banner-sliders relative overflow-hidden w-full h-full">
          <div className="item relative w-full h-full">
              {loading ? (
                <div className="ph-item w-full"></div>
              ) : (
            <div className="bg-banner bg-banner-img bg-cover w-full h-full">
                <>
                  <Image
                    src={img}
                    className="absolute top-0 left-0 w-screen h-full object-cover"
                    alt="hero banner image"
                    role="img"
                    width={1920}
                    height={1080}
                    priority={true}
                    sizes="100vw"
                  />
                  <div className="flex flex-col bg-Bgwhite p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] relative z-10">
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
                </>
            </div>
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;
