import Link from 'next/link'
import React from 'react'

const Ubermichlist = () => {
  return (
    <section className="pb-10 md:pb-[70px] lg:pb-[100px]  w-full ">
    <div className="w-full container mx-auto px-[15px]">
        <div className="flex flex-col border border-Teal gap-6 sm:gap-8 mx-auto  p-6 lg:p-[80px]">
          <h2 className='text-center'>Aus- und Fortbildungen u.a.</h2>
          <div className="flex gap-6 lg:gap-12 flex-col flex-wrap lg:flex-row">
               <ul className='Dash-menu flex flex-1 flex-col gap-4'>
                 <li>
                    <span className='text-a font-medium'>Blutegeltherapie</span>
                    <span>Blutegelfarm, 35444 Biebertal</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Biolift nach Prof. Dr. Rothschild</span>
                    <span>Fa.Vitorgan / Siegertraining Bad Homburg</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Fadenlifting</span>
                    <span>u.a. Firma W & O, Bad Nauheim</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Homöopathie</span>
                    <span>Anette Koch klassische Homöopathie , Mainz</span>
                 </li>
               </ul>
               <ul className='Dash-menu flex flex-1 flex-col gap-4'>
                 <li>
                    <span className='text-a font-medium'>Mykotherapie Master</span>
                    <span>Institut Mykotroph, 63694 Limeshain</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Faltenunterspritzung</span>
                    <span>Firma Teoxane</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Mesotherapie</span>
                    <span>Deutschen Gesellschaft für Mesotherapie München,</span>
                 </li>
                 <li>
                       Weiterbildung in klassischer Homöopathie bei u.a Carl Classen arscurandi, Karlsruhe
                 </li>
               </ul>
               <ul className='Dash-menu flex flex-1 flex-col gap-4'>
                 <li>
                    <span className='text-a font-medium'>Blutegeltherapie</span>
                    <span>Blutegelfarm, 35444 Biebertal</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Biolift nach Prof. Dr. Rothschild</span>
                    <span>Fa.Vitorgan / Siegertraining Bad Homburg</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Fadenlifting</span>
                    <span>u.a. Firma W & O, Bad Nauheim</span>
                 </li>
                 <li>
                    <span className='text-a font-medium'>Homöopathie</span>
                    <span>Anette Koch klassische Homöopathie , Mainz</span>
                 </li>
               </ul>
          </div>
              <Link href="#" className='flex self-center text-center bg-Teal text-white hover:bg-teal-600  font-normal  px-5 py-3 sm:px-9 sm:py-4 transition-all duration-700 ease-in' aria-label='link-button' role='link'>
                 TERMIN BUCHEN
              </Link>
        </div>
    </div>
    </section>
  )
}

export default Ubermichlist