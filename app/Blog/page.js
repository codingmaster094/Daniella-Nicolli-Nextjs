'use client'
import React, { useEffect, useState } from 'react'
import BannerCarousel from '../componants/Banner'
import Blog from '../componants/Blog';
import axios from 'axios';

const page = () => {
  const [BlogData, setBlogData] = useState(null);
  const [RatgeberData, setRatgeberData] = useState(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom-api/v1/acf-fields/ratgeber"
      );
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  const fetchRatgeberData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/wp/v2/ratgeber"
      );
      setRatgeberData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };


  useEffect(() => {
    fetchBlogData();
    fetchRatgeberData();
  }, []);

      return (
        <>
         {BlogData && (<BannerCarousel slidesData={BlogData?.hero_slider} className="custom-class-name"/>)} 
         <Blog blogsData={RatgeberData} />

    </>
      )
    }
    export default page
