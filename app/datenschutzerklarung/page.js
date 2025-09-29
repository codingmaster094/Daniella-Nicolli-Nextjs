import React from "react";
import Menudatas from "../until/MenuData";
import SEODATA from "../until/SEO_Data";
import dynamic from "next/dynamic";
import SEO_schema from "../componants/SEO_schema";
import generatePageMetadata from "../until/generatePageMetadata";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"), {
  ssr: true,
});
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

if (!datenschutzerklärung || !schemaJSON) return null;



  return (
    <>
  <SEO_schema
        schemaJSON={schemaJSON}
      />

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
  return generatePageMetadata("/datenschutzerklaerung", {
    title: "datenschutzerklaerung",
    description: "datenschutzerklaerung",
  });
}


