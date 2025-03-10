"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Arrowbtn from "../../public/images/arrow-btn.svg";
import Link from "next/link";

const Blog = ({ blogsData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsData || []);
  const [displayedBlogsCount, setDisplayedBlogsCount] = useState(3);

  useEffect(() => {
    setFilteredBlogs(blogsData || []);
  }, [blogsData]);

  // Function to handle search when the button is clicked
  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogsData); // Show all blogs if search is empty
    } else {
      const filtered = blogsData.filter((val) =>
        val?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBlogs(filtered);
    }
  };

  // Trigger search on pressing Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
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
                onKeyDown={handleKeyDown} // Trigger search on Enter
                className="border-none outline-none p-2 w-full placeholder-text-black-600"
              />
              <button
                onClick={handleSearch}
                className="flex self-start flex-shrink-0 text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                aria-label="search-button"
                role="button"
              >
                Job finden
              </button>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-8 lg:gap-8 2xl:gap-16 flex-wrap">
            {filteredBlogs?.slice(0, displayedBlogsCount)?.map((val, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col mt-6 xl:mt-[50px] w-full xm:w-[47%] lg:w-[30%] border border-Teal ps-6 pe-6 pb-6 xl:ps-12 xl:pe-12 xl:pb-12 gap-4 sm:gap-6 md:gap-8"
                >
                  <div className="flex -mt-6 justify-center xl:-mt-[50px] h-full sm:h-[360px]">
                    {val?.featured_image_url && (
                      <Link
                        href={`/blog/${val.slug}`}
                        aria-label="image-button"
                        role="link"
                        className="flex w-full"
                      >
                        <Image
                          src={val?.featured_image_url}
                          width={358}
                          height={239}
                          alt="BlogImage"
                          className="w-full object-cover object-right"
                        />
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      {val?.title && (
                        <Link
                          href={`/blog/${val.slug}`}
                          aria-label="link-title"
                          role="link"
                        >
                          <h3 className="text-a md:text-h4 text-black-900 hover:text-Teal !font-normal">
                            {val?.title}
                          </h3>
                        </Link>
                      )}
                      <Link
                        href={`/blog/${val.slug}`}
                        aria-label="arrow-btn"
                        role="link"
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
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {filteredBlogs?.length > displayedBlogsCount && (
            <button
              onClick={() => setDisplayedBlogsCount((prev) => prev + 3)}
              className="flex self-center text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
              aria-label="load-more-button"
              role="button"
            >
              MEHR ERFAHREN
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
