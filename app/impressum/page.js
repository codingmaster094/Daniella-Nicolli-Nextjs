"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [ImpressumData, setImpressumData] = useState(null);
  const fetchImpressumData = async () => {
    try {
      const response = await axios.get(
        "https://daniella.blog-s.de/wp-json/custom/v1/page-data/impressum"
      );
      setImpressumData(response.data);
    } catch (error) {
      console.error("Error fetching content data", error);
    }
  };

  useEffect(() => {
    fetchImpressumData();
  }, []);
  return (
    <section>
      <div className="container mx-auto px-[15px] ">
      <h2>{ImpressumData?.title}</h2>
        <div
          className="banner py-8"
          dangerouslySetInnerHTML={{ __html: ImpressumData?.content }}
        ></div>
      </div>
    </section>
  );
};

export default page;
