import React from "react";
import Menudatas from "../until/MenuData";
import MetaDataAPIS from "@/app/until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
const page = async() => {
   let ImpressumData;
       try {
         ImpressumData = await Menudatas(
           "/page-data/impressum"
         );
       } catch (error) {
         console.error("Error fetching data:", error);
         return <div>Error loading data.</div>; // Fallback UI
       }
    
       if (!ImpressumData) {
         return <div>No data available.</div>; // Fallback UI
       }

       const metadata = await MetaDataAPIS(`/impressum`);
       
         const schemaMatch = metadata.head.match(
           /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
         );
         const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
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
  try {
    const metadata = await MetaDataAPIS("/impressum");
    const head = metadata?.head || "";

    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );

    const title = titleMatch?.[1] || "Impressum | Daniella Nicolli";
    const description =
      descriptionMatch?.[1] ||
      "Impressum der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.";
    const canonical =
      canonicalMatch?.[1] ||
      "https://daniella-nicolli-nextjs.vercel.app/impressum";

    return {
      title,
      description,
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
      },
      twitter: {
        title,
        description,
        card: "summary_large_image",
      },
    };
  } catch (error) {
    console.error("Metadata error (/impressum):", error);
    return {
      title: "Impressum | Daniella Nicolli",
      description:
        "Impressum der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
      alternates: {
        canonical: "https://daniella-nicolli-nextjs.vercel.app/impressum",
      },
      openGraph: {
        title: "Impressum | Daniella Nicolli",
        description:
          "Impressum der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
        url: "https://daniella-nicolli-nextjs.vercel.app/impressum",
      },
      twitter: {
        title: "Impressum | Daniella Nicolli",
        description:
          "Impressum der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
        card: "summary_large_image",
      },
    };
  }
}


