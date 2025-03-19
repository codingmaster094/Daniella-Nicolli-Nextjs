import Link from "next/link";
import React from "react";

const Categories = (props) => {
  const { title, description, BTN, bg_img } = props;
  console.log("bg_img", bg_img);
  return (
    <section
      className={`py-10 md:py-[70px] lg:py-[100px] bg-cover bg-bottom relative ${
        bg_img ? "" : "bg-Teal"
      }`}
      style={bg_img ? { backgroundImage: `url(${bg_img})` } : {}}
    >
      <div className="overlay-1 absolute w-full h-full top-0 left-0 z-0 bg-[rgba(0,0,0,0.3)]"></div>
      <div className="w-full container mx-auto px-[15px]">
        <div className="flex w-full max-w-[922px] flex-col text-white gap-8 mx-auto text-center relative">
          <div className="flex flex-col gap-6">
            <h2
              className="text-white"
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            ></h2>
            <p
              dangerouslySetInnerHTML={{
                __html: description
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            ></p>
          </div>
          {BTN?.title && (
            <Link
              href={BTN?.url}
              target={BTN?.target}
              className="flex self-center text-center border-[1.5px] border-solid border-transparent bg-white text-Teal hover:bg-teal-600 hover:text-white font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in hover:bg-transparent hover:border-white"
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
