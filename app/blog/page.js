'use client'
import React, { useEffect, useState } from 'react'
import Blog from '../componants/Blog';
import axios from 'axios';

const page = () => {
  const [BlogData, setBlogData] = useState(null);
  const [RatgeberData, setRatgeberData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/blog"
      );
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  const fetchRatgeberData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/wp/v2/posts"
      );
      console.log('response', response.data)
      setRatgeberData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };


  useEffect(() => {
    fetchBlogData();
    fetchRatgeberData();
  }, []);

      return (
        <>
         {/* {BlogData && (<BannerCarousel slidesData={BlogData?.hero_slider} />)} */}
         {
      BlogData && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: BlogData?.hero_slider_image?.value
                      ? `url(${BlogData?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{BlogData?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: BlogData?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {BlogData?.hero_slider_button && (
                        <Link
                          href={BlogData?.hero_slider_button?.value?.url}
                          target={BlogData?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={BlogData?.hero_slider_button?.value?.title || "button link"}
                        >
                          {BlogData?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    } 
         <Blog blogsData={RatgeberData} />

    </>
      )
    }
    export default page
