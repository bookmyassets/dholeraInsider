import React from "react";
import sample1 from "@/app/assets/home/estate1.webp";
import sample1M from "@/app/assets/home/estate.webp";
import Image from "next/image";

export default function WestWyn_Estate() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900 pb-12">
      {/* WestWyn Estate Section */}
      <div className="pt-12 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-teal-400 mb-4">
            WestWyn Estate -{" "}
            <span className="text-white">Premium Residential Plots 0 km from Dholera SIR</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
           Invest Today in Dholera’s Most Promising Landmark Project
          </p>
        </div>

        {/* Image Section - Full Width Top */}
        <div className="mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full md:h-[50vh] bg-gradient-to-br from-teal-900 to-gray-900 flex items-center justify-center">
              <Image src={sample1} alt="WestWyn Estate in Dholera" className="object-cover max-sm:hidden" />
              <Image src={sample1M} alt="WestWyn Estate in Dholera" className="object-contain md:hidden" />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">WestWyn Estate</h3>
              <p className="text-teal-300">Gateway to Dholera SIR</p>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Strategic Location Card */}
          <div className="bg-gray-800/50 rounded-xl p-6 border-l-4 border-teal-400">
            <h3 className="text-2xl font-bold text-white mb-6">
              Strategic Location
            </h3>
            <p className="text-gray-200 mb-4">
              Located on the Vadhela–Navda Highway, WestWyn Estate is the first
              project on this stretch and sits at 0 km from the Dholera SIR
              boundary.
            </p>
            <div className="grid gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-100">
                  5 minutes to Ahmedabad–Dholera Expressway
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-100">
                  15 minutes to Activation Area
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-100">
                  25 minutes to Tata Semiconductor Plant
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-gray-100">
                  30 minutes to Dholera International Airport
                </span>
              </div>
            </div>
            <p className="text-teal-300 font-semibold mt-4 text-2xl">
              Unbeatable connectivity in Dholera and future-ready growth
              potential.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white mt-4 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            <a href="/residential-projects-in-dholera/westwyn-estate">

            Explore Plots under ₹ 10 Lakhs in Dholera
            </a>
          </button>
          </div>

          {/* Why Invest Section */}
          <div className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Invest in WestWyn Estate?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold">
                    Prime Location
                  </h4>
                  <p className="text-gray-200">
                    At the entrance of Dholera SIR, near TP 5.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold">
                    Strong Connectivity
                  </h4>
                  <p className="text-gray-200">
                    Expressway, airport & proposed metro at your doorstep.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold">
                    Government-Backed Development
                  </h4>
                  <p className="text-gray-200">
                    Part of India's first smart city under the Delhi–Mumbai
                    Industrial Corridor (DMIC).
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold">
                    Safe & Legal Investment
                  </h4>
                  <p className="text-gray-200">
                    Fully NA/NOC approved, plan-passed, and clear-title
                    registry-ready plots.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-teal-300 font-semibold">
                    Exceptional Growth
                  </h4>
                  <p className="text-gray-200">
                    Early entry ensures rapid appreciation as demand rises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action - Full Width Bottom */}
        {/* <div className="bg-gradient-to-r from-teal-600/20 to-teal-800/20 rounded-xl p-8 text-center border border-teal-500/30">
          <p className="text-xl text-white font-semibold mb-4">
            WestWyn Estate is not just a plot; it's a secure and future-ready
            investment opportunity in the heart of Gujarat's most ambitious
            smart city.
          </p>
          <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Explore Plots under ₹ 10 Lakhs in Dholera
          </button>
        </div> */}
      </div>
    </div>
  );
}
