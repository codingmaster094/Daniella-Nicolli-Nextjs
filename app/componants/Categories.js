import Link from "next/link";
import React from "react";

const Categories = (props) => {
  const { title, description, BTN, bg_img } = props;
  return (
    <section
      className="py-10 md:py-[70px] lg:py-[100px] bg-Category-bg bg-cover  bg-bottom"
      style={{ backgroundImage: `url(${bg_img})` }}
    >
      <div className="w-full container mx-auto px-[15px]">
        <div className="flex w-full max-w-[922px] flex-col text-white gap-8 mx-auto text-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-white">{title}</h2>
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
              className="flex self-center text-center bg-white text-Teal hover:bg-teal-600 hover:text-white font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
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
