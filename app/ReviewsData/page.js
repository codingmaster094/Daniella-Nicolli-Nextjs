import React from 'react'
import Comment from '../componants/Comment'
import HeaderDatas from '../until/HeaderData';

const page = async() => {
       let ReviewData;
       try {
         ReviewData = await HeaderDatas("/acf-options");
       } catch (error) {
         console.error("Error fetching data:", error);
         return <div>Error loading data.</div>; 
       }
    
       if (!ReviewData) {
         return <div>No data available.</div>;
       }
  return (
    <Comment
      main_title={ReviewData?.logo_title}
      content={ReviewData?.logo_content}
      reviewlogos={ReviewData?.logo_slider}
      slider={ReviewData?.slider}
    />
  );
}

export default page