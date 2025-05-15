// 'use client'
// import React, { useEffect, useRef, useState } from "react";

// const Counter = ({ main_title, all_leistungen }) => {
//   const [counters, setCounters] = useState([]);
//   const [hasStarted, setHasStarted] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => setHasStarted(true), 500);
//         } else {
//           setHasStarted(false);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px 0px 0px 0px",
//         threshold: 0.5,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (hasStarted && all_leistungen && all_leistungen.length > 0) {
//       setCounters(all_leistungen.map(() => 0));

//       all_leistungen.forEach((item, index) => {
//         const rawValue = item.ueber_all_leistungen_counter || "0";
//         const isThousand = rawValue.toLowerCase().includes("k");
//         const target = isThousand
//           ? parseInt(rawValue.replace(/[^0-9]/g, ""), 10) * 1000
//           : parseFloat(rawValue);

//         let start = 0;
//         const increment = Math.ceil(target / 250);
//         const interval = setInterval(() => {
//           start += increment;
//           if (start >= target) {
//             start = target;
//             clearInterval(interval);
//           }
//           setCounters((prev) => {
//             const updated = [...prev];
//             updated[index] = start;
//             return updated;
//           });
//         }, 50);
//       });
//     }
//   }, [hasStarted, all_leistungen]);

//   const formatNumber = (num, index) => {
//     if (index === 0) {
//       return `+${Number(num).toLocaleString("en-US", {
//         minimumFractionDigits: num % 1 !== 0 ? 3 : 0,
//         maximumFractionDigits: num % 1 !== 0 ? 3 : 0,
//       })}`;
//     } else if (num >= 1000) {
//       return `${Math.floor(num / 1000)}k`;
//     }
//     return Number(num).toLocaleString("en-US", {
//       minimumFractionDigits: num % 1 !== 0 ? 3 : 0,
//       maximumFractionDigits: num % 1 !== 0 ? 3 : 0,
//     });
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="py-10 md:py-[70px] lg:py-[100px] bg-Teal"
//     >
//       <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
//         <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap text-white">
//           <div className="flex text-white relative">
//             <h2
//               className="text-white"
//               dangerouslySetInnerHTML={{
//                 __html: main_title,
//               }}
//             ></h2>
//           </div>
//           <div className="flex justify-between flex-col md:flex-row gap-8">
//             {all_leistungen &&
//               all_leistungen.map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-center gap-6 flex flex-col font-primry-font"
//                 >
//                   <span className="text-5xl font-bold counter">
//                     {counters.length > 0
//                       ? formatNumber(counters[index], index)
//                       : "+0"}
//                   </span>
//                   <p
//                     className="mt-2 text-a"
//                     dangerouslySetInnerHTML={{
//                       __html: item.ueber_all_leistungen_content
//                         ?.replace(/<p>/g, "")
//                         .replace(/<\/p>/g, "")
//                         .replace(/&amp;/g, "&"),
//                     }}
//                   ></p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Counter;

"use client";
import React from "react";

const Counter = ({ main_title, all_leistungen }) => {
  console.log('all_leistungen', all_leistungen)

  return (
    <section className="py-10 md:py-[70px] lg:py-[100px] bg-Teal">
      <div className="container mx-auto px-[15px] sm:px-[30px] lg:px-[61px]">
        <div className="flex text-center items-center justify-center flex-col gap-6 sm:gap-8 flex-wrap text-white">
          <div className="flex text-white relative">
            <h2
              className="text-white"
              dangerouslySetInnerHTML={{ __html: main_title }}
            ></h2>
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-8">
            {all_leistungen &&
              all_leistungen.map((item, index) => (
                <div
                  key={index}
                  className="text-center gap-6 flex flex-col font-primry-font"
                >
                  <span className="text-5xl font-bold counter">
                    {item.ueber_all_leistungen_counter}
                  </span>
                  <p
                    className="mt-2 text-a"
                    dangerouslySetInnerHTML={{
                      __html: item.ueber_all_leistungen_content
                        ?.replace(/<p>/g, "")
                        .replace(/<\/p>/g, "")
                        .replace(/&amp;/g, "&"),
                    }}
                  ></p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;


