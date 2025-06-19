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

     const metadata = await MetaDataAPIS(`/datenschutzerklarung`);
            
              const schemaMatch = metadata.head.match(
                /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
              );
              const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;

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
  try {
    const metadata = await MetaDataAPIS("/datenschutzerklarung");
    const head = metadata?.head || "";

    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );

    const title = titleMatch?.[1] || "Datenschutzerklärung | Daniella Nicolli";
    const description =
      descriptionMatch?.[1] ||
      "Informationen zum Datenschutz der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.";
    const canonical =
      canonicalMatch?.[1] ||
      "https://daniella-nicolli-nextjs.vercel.app/datenschutzerklarung";

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
    console.error("Metadata generation error (/datenschutzerklarung):", error);
    return {
      title: "Datenschutzerklärung | Daniella Nicolli",
      description:
        "Informationen zum Datenschutz der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
      alternates: {
        canonical:
          "https://daniella-nicolli-nextjs.vercel.app/datenschutzerklarung",
      },
      openGraph: {
        title: "Datenschutzerklärung | Daniella Nicolli",
        description:
          "Informationen zum Datenschutz der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
        url: "https://daniella-nicolli-nextjs.vercel.app/datenschutzerklarung",
      },
      twitter: {
        title: "Datenschutzerklärung | Daniella Nicolli",
        description:
          "Informationen zum Datenschutz der Praxis für Ästhetik & Naturheilmedizin – Daniella Nicolli.",
        card: "summary_large_image",
      },
    };
  }
}

