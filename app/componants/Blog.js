"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Arrowbtn from "../../public/images/arrow-btn.svg";
import Link from "next/link";

const Blog = ({ blogsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredBlogs(blogsData); // Reset to original data if search is empty
      } else {
        const filtered = blogsData.filter((val) =>
          val?.title?.rendered.toLowerCase().includes(searchQuery.toLowerCase()) 
        );
        setFilteredBlogs(filtered);
      }
    }, 300); // Debounce time (300ms)

    return () => clearTimeout(timeoutId); // Cleanup on component unmount or when searchQuery changes
  }, [searchQuery, blogsData]);

  return (
    <section className="py-10 md:py-[70px] lg:py-[100px]">
      <div className="w-full max-w-[1550px] px-[15px] mx-auto">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 lg:gap-16">
          <div className="flex justify-between gap-4 flex-wrap items-center">
            <h2 className="text-h3 lg:text-h2">Die Artikel</h2>
            <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center">
              <input
                type="search"
                placeholder="Wonach suchen Sie?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-none outline-none p-2 w-full placeholder-text-black-600"
              />
              <a
                className="flex self-start flex-shrink-0 text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                aria-label="link-button" role="link"
              >
                Job finden
              </a>
            </div>
          </div>
          <div className="flex gap-12 2xl:gap-16 pt-6 xl:pt-[50px] flex-wrap">
            {filteredBlogs?.map((val, index) => (
              <div
                key={index}
                className="flex flex-col w-full md:w-[46%] lg:w-[30%] border border-Teal ps-6 pe-6 pb-6 xl:ps-12 xl:pe-12 xl:pb-12 gap-4 sm:gap-6 md:gap-8"
              >
                <div className="flex -mt-6 justify-center xl:-mt-[50px]">
                 
                  {
                     val?.featured_image_url && <Link href={`/Blog/${val.id}`} aria-label="image-button" role="link" className="flex">
                     <Image
                       src={val?.featured_image_url}
                       width={358}
                       height={239}
                       alt="BlogImage"
                       className="w-full object-cover"
                     />
                   </Link>
                  }

                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    {
                        val?.title?.rendered &&  <Link href={`/Blog/${val.id}`} aria-label="link-title" role="link">
                        <h3 className="text-a md:text-h4 text-black-900 hover:text-Teal !font-normal">
                          {val?.title?.rendered}
                        </h3>
                      </Link>
                    }
 
                        <Link
                        href={`/Blog/${val.id}`}
                        aria-label="arrow-btn" role="link"
                        className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] flex flex-shrink-0"
                      >
                        <span>
                          <Image src={Arrowbtn} alt="arrow-btn" />
                        </span>
                      </Link>
                
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: val?.excerpt?.rendered
                        .replace(/<p>/g, "")
                        .replace(/<\/p>/g, "")
                        .replace(/&amp;/g, "&"),
                    }}
                  ></p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/" className="flex self-center text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in" aria-label="link-title" role="link">
            MEHR ERFAHREN
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
