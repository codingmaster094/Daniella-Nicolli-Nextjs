  import React from "react";
  import ContactAboutDetails from "../componants/ContactAboutDetails";
  import Contactform from "../componants/Contactform";
  import Maps from "../componants/Maps";
  import BannerCarousel from "../componants/Banner";
  import Alldata from "../until/AllDatafetch";
  import MetaDataAPIS from "../until/metadataAPI";
  import dynamic from "next/dynamic";
import Accordian from "../componants/Accordian";
import SEODATA from "../until/SEO_Data";
  const SchemaInjector = dynamic(() => import("../componants/SchemaInjector"));
  const page = async () => {
    let ContactData;
    let schemaJSON;
    try {
      ContactData = await Alldata("/kontakt");
       const metadata = await SEODATA("/kontakt");
    schemaJSON = metadata.schema ? JSON.stringify(metadata.schema) : null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>; // Fallback UI
    }

    if (!ContactData) {
      return <div>No data available.</div>; // Fallback UI
    }
    

    return (
      <>
         {
  schemaJSON && schemaJSON !== "[]" && (
    <SchemaInjector schemaJSON={schemaJSON} />
  )
}
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

        <Accordian
          main_title={ContactData?.faq_main_title?.value}
          all_faqs={ContactData?.all_faqs?.value}
          show_section={ContactData?.faq_main_faq_show.value}
        />
      </>
    );
  };

  export default page;

export async function generateMetadata() {
  const metadata = await SEODATA(`/kontakt`);

  // Fallback values if some field is missing
  const title = metadata.title || "Default Title";
  const description = metadata.description || "Default Description";
  const canonical =
    metadata.canonical && metadata.canonical !== ""
      ? metadata.canonical
      : "https://www.heilpraktikerin-nicolli.de/kontakt";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: metadata.robots ? metadata.robots : "noindex,nofollow",
  };
}