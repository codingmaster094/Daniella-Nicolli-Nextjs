import React from "react";
import Menudatas from "../until/MenuData";
import dynamic from "next/dynamic";
import SEODATA from "../until/SEO_Data";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
const page = async() => {
   let ImpressumData ;
   let schemaJSON;
   try {
     ImpressumData = await Menudatas("/page-data/impressum");
     const metadata = await SEODATA("/impressum");
            schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
                console.log('schemaJSON', schemaJSON)
   } catch (error) {
     console.error("Error fetching data:", error);
     return <div>Error loading data.</div>; // Fallback UI
   }
    if (!ImpressumData) {
      return <div>No data available.</div>; // Fallback UI
    }

  return (
    <>

    <SchemaInjector schemaJSON={schemaJSON} />

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
  const metadata = await SEODATA(`/impressum`);
  // Fallback values if some field is missing
  const title = metadata.title || "impressum";
  const description = metadata.description || "impressum";
  const canonical =
    metadata.canonical && metadata.canonical !== ""
      ? metadata.canonical
      : "https://www.heilpraktikerin-nicolli.de/impressum";
      

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: metadata.robots ? metadata.robots : "noindex,nofollow",
  };
}
