"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const Blog = dynamic(() => import("../componants/Blog"), { ssr: false });
const BannerCarousel = dynamic(() => import("../componants/Banner"), {
  ssr: false,
});

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
      <BannerCarousel
        title={BlogData?.hero_slider_main_title?.value}
        img={BlogData?.hero_slider_image?.value}
        content={BlogData?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={BlogData?.hero_slider_button?.value}
      />
      <Blog
        title={BlogData?.ratgeber_main_title?.value}
        BTN={BlogData?.ratgeber_mehr_erfahren_button?.value}
        blogsData={RatgeberData}
      />
    </>
  );
};
export default page;
