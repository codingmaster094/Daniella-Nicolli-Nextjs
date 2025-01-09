"use client"
import React, { useEffect, useState } from 'react'
import BannerCarousel from '../componants/Banner'
import Comment from '../componants/Comment'
import ClientCarousel from '../componants/client'
import Terminbroncher from '../componants/Terminbroncher'
import Slidehover from '../componants/Slidehover'
import Accordian from '../componants/Accordian'
import MultipleAboutdetails from '../componants/MultipleAboutdetails'
import axios from 'axios'
const page = () => {
  const [Naturheilmedizin, setNaturheilmedizin] = useState(null);
  const fetchNaturheilmedizin = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/naturheilmedizin"
      );
      setNaturheilmedizin(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchNaturheilmedizin();
  }, []);


  return (
    <>
    {Naturheilmedizin && (
        <BannerCarousel slidesData={Naturheilmedizin?.hero_slider} className="custom-class-name" />
      )}

      {/* <ClientCarousel/> */}

      {Naturheilmedizin && (
        <ClientCarousel
          main_title={Naturheilmedizin?.partners_section_main_title.value}
          section_all_partners={
            Naturheilmedizin?.partners_section_all_partners
          }
        />
      )}
      <Terminbroncher 
          title={Naturheilmedizin?.aesthetik_grundsätze_main_title.value}
          BTN={Naturheilmedizin?.aesthetik_grundsätze_button.value.title}
          columns={Naturheilmedizin?.aesthetik_grundsätze_all_contents.value}
      />

      {/* <Terminbroncher
          title="Naturheilmedizin"
          column1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          column2="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      /> */}

      <Comment 
       main_title={Naturheilmedizin?.bewertungen_main_title?.value}
       content={Naturheilmedizin?.bewertungen_content?.value}
     />

        <MultipleAboutdetails 
        MultipleAboutdeta={Naturheilmedizin?.aesthetik_all_anfrage_faltenunterspritzung}
        />

{Naturheilmedizin && (
        <Slidehover
          main_title={Naturheilmedizin?.referenzen_main_title.value}
          all_referenzen={Naturheilmedizin?.all_referenzen}
        />
      )}
        {/* <Slidehover/> */}

        <Accordian
        main_title={Naturheilmedizin?.faq_main_title?.value}
        all_faqs={Naturheilmedizin?.all_faqs?.value}
      />
        {/* <Accordian/>     */}
</>
  )
}

export default page