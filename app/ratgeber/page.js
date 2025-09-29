import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import PostGet from "../until/PostGet";
import Alldata from "../until/AllDatafetch";
import SEODATA from "../until/SEO_Data";
import generatePageMetadata from "../until/generatePageMetadata";
import SEO_schema from "../componants/SEO_schema";


const Page = async () => {
  let BlogData ;
  let RatgeberData ;
  let schemaJSON;
  try {
    BlogData = await Alldata("/ratgeber");
    RatgeberData = await PostGet("/ratgeber");
     const metadata = await SEODATA("/ratgeber");
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
  } catch (error) {
    if (!BlogData || !RatgeberData) {
      return <div>Error loading data.</div>;
    }
  }
  
     if (!RatgeberData || !RatgeberData || !schemaJSON) {
       return <div>No data available.</div>;
     }


  return (
    <>

    <SEO_schema
        schemaJSON={schemaJSON}
      />

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

export async function generateMetadata() {
  return generatePageMetadata("/ratgeber", {
    title: "ratgeber",
    description: "ratgeber",
  });
}
