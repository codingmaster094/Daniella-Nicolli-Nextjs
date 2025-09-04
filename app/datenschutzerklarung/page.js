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
  try {
    const metadata = await SEODATA("/datenschutzerklaerung");

    return {
      title: metadata?.title || "datenschutzerklaerung",
      description: metadata?.description || "datenschutzerklaerung",
      alternates: {
        canonical:
          metadata?.canonical && metadata.canonical !== ""
            ? metadata.canonical
            : "https://www.heilpraktikerin-nicolli.de/datenschutzerklaerung",
      },
      robots: metadata?.robots || "noindex,nofollow",
    };
  } catch (err) {
    console.error("Error fetching SEO metadata:", err);
    return {
      title: "Default Title",
      description: "Default Description",
      robots: "noindex,nofollow",
    };
  }
}

