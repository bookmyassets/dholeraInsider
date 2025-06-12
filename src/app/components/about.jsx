import React from 'react';
import Image from 'next/image';
import timeline1 from '@/app/assets/home/timeline1.svg'
import timeline2 from '@/app/assets/home/timeline2.svg'
import timeline3 from '@/app/assets/home/timeline3.svg'
import timeline4 from '@/app/assets/home/timeline4.svg'
import timeline5 from '@/app/assets/home/timeline5.svg'
import timelineMobile from "@/app/assets/home/timeline_mobile.webp"

export default function About() {
  return (
    <div id="about-container" className="relative p-4 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900 min-h-screen">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 to-gray-900/20 pointer-events-none"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>

      <div className="relative z-10">
        <div className="flex justify-center items-center">
          <button className="relative mt-24 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 px-6 py-2 rounded-2xl text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-10 w-auto font-semibold text-sm uppercase cursor-pointer border border-teal-400/30">
            <span className="relative z-10">Dholera Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"></div>
          </button>
        </div>

        <div className="relative">
          <div className="flex flex-col justify-center items-center mt-20">
            <p className="text-9xl sm:text-10xl text-teal-300 opacity-10 font-black text-center z-0 absolute top-0 left-0 w-full">
              Inside Dholera
            </p>
            <p className="text-4xl text-white font-bold text-center z-20 relative mt-16 drop-shadow-lg">
              We Will Find the Best Option
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mt-4 rounded-full"></div>
          </div>
        </div>

        <div className="relative justify-center items-center">
          <p className="font-medium text-base text-center mt-20 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Real estate is &quot;property consisting of land and the buildings on
            it, along with its natural resources such as crops,
            <br className="hidden md:block" /> 
            minerals or water, immovable property of this nature; an
            interest vested in this (also) an item of real property,
            <br className="hidden md:block" /> 
            (more generally) buildings or housing in general.
          </p>
        </div>

        {/* Timeline section with enhanced styling */}
        <div className='flex justify-center items-center max-sm:hidden mt-16'>
          <div className="flex space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-teal-800/30 rounded-2xl backdrop-blur-sm border border-teal-500/20 shadow-2xl">
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={timeline1}
                alt='timeline'
                className="drop-shadow-lg"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={timeline2}
                alt='timeline'
                className="drop-shadow-lg"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={timeline3}
                alt='timeline'
                className="drop-shadow-lg"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={timeline4}
                alt='timeline'
                className="drop-shadow-lg"
              />
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <Image
                src={timeline5}
                alt='timeline'
                className="drop-shadow-lg"
              />
            </div>
          </div>
        </div>
        
        <div className='md:hidden mt-16 flex justify-center'>
          <div className="p-4 bg-gradient-to-r from-gray-800/50 to-teal-800/30 rounded-2xl backdrop-blur-sm border border-teal-500/20 shadow-2xl">
            <Image
              src={timelineMobile}
              alt='timeline mobile'
              className="drop-shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}