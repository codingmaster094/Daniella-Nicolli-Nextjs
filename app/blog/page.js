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
let schemaJSON;
  try {
       BlogData = await Alldata("/blog");
       RatgeberData = await PostGet("/posts");
       const metadata = await MetaDataAPIS("/blog");
       const schemaMatch = metadata.head.match(
         /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
       );
        schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
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
  try {
    const metadata = await MetaDataAPIS("/blog");
    const head = metadata?.head || "";

    // Extract meta values
    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );
    const ogTitleMatch = head.match(
      /<meta property="og:title" content="(.*?)"/
    );
    const ogDescriptionMatch = head.match(
      /<meta property="og:description" content="(.*?)"/
    );
    const ogUrlMatch = head.match(/<meta property="og:url" content="(.*?)"/);
    const twitterTitleMatch = head.match(
      /<meta name="twitter:title" content="(.*?)"/
    );
    const twitterDescriptionMatch = head.match(
      /<meta name="twitter:description" content="(.*?)"/
    );

    // Fallback values
    const title = titleMatch?.[1] || "Default Blog Title";
    const description = descriptionMatch?.[1] || "Default Blog Description";
    const canonical =
      canonicalMatch?.[1] || "https://daniella-nicolli-nextjs.vercel.app/blog";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title: ogTitleMatch?.[1] || title,
        description: ogDescriptionMatch?.[1] || description,
        url: ogUrlMatch?.[1] || canonical,
      },
      twitter: {
        title: twitterTitleMatch?.[1] || title,
        description: twitterDescriptionMatch?.[1] || description,
        card: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Error in generateMetadata for /blog:", error);

    return {
      title: "Default Blog Title",
      description: "Default Blog Description",
      alternates: {
        canonical: "https://daniella-nicolli-nextjs.vercel.app/blog",
      },
      openGraph: {
        title: "Default Blog Title",
        description: "Default Blog Description",
        url: "https://daniella-nicolli-nextjs.vercel.app/blog",
      },
      twitter: {
        title: "Default Blog Title",
        description: "Default Blog Description",
        card: "summary_large_image",
      },
    };
  }
}
