import React from "react";
import Menudatas from "../until/MenuData";
import dynamic from "next/dynamic";
import SEODATA from "../until/SEO_Data";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
const page = async() => {

    let datenschutzerklärung;
    let schemaJSON;
   try {
  datenschutzerklärung = await Menudatas("/page-data/datenschutzerklaerung");
  const metadata = await SEODATA("/datenschutzerklaerung");
  schemaJSON = metadata?.schema ? JSON.stringify(metadata.schema) : null;
} catch (error) {
  console.error("Error fetching data:", error);
  return null; // let build continue
}

if (!datenschutzerklärung) return null;



  return (
    <>
   {
  schemaJSON && schemaJSON !== "[]" && (
    <SchemaInjector schemaJSON={schemaJSON} />
  )
}

    <section className="section">
      <div className="py-10  md:py-[70px]  lg:py-[100px] bg-Teal ">
        <div className="container mx-auto px-[15px] ">
          <h1 className="text-white">{datenschutzerklärung?.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-[15px]">
        <div
          className="py-10 md:py-[70px] text-a   space-y-4 "
          dangerouslySetInnerHTML={{ __html: datenschutzerklärung?.content }}
        ></div>
      </div>
    </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  const metadata = await SEODATA("/datenschutzerklaerung");
  const seo = metadata?.seo?.computed || {};

  const title =
    seo.title ||
    "datenschutzerklaerung";

  const description =
    seo.description ||
    "datenschutzerklaerung";

  const canonical =
    seo.canonical && seo.canonical !== ""
      ? seo.canonical
      : "https://www.heilpraktikerin-nicolli.de/datenschutzerklaerung";

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

