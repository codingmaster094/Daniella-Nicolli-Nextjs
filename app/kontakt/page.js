  import React from "react";
  import ContactAboutDetails from "../componants/ContactAboutDetails";
  import Contactform from "../componants/Contactform";
  import Maps from "../componants/Maps";
  import BannerCarousel from "../componants/Banner";
  import Alldata from "../until/AllDatafetch";
  import MetaDataAPIS from "../until/metadataAPI";
  import dynamic from "next/dynamic";
  const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
  const page = async () => {
    let ContactData;
    let schemaJSON;
    try {
      ContactData = await Alldata("/kontakt");
      const metadata = await MetaDataAPIS("/kontakt");
      const schemaMatch = metadata.head.match(
        /<script[^>]*type="application\/ld\+json"[^>]*class="rank-math-schema"[^>]*>([\s\S]*?)<\/script>/
      );
      schemaJSON = schemaMatch ? schemaMatch[1].trim() : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>; // Fallback UI
    }

    if (!ContactData) {
      return <div>No data available.</div>; // Fallback UI
    }
    

    return (
      <>
        <SchemaInjector schemaJSON={schemaJSON} />
        <BannerCarousel
          title={ContactData?.hero_slider_main_title?.value}
          img={ContactData?.hero_slider_image?.value}
          content={ContactData?.hero_slider_content?.value.replace(
            /<\/?ul[^>]*>/g,
            ""
          )}
          BTN={ContactData?.hero_slider_button?.value}
        />

        <ContactAboutDetails
          main_title={ContactData?.kontakt_uebersicht_main_title?.value}
          content={ContactData?.kontakt_uebersicht_content?.value}
          image={ContactData?.kontakt_uebersicht_image?.value}
          telefonnummer_label={ContactData?.kontakt_telefonnummer_label?.value}
          kontakt_whatsapp_label={ContactData?.kontakt_whatsapp_label?.value}
          email_label={ContactData?.kontakt_email_label?.value}
          terminbuchung_label={ContactData?.kontakt_terminbuchung_label?.value}
          telefonnummer_button={
            ContactData?.kontakt_telefonnummer_button?.value
          }
          kontakt_whatsapp_button_text={
            ContactData?.kontakt_whatsapp_button_text?.value
          }
          email_button={ContactData?.kontakt_email_button?.value}
          terminbuchung_button={
            ContactData?.kontakt_terminbuchung_button?.value
          }
          terminbuchung_text={ContactData?.kontakt_terminbuchung_text?.value}
          footer_whatsapp_number={ContactData?.footer_whatsapp_number?.value}
          // add whatsaap detalis in
        />

        <Maps
          main_title={ContactData?.kontakt_standort_kartemain_title?.value}
          map_image={ContactData?.map_image?.value}
          map_url={ContactData?.map_url?.value}
        />

        <Contactform
          main_title={ContactData?.kontakt_form_main_title?.value}
          content={ContactData?.kontakt_form_content?.value}
          live_chat_with_us={ContactData?.kontakt_form_live_chat_with_us?.value}
          form_address={ContactData?.kontakt_form_address?.value}
        />
      </>
    );
  };

  export default page;

export async function generateMetadata() {
  let metadata = await MetaDataAPIS("/kontakt");

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
