import React from "react";
import BannerCarousel from "../componants/Banner";
import ReviewsData from "../ReviewsData/page";
import ClientCarousel from "../componants/client";
import Terminbroncher from "../componants/Terminbroncher";
import Slidehover from "../componants/Slidehover";
import Accordian from "../componants/Accordian";
import MultipleAboutdetails from "../componants/MultipleAboutdetails";
import Alldata from "../until/AllDatafetch";
import MetaDataAPIS from "../until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
const page = async () => {
  let Naturheilmedizin;
  try {
    Naturheilmedizin = await Alldata("/naturheilmedizin");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>; // Fallback UI
  }

  if (!Naturheilmedizin) {
    return <div>No data available.</div>; // Fallback UI
  }

  const metadata = await MetaDataAPIS("/naturheilmedizin");

  const schemaMatch = metadata.head.match(
    /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
  );
  const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <BannerCarousel
        title={Naturheilmedizin?.hero_slider_main_title?.value}
        img={Naturheilmedizin?.hero_slider_image?.value}
        content={Naturheilmedizin?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Naturheilmedizin?.hero_slider_button?.value}
      />

      {Naturheilmedizin && (
        <ClientCarousel
          main_title={Naturheilmedizin?.partners_section_main_title.value}
          section_all_partners={Naturheilmedizin?.partners_section_all_partners}
          activate_deactivate={
            Naturheilmedizin?.enabledisable_partners_logos?.value
          }
        />
      )}
      <Terminbroncher
        title={Naturheilmedizin?.aesthetik_grundsätze_main_title.value}
        BTN={Naturheilmedizin?.aesthetik_grundsätze_button.value}
        columns={Naturheilmedizin?.aesthetik_grundsätze_all_contents.value}
      />

      <MultipleAboutdetails
        MultipleAboutdeta={
          Naturheilmedizin?.aesthetik_all_anfrage_faltenunterspritzung
        }
      />

      {Naturheilmedizin && (
        <Slidehover
          main_title={Naturheilmedizin?.referenzen_main_title.value}
          all_referenzen={Naturheilmedizin?.all_referenzen}
          enabledisable_referenz={
            Naturheilmedizin?.enabledisable_referenz?.value
          }
          bg_image={Naturheilmedizin?.referenzen_background_image?.value}
        />
      )}

      <ReviewsData />
      <Accordian
        main_title={Naturheilmedizin?.faq_main_title?.value}
        all_faqs={Naturheilmedizin?.all_faqs?.value}
        show_section={Naturheilmedizin?.faq_main_faq_show.value}
      />
    </>
  );
};

export default page;

export async function generateMetadata() {
  try {
    const metadata = await MetaDataAPIS("/naturheilmedizin");
    const head = metadata?.head || "";

    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );

    const title = titleMatch?.[1] || "Naturheilmedizin | Daniella Nicolli";
    const description =
      descriptionMatch?.[1] ||
      "Individuelle Therapien mit natürlichem Ansatz – erfahren Sie mehr über unsere naturheilkundlichen Behandlungen.";
    const canonical =
      canonicalMatch?.[1] ||
      "https://daniella-nicolli-nextjs.vercel.app/naturheilmedizin";

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
    console.error("Error in generateMetadata for /naturheilmedizin:", error);
    return {
      title: "Naturheilmedizin | Daniella Nicolli",
      description:
        "Individuelle Therapien mit natürlichem Ansatz – erfahren Sie mehr über unsere naturheilkundlichen Behandlungen.",
      alternates: {
        canonical:
          "https://daniella-nicolli-nextjs.vercel.app/naturheilmedizin",
      },
      openGraph: {
        title: "Naturheilmedizin | Daniella Nicolli",
        description:
          "Individuelle Therapien mit natürlichem Ansatz – erfahren Sie mehr über unsere naturheilkundlichen Behandlungen.",
        url: "https://daniella-nicolli-nextjs.vercel.app/naturheilmedizin",
      },
      twitter: {
        title: "Naturheilmedizin | Daniella Nicolli",
        description:
          "Individuelle Therapien mit natürlichem Ansatz – erfahren Sie mehr über unsere naturheilkundlichen Behandlungen.",
        card: "summary_large_image",
      },
    };
  }
}
