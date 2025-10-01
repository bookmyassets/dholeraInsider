import Image from "next/image";
import React from "react";
import westwynEstate1 from "@/app/assets/residential/estate1.webp";
import westwynEstate1M from "@/app/assets/residential/estate1M.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-screen max-sm:h-[50vh]">
        <Image
          src={westwynEstate1}
          alt="Maple - Your Gateway to Smart Investment"
          className="w-full h-full"
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
            alt="Marina Bay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Marina Bay
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Marina Bay is a modern plotting project situated in Village Gamph,
              Tehsil Dholera, District Ahmedabad, inside Dholera Smart City
              (Dholera SIR). With its strategic location near the
              Ahmedabad-Dholera Expressway and the proposed Dholera
              International Airport, the project offers secure residential plots
              with approvals and modern facilities as part of India’s Greenfield
              Smart City.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Located on Navda Highway, right at the entrance of Dholera SIR (0
              km) and close to TP 5, Marina Bay places you at the center of a
              rapidly developing smart city corridor. Every plot here is
              designed as a secure, future-ready investment that grows as
              Dholera transforms.
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
            alt="Marina Bay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Marina Bay?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Location Strength
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Inside Dholera SIR, well-connected to the expressway,
                    airport, and Dholera Metro City.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Future Value Growth
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Investing at the development stage of Dholera Smart City
                    ensures strong appreciation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Safe Purchase
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Every plot is NA/NOC approved, with clear titles and
                    registry-ready documents.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Planned Township
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated campus, internal roads, electrification, drainage, and
                    green zones.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Flexible Options
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Various plot sizes and payment flexibility make it suitable
                    for both investors and end-users.
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
