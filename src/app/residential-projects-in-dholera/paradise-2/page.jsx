import Image from "next/image";
import React from "react";
import westwynEstate1 from "@/app/assets/residential2/paradise2.webp";
import westwynEstate1M from "@/app/assets/residential/paradise2-mob.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[80vh] max-sm:h-[50vh]">
             <Image
                src={westwynEstate1}
                alt="Maple - Your Gateway to Smart Investment"
               
                className="w-full h-full max-sm:hidden"
                priority
              />
              <Image
                src={westwynEstate1M}
                alt="Maple - Your Gateway to Smart Investment"
               
                className="w-full h-full md:hidden"
                priority
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-sm px-4">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg">
                  <a href="/residential-projects-in-dholera/westwyn-estate">
                    Get Registry-ready Plots under ₹10 Lakhs in Dholera
                  </a>
                </button>
              </div>
            </div>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Paradise 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Paradise 2
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Paradise 2, located in Village Shela, Tehsil Dholera, District
              Ahmedabad, is part of the fast-growing Dholera Smart City (Dholera
              SIR). Designed with futuristic planning and secure legal
              approvals, it enjoys excellent proximity to the Ahmedabad-Dholera
              Expressway and the upcoming Dholera International Airport, making
              it a safe and profitable investment in India’s first Greenfield
              Smart City.
            </p>
          </div>
        </div>
      </div>

      <div>
        <CommonForm title="Registry Ready Plots Under ₹10 Lakhs" />
      </div>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Paradise 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Paradise 2?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Strategic Location
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Inside Dholera SIR, directly linked to the expressway, airport, and Dholera Metro City.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                   Future Appreciation
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Early entry into the Dholera Smart City project assures long-term ROI.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Legal Security
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Well-planned township with gated security, wide roads, power, water, and landscaped spaces.


                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Investor-Friendly
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Multiple plot sizes and flexible payment terms for every investor
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Modern Living & Lifestyle
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated community with green landscapes, wide roads, and
                    amenities for comfort, security, and sustainability.
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
      <PopupScroll title="Registry Ready Plots Under ₹10 Lakhs" />
    </>
  );
}
