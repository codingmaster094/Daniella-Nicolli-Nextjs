import React from "react";
import Blog from "../componants/Blog"; 
import BannerCarousel from "../componants/Banner"; 
import PostGet from "../until/PostGet";
import Alldata from "../until/AllDatafetch";
import dynamic from "next/dynamic";
import SEODATA from "../until/SEO_Data";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));

const Page = async () => {
  let BlogData ;
  let RatgeberData ;
  let schemaJSON;
  try {
    BlogData = await Alldata("/ratgeber");
    RatgeberData = await PostGet("/ratgeber");
     const metadata = await SEODATA("/ratgeber");
    let schema = metadata?.schema;
       // If wrapped inside "schema-xxxxx", unwrap it
       if (schema && typeof schema === "object") {
         const firstKey = Object.keys(schema)[0];
         if (firstKey && schema[firstKey]) {
           schema = schema[firstKey];
         }
       }
       if (schema && !schema["@context"]) {
         schema["@context"] = "https://schema.org";
       }
       schemaJSON = schema ? JSON.stringify(schema) : null;
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

  // Fallback values if some field is missing
  const title = metadata.title || "Ratgeber für Ästhetik und Naturheilmedizin";
  const description = metadata.description || "Ratgeber für Ästhetik: Ästhetische Behandlungen und Naturheilverfahren im Überblick | Infos und Tipps zu Ernährung, Hautpflege und Co.";
  const canonical =
    metadata.canonical && metadata.canonical !== ""
      ? metadata.canonical
      : "https://www.heilpraktikerin-nicolli.de/ratgeber";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: metadata.robots ? metadata.robots : "noindex,nofollow",
  };
}