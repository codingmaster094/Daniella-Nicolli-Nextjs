import React from "react";
import ClientCarousel from "../componants/client"
import Comment from "../componants/Comment"
import Accordian from "../componants/Accordian"
import Slidehover from "../componants/Slidehover"
import Terminbroncher from "../componants/Terminbroncher"
import MultipleAboutdetails from "../componants/MultipleAboutdetails"
import BannerCarousel from "../componants/Banner"
import Alldata from "../until/AllDatafetch";
// import MetaDataAPIS from "../until/metadataAPI";
const Page = async() => {
  let AesthetikData;

  try {
       AesthetikData = await Alldata("/aesthetik");
     } catch (error) {
       console.error("Error fetching data:", error);
       return <div>Error loading data.</div>; // Fallback UI
     }
  
     if (!AesthetikData) {
       return <div>No data available.</div>; // Fallback UI
     }


  return (
    <>
      <BannerCarousel
        title={AesthetikData?.hero_slider_main_title?.value}
        img={AesthetikData?.hero_slider_image?.value}
        content={AesthetikData?.hero_slider_content?.value.replace(
          /<\/?ul[^>]*>/g,
          ""
        )}
        BTN={AesthetikData?.hero_slider_button?.value}

      />

      {AesthetikData && (
        <ClientCarousel
          main_title={AesthetikData?.partners_section_main_title?.value}
          section_all_partners={AesthetikData?.partners_section_all_partners}
          activate_deactivate={
            AesthetikData?.enabledisable_partners_logos?.value
          }

        />
      )}
      <Terminbroncher
        title={AesthetikData?.aesthetik_grundsätze_main_title?.value}
        BTN={AesthetikData?.aesthetik_grundsätze_button.value}
        columns={AesthetikData?.aesthetik_grundsätze_all_contents?.value}

      />

      <MultipleAboutdetails
        MultipleAboutdeta={
          AesthetikData?.aesthetik_all_anfrage_faltenunterspritzung
        }

      />
      {AesthetikData && (
        <Slidehover
          main_title={AesthetikData?.referenzen_main_title?.value}
          all_referenzen={AesthetikData?.all_referenzen}
          enabledisable_referenz={AesthetikData?.enabledisable_referenz?.value}
          bg_image={AesthetikData?.referenzen_background_image?.value}
        />
      )}

      <Comment
        main_title={AesthetikData?.bewertungen_main_title?.value}
        content={AesthetikData?.bewertungen_content?.value}
 
      />
      <Accordian
        main_title={AesthetikData?.faq_main_title?.value}
        all_faqs={AesthetikData?.all_faqs?.value}
        show_section={AesthetikData?.faq_main_faq_show.value}
   
      />
    </>
  );
};

export default Page;

// export async function generateMetadata() {
//   let metadata = await MetaDataAPIS("/aesthetik");

//   // Extract metadata from the head string
//   const titleMatch = metadata.head.match(/<title>(.*?)<\/title>/);
//   const descriptionMatch = metadata.head.match(
//     /<meta name="description" content="(.*?)"/
//   );

//   const title = titleMatch ? titleMatch[1] : "Default Title";
//   const description = descriptionMatch
//     ? descriptionMatch[1]
//     : "Default Description";

//   return {
//     title,
//     description,
//   };
// }