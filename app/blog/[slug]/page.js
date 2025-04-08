"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useParams } from "next/navigation";
import dayjs from "dayjs";

const Categories = dynamic(() => import("../../componants/Categories"), {
  ssr: false,
});

const Page = () => {
  const [blogData, setBlogData] = useState([]);
  const [BlogContent, setBlogContent] = useState([]);
  const params = useParams();
  const slug = params?.slug;
  const fetchBlog = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_POST_BASE_URL}/posts?slug=${slug}`
      );
      setBlogData(response.data);
      setBlogContent(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  return (
    <>
      <section>
        <div
          className="blog-banner w-full lg:h-[450px] h-auto lg:py-[180px] md:py-[150px] py-[100px] relative bg-cover bg-center flex justify-start items-center"
          style={{
            backgroundImage: blogData?.featured_image_url
              ? `url(${blogData.featured_image_url})`
              : "none",
          }}
        >
          {blogData?.featured_image_url && (
            <>
              <div className="px-[15px] 2xl:ps-[148px]">
                <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:max-w-[845px]">
                  <h1>{blogData?.title}</h1>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      {blogData?.ratgeber_single_wichtigste_content && (
        <section className="py-[30px] md:py-[50px] lg:py-[50px]">
          <div className="container px-[15px] mx-auto">
            <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
              <div className="flex justify-between gap-4 flex-wrap items-center">
                <p className="text-body">
                  <span>{dayjs(BlogContent?.date).format("DD.MM.YYYY")}</span> |
                  <span>
                    {" "}
                    ZULETZT AKTUALISIERT{" "}
                    {dayjs(BlogContent?.modified).format("DD.MM.YYYY")}
                  </span>
                </p>
                <div className="flex border border-Border w-auto lg:w-[35%] justify-between items-center">
                  <input
                    type="search"
                    placeholder="Wonach suchen Sie?"
                    className="border-none outline-none p-2 w-full placeholder:text-black-900"
                  />
                  <button
                    className="flex self-start flex-shrink-0 text-center bg-Teal text-white hover:bg-teal-600 font-normal font-secondary-font px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                    aria-label="link-button"
                    role="button"
                  >
                    Job finden
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-8">
                <h2
                  className="text-a  sm:text-h3"
                  dangerouslySetInnerHTML={{
                    __html: blogData?.ratgeber_single_wichtigste_main_title,
                  }}
                ></h2>
                <ul
                  dangerouslySetInnerHTML={{
                    __html:
                      blogData?.ratgeber_single_wichtigste_content?.replace(
                        /<\/?ul[^>]*>/g,
                        ""
                      ),
                  }}
                  className="menu flex flex-col gap-3 [&_li]:font-secondary-font [&_li]:text-a [&_li]:font-normal"
                ></ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {blogData?.home_anfrage_main_title && (
        <Categories
          title={blogData?.home_anfrage_main_title}
          description={blogData?.home_anfrage_content}
          BTN={blogData?.home_anfrage_button}
          bg_img={blogData?.home_anfrage_image}
        />
      )}

      {blogData?.ratgeber_single_wichtigste_2_main_title && (
        <section className="py-10  lg:py-[80px]">
          <div className="container px-[15px] mx-auto">
            <div className="flex flex-col gap-6 ">
              <div className="flex relative pb-6 lg:pb-[25px] after:absolute after:bottom-0 after:w-20 after:left-0 after:h-[1px] after:bg-black-800">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: blogData?.ratgeber_single_wichtigste_2_main_title,
                  }}
                ></h2>
              </div>
              <ul
                className="flex flex-col gap-3 text-a font-medium [ul&_li]:list-disc [ul&_li]:marker:text-Teal ps-4"
                dangerouslySetInnerHTML={{
                  __html:
                    blogData?.ratgeber_single_wichtigste_content_two?.replace(
                      /<\/?ul[^>]*>/g,
                      ""
                    ),
                }}
              ></ul>
            </div>
          </div>
        </section>
      )}

      <section className="pb-10 md:pb-[70px] lg:pb-[100px]">
        <div className="container px-[15px] mx-auto">
          <div
            className="blogtemplate border border-Teal p-5 md:p-10 lg:p-20"
            dangerouslySetInnerHTML={{ __html: BlogContent?.content }}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Page;
