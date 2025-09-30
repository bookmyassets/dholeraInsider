import Image from "next/image";
import React from "react";
import westwynEstate1 from "@/app/assets/residential/estate1.webp";
import westwynEstate1M from "@/app/assets/residential/estate1M.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";

export default function Hero() {

  return (
    <>
      <Image
        src={westwynEstate1}
        alt="WestWyn Estate - Your Gateway to Smart Investment"
      />

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="WestWyn Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About WestWyn Estate
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Paradise is a thoughtfully planned plotting project in Village Shela, Taluka Dholera, District Ahmedabad, within the upcoming Dholera Smart City (Dholera SIR). Close to the Ahmedabad–Dholera Expressway and the future Dholera International Airport, Paradise offers buyers a perfect balance of security, planning, and connectivity inside India’s first Greenfield Smart City.

            </p>
          </div>
        </div>
        </div>

        <div>
          <CommonForm title="Registry Ready Plots Under 10 Lakhs"/>
        </div>

        <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="WestWyn Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in WestWyn Estate?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Prime Connectivity
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Located inside Dholera SIR with quick access to the expressway, airport, and industrial hubs of Dholera Metro City.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Future Growth
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Early investment entry into the Dholera Smart City project, giving scope for strong value appreciation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                   Legal & Transparent
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Fully NA/NOC approved, clear titles, and registry-ready plots.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Lifestyle Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated entry, wide roads, electrification, water facilities, and landscaped green areas.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Investor-Oriented Options
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Flexible plot sizes and convenient plans that cater to every type of investor.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Trusted Developer Legacy
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Six projects successfully sold out, reflecting investor
                    trust.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <PopupScroll title="Registry Ready Plots Under 10 Lakhs"/>
    </>
  );
}
