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
        alt="Maple - Your Gateway to Smart Investment"
      />

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Maple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Maple
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Located in Village Gamph, Tehsil Dholera, District Ahmedabad, Maple Township sits right inside the expanding Dholera Smart City (Dholera SIR). With direct access to the Ahmedabad-Dholera Expressway and proximity to the planned Dholera International Airport, this project combines location advantages with lifestyle infrastructure, making it an ideal choice for investors and homeowners alike in India’s first Greenfield Smart City.

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
            alt="Maple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Maple?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Connectivity Advantage
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Inside Dholera SIR, with seamless links to the expressway, airport, and Dholera Metro City.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    High Returns
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Entry at an early stage of the Dholera Smart City project promises long-term appreciation
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Secure Purchase
                  </h3>
                  <p className="text-gray-200 text-sm">
                    All plots are NA/NOC approved, registry-ready, and carry clear titles.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Township Lifestyle
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Wide internal roads, electrification, drainage, water supply, and landscaped areas.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Investor Friendly
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Flexible plot sizes and affordable installment options.
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
