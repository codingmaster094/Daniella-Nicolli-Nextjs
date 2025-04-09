import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import PostGet from "../until/PostGet";
import Alldata from "../until/AllDatafetch";


const Page = async () => {
  let BlogData ;
  let RatgeberData ;

  try {
       BlogData = await Alldata("/blog");
       RatgeberData = await PostGet("/posts");
     } catch (error) {
       if (!BlogData || !RatgeberData) {
         return <div>Error loading data.</div>;
       }
     }
  
     if (!RatgeberData || !RatgeberData) {
       return <div>No data available.</div>;
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
