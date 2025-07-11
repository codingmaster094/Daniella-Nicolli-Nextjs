import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = (props) => {
  const { title, description, BTN, bg_img, container } = props;

  return (
    <section
      className={`py-10 md:py-[40px]  ${
        !container ? "lg:py-[100px]" : "rounded-xl"
      } bg-cover bg-center bg-no-repeat relative ${
        bg_img ? "min-h-[450px]" : "bg-Teal h-auto"
      }`}
    >
      {/* Background Image */}
      {bg_img && (
        <Image
          src={bg_img}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          alt="category image"
          role="img"
          width={1920}
          height={420}
          priority
        />
      )}

      {/* Overlay */}
      {bg_img && (
        <div className="overlay-1 absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.3)]"></div>
      )}

      <div className={`w-full container mx-auto px-[15px]`}>
        <div
          className={`${
            container ? "max-w-full" : "max-w-[922px]"
          } w-full container mx-auto px-[15px] flex  flex-col text-white gap-8  text-center relative`}
        >
          <div className="flex flex-col gap-6">
            <h2
              className={`text-white text-center`}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h2>

            <p
              className={`text-center`}
              dangerouslySetInnerHTML={{
                __html: description
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            ></p>
          </div>

          {/* Button */}
          {BTN?.title && (
            <Link
              href={BTN?.url}
              target={BTN?.target}
              className={` flex self-center text-center border-[1.5px] border-solid border-transparent bg-white text-Teal hover:bg-teal-600 hover:text-white font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in hover:bg-transparent hover:border-white`}
              aria-label="link-button"
              role="link"
            >
              {BTN?.title}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;
