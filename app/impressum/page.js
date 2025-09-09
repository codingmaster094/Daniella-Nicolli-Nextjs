import React from "react";
import Menudatas from "../until/MenuData";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});
const page = async() => {
   let ImpressumData ;
   let schemaJSON;
   try {
     ImpressumData = await Menudatas("/page-data/impressum");
     
     const metadata = await SEODATA("/impressum");
            schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
   } catch (error) {
     console.error("Error fetching data:", error);
     return <div>Error loading data.</div>; // Fallback UI
   }
    if (!ImpressumData) {
      return <div>No data available.</div>; // Fallback UI
    }
  return (
    <>
    {
  schemaJSON && schemaJSON !== "[]" && (
    <SchemaInjector schemaJSON={schemaJSON} />
  )
}
    <section className="Im-section section">
      <div className="py-10  md:py-[70px]  lg:py-[100px] bg-Teal ">
        <div className="container mx-auto px-[15px] ">
          <h1 className="text-white">{ImpressumData?.title}</h1>
        </div>   
      </div>
      <div className="container mx-auto px-[15px] ">
        <div
          className="py-10 md:py-[70px] text-a space-y-4 "
          dangerouslySetInnerHTML={{ __html: ImpressumData?.content }}
        ></div>
      </div>
    </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  const metadata = await SEODATA("/impressum");
  const seo = metadata?.seo?.computed || {};

  const title =
    seo.title ||
    "impressum";

  const description =
    seo.description ||
    "impressum";

  const canonical =
    seo.canonical && seo.canonical !== ""
      ? seo.canonical
      : "https://www.heilpraktikerin-nicolli.de/impressum";

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
