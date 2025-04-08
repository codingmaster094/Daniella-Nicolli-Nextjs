import React from "react";
import axios from "axios";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 


const Page = async () => {
  let BlogData = null;
  let RatgeberData = null;

  try {
    const blogResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/blog`
    );
    BlogData = blogResponse.data;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  try {
    const ratgeberResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_POST_BASE_URL}/posts`
    );
    RatgeberData = ratgeberResponse.data;
  } catch (error) {
    console.error("Error fetching Ratgeber data:", error);
  }

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

export default Page;
