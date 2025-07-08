import React from "react";
import Menudatas from "../until/MenuData";
import dynamic from "next/dynamic";
import MetaDataAPIS from "../until/metadataAPI";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
const page = async() => {

    let datenschutzerklärung;
    let schemaJSON;
    try {
      datenschutzerklärung = await Menudatas("/page-data/datenschutzerklarung");
      const metadata = await MetaDataAPIS("/datenschutzerklarung");
      const schemaMatch = metadata.head.match(
        /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
      );
      schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>; // Fallback UI
    }
  
     if (!datenschutzerklärung) {
       return <div>No data available.</div>; // Fallback UI
     }


  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
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
  let metadata = await MetaDataAPIS("/datenschutzerklarung");

  // Extract metadata from the head string
  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );
  const canonicalMatch = metadata.head.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );
  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";
    const canonical =
      canonicalMatch?.[1] || "https://www.heilpraktikerin-nicolli.de";
  return {
    title,
    description,
    alternates: {
      canonical,
    },
  };
}
