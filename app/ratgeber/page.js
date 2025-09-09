import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import PostGet from "../until/PostGet";
import Alldata from "../until/AllDatafetch";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});


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
  
     if (!RatgeberData || !RatgeberData) {
       return <div>No data available.</div>;
     }


  return (
    <>
        {
  schemaJSON && schemaJSON !== "[]" && (
    <SchemaInjector schemaJSON={schemaJSON} />
  )
}
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
  const metadata = await SEODATA("/ratgeber");
  const seo = metadata?.seo?.computed || {};

  const title =
    seo.title ||
    "ratgeber";

  const description =
    seo.description ||
    "ratgeber";

  const canonical =
    seo.canonical && seo.canonical !== ""
      ? seo.canonical
      : "https://www.heilpraktikerin-nicolli.de/ratgeber";

  const robots =
    seo.robots && (seo.robots.index || seo.robots.follow)
      ? `${seo.robots.index ? "index" : "noindex"},${
          seo.robots.follow ? "follow" : "nofollow"
        }`
      : "noindex,nofollow";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      title: seo.social?.facebook?.title || title,
      description: seo.social?.facebook?.description || description,
      url: canonical,
      images: seo.social?.facebook?.image
        ? [seo.social.facebook.image]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.social?.twitter?.title || title,
      description: seo.social?.twitter?.description || description,
      images: seo.social?.twitter?.image
        ? [seo.social.twitter.image]
        : undefined,
    },
  };
}