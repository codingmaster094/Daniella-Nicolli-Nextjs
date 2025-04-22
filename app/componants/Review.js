// "use client";
// import { useEffect, useRef } from "react";

// const Comment = ({ main_title, content }) => {
//   const demoRef = useRef(null);
//   useEffect(() => {
//     const script = document.createElement("script");
//     // script.src = 'https://cdn.trustindex.io/loader.js?685f75744c9384582c0680b9051';
//     script.src = 'https://static.elfsight.com/platform/platform.js';
//     script.async = true;
//     script.defer = true;
//     script.onload = () => {
//       if (demoRef.current) {
//         demoRef.current.appendChild(script);
//       }
//     };
//     document.body.appendChild(script);
//   }, [demoRef]);

//   return (
//     <section className="py-[30px] md:py-[40px] lg:py-[50px]">
//       <div className="container mx-auto px-[15px]">
//         <div className="flex w-full max-w-[1440px] flex-col gap-6 md:gap-8 lg:gap-12 mx-auto text-center">
//           <div className="flex flex-col gap-6">
//             <h2 dangerouslySetInnerHTML={{ __html: main_title }}/>
//             {content && (
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: content
//                     ?.replace(/<p>/g, "")
//                     .replace(/<\/p>/g, "")
//                     .replace(/&/g, "&"),
//                 }}
//               />
//             )}
//           </div>
//           <div className="flex w-full  justify-center" ref={demoRef}>
//             <div
//               className="elfsight-app-6559ba62-111d-42bf-9e99-23f069924c5c"
//               data-elfsight-app-lazy
//             ></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Comment;
