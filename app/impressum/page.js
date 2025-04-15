import React from "react";
import Menudatas from "../until/MenuData";

const page = async() => {
   let ImpressumData;
       try {
         ImpressumData = await Menudatas(
           "/page-data/impressum"
         );
       } catch (error) {
         console.error("Error fetching data:", error);
         return <div>Error loading data.</div>; // Fallback UI
       }
    
       if (!ImpressumData) {
         return <div>No data available.</div>; // Fallback UI
       }

  return (
    <section className="Im-section section">
      <div className="py-10  md:py-[70px]  lg:py-[100px] bg-Teal ">
        <div className="container mx-auto px-[15px] ">
          <h1 className="text-white">{ImpressumData?.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-[15px] ">
        <div
          className="py-10 md:py-[70px] text-a     space-y-4 "
          dangerouslySetInnerHTML={{ __html: ImpressumData?.content }}
        ></div>
      </div>
    </section>
  );
};

export default page;
