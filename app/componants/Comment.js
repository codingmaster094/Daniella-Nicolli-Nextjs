"use client";
import Image from "next/image";
import React from "react";
import CommitImage from "../../public/images/comment-img.png";

const Comment = ({ main_title, content }) => {
  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
          <div className="flex flex-col gap-6">
            <h2>{main_title}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: content
                  ?.replace(/<p>/g, "")
                  .replace(/<\/p>/g, "")
                  .replace(/&amp;/g, "&"),
              }}
            ></p>
          </div>
          <div className="flex w-full shadow-shadow">
            <Image
              src={CommitImage}
              alt="Commit Image"
              className="w-full"
              layout="responsive"
              sizes="(max-width: 768px) 100vw, 
                     (max-width: 1200px) 50vw, 
                     33vw"
              // Remove priority to allow lazy loading
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
