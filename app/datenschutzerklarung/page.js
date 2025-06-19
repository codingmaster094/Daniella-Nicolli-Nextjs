import React from "react";
import Menudatas from "../until/MenuData";
import MetaDataAPIS from "@/app/until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));

const page = async() => {

    let datenschutzerklärung;
     try {
       datenschutzerklärung = await Menudatas(
         "/page-data/datenschutzerklarung"
       );
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>; // Fallback UI
     }
  
     if (!datenschutzerklärung) {
       return <div>No data available.</div>; // Fallback UI
     }

  return (
    <>
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

export async function generateMetadata({ params }) {
  const {slug } = await params; // No need to await

  let metadata = await MetaDataAPIS(`/datenschutzerklarung`);

  const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
  const descriptionMatch = metadata.head.match(
    /<meta name="description" content="(.*?)"/
  );

  const title = titleMatch ? titleMatch[1] : "Default Title";
  const description = descriptionMatch
    ? descriptionMatch[1]
    : "Default Description";

  return {
    title,
    description,
  };
}
