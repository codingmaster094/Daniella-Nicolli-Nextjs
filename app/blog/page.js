import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import PostGet from "../until/PostGet";
import Alldata from "../until/AllDatafetch";
import MetaDataAPIS from "../until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));

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

     const metadata = await MetaDataAPIS("/blog");

     const schemaMatch = metadata.head.match(
       /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
     );
     const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
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
  let metadata = await MetaDataAPIS("/blog");

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );
  const canonicalMatch = metadata.head.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const canonical = canonicalMatch
    ? canonicalMatch[1]
    : "https://daniella.blog-s.de/blog";
  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}