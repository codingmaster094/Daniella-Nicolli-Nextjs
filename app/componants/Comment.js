"use client";
import { useEffect, useRef } from "react";

const Comment = ({ main_title, content }) => {
  const demoRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    // script.src = 'https://cdn.trustindex.io/loader.js?685f75744c9384582c0680b9051';
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (demoRef.current) {
        demoRef.current.appendChild(script);
      }
    };
    document.body.appendChild(script);
  }, [demoRef]);

  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
          <div className="flex flex-col gap-6">
            <h2 dangerouslySetInnerHTML={{ __html: main_title }}/>
            {content && (
              <p
                dangerouslySetInnerHTML={{
                  __html: content
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, "")
                    .replace(/&/g, "&"),
                }}
              />
            )}
          </div>
          <div className="flex w-full  justify-center" ref={demoRef}>
            <div
              className="elfsight-app-6559ba62-111d-42bf-9e99-23f069924c5c"
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;


// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import CommitImage from "../../public/images/comment-img.png";
// import axios from "axios";

// const Comment = ({ main_title, content }) => {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
 

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await axios.get("/api/review");
//        console.log('response', response)
//       } catch (error) {
//         setError(error.message);
//       } 
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <section className="py-10 md:py-[70px] lg:py-[100px] bg-Bgslate">
//       <div className="container mx-auto px-[15px]">
//         <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center ">
//           <div className="flex flex-col gap-6">
//             <h2>{main_title}</h2>
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: content
//                   ?.replace(/<p>/g, "")
//                   .replace(/<\/p>/g, "")
//                   .replace(/&/g, "&"),
//               }}
//             ></p>
//           </div>
//           <div className="flex w-full shadow-shadow">
//             <Image src={CommitImage} alt="commitImage" className="w-full" />
//           </div>

//           <h2 className="text-2xl mt-10">Google Reviews</h2>
//           {loading ? (
//             <p>Loading reviews...</p>
//           ) : error ? (
//             <p>Error fetching reviews: {error}</p>
//           ) : reviews.length === 0 ? (
//             <p>No reviews available.</p>
//           ) : (
//             <ul className="mt-5 space-y-4">
//               {reviews.map((review) => (
//                 <li key={review.author_name} className="border p-4">
//                   <strong>{review.author_name}</strong>
//                   <p>Rating: {review.rating}</p>
//                   <p>{review.text}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Comment;