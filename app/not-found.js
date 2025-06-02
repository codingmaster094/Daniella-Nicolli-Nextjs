// import React from 'react'
// import Link from 'next/link'
// export default function Custom404(){
//   return (
//     <>
//     <section className="py-10 md:py-[70px]  lg:py-[100px]">
//          <div className="container mx-auto px-[15px]">
//             <div className="flex flex-col gap-6 sm:gap-10 text-center">
//             <h1 className='text-Teal text-center'>Huch! Diese Seite kann nicht gefunden werden.</h1>
//               <div className='text-Teal text-[45px] 2xl:text-[72px] font-bold'>404</div>
//               <p>Es sieht so aus, als ob an diesem Ort nichts gefunden wurde. Vielleicht versuchen Sie es mit einem der unten stehenden Links oder einer Suche?</p> 
//               <Link href="/"  aria-label="header-link" role="link" className="flex self-center items-center justify-center text-center mt-5   bg-Teal text-white hover:bg-teal-600 font-normal px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in cursor-pointer"  >
//                      Nach Hause gehe
//               </Link>
//             </div>
//          </div>
//     </section>

//      </>
//   )
// }

import { redirect } from "next/navigation";

export default function Custom404() {
  redirect("/");
  return null;
}

