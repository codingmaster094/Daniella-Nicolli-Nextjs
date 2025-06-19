import React from "react";
import ClientCarousel from "../componants/client";
import UberAboutDeatils from "../componants/UberAboutDeatils";
import Counter from "../componants/Counter";
import UberAboutDeatilsleft from "../componants/UberAboutDeatilsleft";
import Gallrey from "../componants/Gallrey";
import Categories from "../componants/Categories";
import BannerCarousel from "../componants/Banner";
import Alldata from "../until/AllDatafetch";
import MetaDataAPIS from "../until/metadataAPI";
import dynamic from "next/dynamic";
const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));

const page = async () => {  
  let Ubermich;

  try {
    Ubermich = await Alldata("/ueber-mich");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>; // Fallback UI
  }

  if (!Ubermich) {
    return <div>No data available.</div>; // Fallback UI
  }
  const metadata = await MetaDataAPIS("/ueber-mich");

  const schemaMatch = metadata.head.match(
    /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
  );
  const schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;

  return (
    <>
      <SchemaInjector schemaJSON={schemaJSON} />
      <BannerCarousel
        title={Ubermich?.hero_slider_main_title?.value}
        img={Ubermich?.hero_slider_image?.value}
        content={Ubermich?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={Ubermich?.hero_slider_button?.value}
      />

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={Ubermich?.partners_section_all_partners}
          activate_deactivate={Ubermich?.enabledisable_partners_logos?.value}
        />
      )}

      <UberAboutDeatils
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        main_title1={Ubermich?.ueber_praxis_main_title?.value}
        content1={Ubermich?.ueber_praxis_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        Small_image_show={Ubermich?.ueber_geschichte_image_show}
      />

      {Ubermich && (
        <Counter
          main_title={Ubermich?.ueber_leistungen_main_title?.value}
          all_leistungen={Ubermich?.ueber_all_leistungen?.value}
        />
      )}

      <UberAboutDeatilsleft
        main_title={Ubermich?.experience_title?.value}
        sub_content={Ubermich?.experience_year?.value}
        image={Ubermich?.ueber_praxis_image?.value}
        Small_image_show={Ubermich?.ueber_praxis_image_show?.value}
      />

      <Categories
        title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
        description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
        BTN={Ubermich?.ueber_geschichte_anfrage_1_button.value}
        bg_img={Ubermich?.ueber_geschichte_anfrage_1_image?.value}
      />

      {Ubermich && (
        <Gallrey
          main_title={Ubermich?.ueber_gallery_main_title?.value}
          gallery_images={Ubermich?.ueber_gallery_images?.value}
          gallery_truefalse={Ubermich?.gallery_truefalse?.value}
        />
      )}
    </>
  );
};

export default page;

export async function generateMetadata() {
  try {
    const metadata = await MetaDataAPIS("/ueber-mich");
    const head = metadata?.head || "";

    const titleMatch = head.match(/<title>(.*?)<\/title>/);
    const descriptionMatch = head.match(
      /<meta name="description" content="(.*?)"/
    );
    const canonicalMatch = head.match(
      /<link\s+rel="canonical"\s+href="([^"]+)"/i
    );

    const title = titleMatch?.[1] || "Über mich | Daniella Nicolli";
    const description =
      descriptionMatch?.[1] ||
      "Erfahren Sie mehr über Daniella Nicolli, ihre Philosophie und ihr ganzheitliches Behandlungskonzept.";
    const canonical =
      canonicalMatch?.[1] ||
      "https://daniella-nicolli-nextjs.vercel.app/ueber-mich";

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
    console.error("Metadata generation error (/ueber-mich):", error);
    return {
      title: "Über mich | Daniella Nicolli",
      description:
        "Erfahren Sie mehr über Daniella Nicolli, ihre Philosophie und ihr ganzheitliches Behandlungskonzept.",
      alternates: {
        canonical: "https://daniella-nicolli-nextjs.vercel.app/ueber-mich",
      },
      openGraph: {
        title: "Über mich | Daniella Nicolli",
        description:
          "Erfahren Sie mehr über Daniella Nicolli, ihre Philosophie und ihr ganzheitliches Behandlungskonzept.",
        url: "https://daniella-nicolli-nextjs.vercel.app/ueber-mich",
      },
      twitter: {
        title: "Über mich | Daniella Nicolli",
        description:
          "Erfahren Sie mehr über Daniella Nicolli, ihre Philosophie und ihr ganzheitliches Behandlungskonzept.",
        card: "summary_large_image",
      },
    };
  }
}
