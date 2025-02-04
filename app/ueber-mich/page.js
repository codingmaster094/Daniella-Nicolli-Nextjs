"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from '../componants/Banner'
import ClientCarousel from '../componants/client';
import UberAboutDeatils from '../componants/UberAboutDeatils';
import Categories from '../componants/Categories';
import Counter from '../componants/Counter';
import UberAboutDeatilsleft from '../componants/UberAboutDeatilsleft';
import Gallrey from '../componants/Gallrey';
import axios from "axios";
const page = () => {

  const [Ubermich, setUbermich] = useState(null);
  const [Instagram_img, setInstagram_img] = useState(null)

  const FetxhInstagram_image = async()=>{
    try {
      const response = await axios.get(
        "https://www.instagram.com/nicolli_praxis_fuer_aesthetik/"
      );

      console.log('response', response)
      const posts = response.data.graphql.user.edge_owner_to_timeline_media.edges;
      const imageUrls = posts.map((post) => ({
        id: post.node.id,
        media_url: post.node.display_url,
        permalink: `https://www.instagram.com/p/${post.node.shortcode}/`,
      }));

      setInstagram_img(imageUrls);
        console.log('imageUrls', imageUrls)
    } catch (error) {
      console.log(error)
    }
  }

  console.log("Instagram_img" , Instagram_img)
  const fetchUbermich = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/ueber-mich"
      );
      setUbermich(response.data); // The result is in response.data with Axios
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchUbermich();
    FetxhInstagram_image();
  }, []);
              
  return (
    <>
    {/* {Ubermich && (
        <BannerCarousel slidesData={Ubermich?.hero_slider} />
      )} */}

      {
      Ubermich && 
      <section>
        <div className={`Banner`}>
          <div className="Banner-sliders relative">
                <div className="item">
                  <div
                    className="bg-banner bg-banner-img bg-cover px-[15px]  2xl:ps-[148px]"
                    style={{
                    backgroundImage: Ubermich?.hero_slider_image?.value
                      ? `url(${Ubermich?.hero_slider_image?.value})`
                      : "none",
                  }}
                  >
                    <div className="flex flex-col bg-Bgwhite  p-6 lg:p-12 gap-4 lg:gap-8 w-full md:w-[845px] ">
                      <h1>{Ubermich?.hero_slider_main_title?.value}</h1>
                      <ul
                        className="menu"
                        dangerouslySetInnerHTML={{
                          __html: Ubermich?.hero_slider_content?.value.replace(/<\/?ul[^>]*>/g, ""),
                        }}
                      ></ul>
                      {Ubermich?.hero_slider_button && (
                        <Link
                          href={Ubermich?.hero_slider_button?.value?.url}
                          target={Ubermich?.hero_slider_button?.value?.target}
                          className="flex self-start text-center bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in"
                          aria-label={Ubermich?.hero_slider_button?.value?.title || "button link"}
                        >
                          {Ubermich?.hero_slider_button?.value?.title}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    } 

      {Ubermich && (
        <ClientCarousel
          main_title={Ubermich?.partners_section_main_title.value}
          section_all_partners={
            Ubermich?.partners_section_all_partners
          }
        />
      )}

        <UberAboutDeatils 
        main_title={Ubermich?.ueber_geschichte_main_title?.value}
        content={Ubermich?.ueber_geschichte_content?.value}
        image={Ubermich?.ueber_geschichte_image?.value}
        />

        {/* <Categories
          title={Ubermich?.ueber_geschichte_anfrage_main_title?.value}
          description={Ubermich?.ueber_geschichte_anfrage_1_content?.value}
          BTN={Ubermich?.ueber_geschichte_anfrage_1_button?.value}  
          /> */}

        <Counter
          main_title={Ubermich?.ueber_leistungen_main_title?.value}
          all_leistungen={Ubermich?.ueber_all_leistungen?.value}
        />

        <UberAboutDeatilsleft 
          main_title={Ubermich?.ueber_praxis_main_title?.value}
          content={Ubermich?.ueber_praxis_content?.value}
          image={Ubermich?.ueber_praxis_image?.value}
        />

        {/* <Maps 
          main_title ={Ubermich?.ueber_standort_kartemain_title?.value}
          map_image={Ubermich?.map_image?.value}
          map_url={Ubermich?.ueber_standort_kartemain_map_url?.value}
        /> */}

        {
          Ubermich && (<Gallrey 
          main_title={Ubermich?.ueber_gallery_main_title?.value}
          gallery_images={Ubermich?.ueber_gallery_images?.value}
        />)
        }
        
       </>
  )
}

export default page