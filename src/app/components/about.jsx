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
    <>
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
            <p className="text-9xl max-sm:text-5xl text-teal-300 opacity-10 font-black text-center z-0 absolute top-0 left-0 w-full">
              Inside Dholera
            </p>
            <p className="text-4xl text-white font-bold text-center z-20 relative drop-shadow-lg">
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
<div className='bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900 min-h-screen'>


        {/* Why Dholera Smart City Section */}
        <div className="pt-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl max-sm:text-3xl font-bold text-white mb-4">
              Why <span className="text-teal-400">Dholera Smart City</span>?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
          </div>
          <div className="relative justify-center items-center">
          <p className="font-medium text-base text-center text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Real estate is &quot;property consisting of land and the buildings on
            it, along with its natural resources such as crops,
            <br className="hidden md:block" /> 
            minerals or water, immovable property of this nature; an
            interest vested in this (also) an item of real property,
            <br className="hidden md:block" /> 
            (more generally) buildings or housing in general.
          </p>
        </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-teal-900/20 rounded-3xl p-8 backdrop-blur-sm border border-teal-500/20 shadow-2xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              <span className="font-bold text-teal-400">Dholera Smart City</span> is not just a plan — it's a powerful opportunity. 
              Backed by the government and built with world-class infrastructure, this futuristic city is attracting investors 
              from across India and abroad. Here's why smart investors are choosing Dholera:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Price Appreciation */}
              <div className="bg-gradient-to-br from-gray-700/30 to-teal-800/20 p-6 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">1</div>
                  <h3 className="text-xl font-bold text-teal-400">Price Appreciation</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  As development moves forward, land value in Dholera is increasing year by year. Early investors 
                  can benefit from significant price growth. Dholera Smart City is still in its early phase — 
                  perfect timing for smart buyers.
                </p>
              </div>

              {/* Rental Income */}
              <div className="bg-gradient-to-br from-gray-700/30 to-teal-800/20 p-6 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">2</div>
                  <h3 className="text-xl font-bold text-teal-400">Rental Income</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  As businesses, industries, and families move into Dholera Smart City, demand for homes and 
                  commercial spaces will grow. Earn steady rental income from your investment in plots, 
                  shops, or homes.
                </p>
              </div>

              {/* Government-Backed Development */}
              <div className="bg-gradient-to-br from-gray-700/30 to-teal-800/20 p-6 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">3</div>
                  <h3 className="text-xl font-bold text-teal-400">Government-Backed Development</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Fully supported by Central and Gujarat State Governments. Part of the Delhi-Mumbai Industrial 
                  Corridor (DMIC) and managed by DSIRDA. This ensures fast, planned, and safe development.
                </p>
              </div>

              {/* Early Mover Advantage */}
              <div className="bg-gradient-to-br from-gray-700/30 to-teal-800/20 p-6 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">4</div>
                  <h3 className="text-xl font-bold text-teal-400">Early Mover Advantage</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Property prices are much lower compared to what they will be in 5–10 years. Investing early 
                  gives you access to the best locations and highest returns before full development.
                </p>
              </div>

              {/* Industrial Growth Hub */}
              <div className="bg-gradient-to-br from-gray-700/30 to-teal-800/20 p-6 rounded-2xl border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">5</div>
                  <h3 className="text-xl font-bold text-teal-400">Industrial Growth Hub</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Designed as a global industrial and economic zone. Companies in renewable energy, 
                  manufacturing, logistics, and IT are showing interest. Job creation and housing demand 
                  will grow rapidly.
                </p>
              </div>
            </div>
          </div>
        </div>
</div>


              </>
  );
}