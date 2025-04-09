import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import Alldata from "../until/AllDatafetch";
import PostGet from "../until/PostGet";


const Page = async () => {
  let BlogData 
  let RatgeberData 
try {
  BlogData = await Alldata("/blog");
} catch (error) {
  console.error("Error fetching data:", error);
  return <div>Error loading data.</div>; // Fallback UI
}

if (!BlogData) {
  return <div>No data available.</div>; // Fallback UI
}

try {
  RatgeberData = await PostGet("/posts");
} catch (error) {
  console.error("Error fetching data:", error);
  return <div>Error loading data.</div>; // Fallback UI
}

if (!RatgeberData) {
  return <div>No data available.</div>; // Fallback UI
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
