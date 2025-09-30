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
        alt="Pride - Your Gateway to Smart Investment"
      />

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Pride"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Pride
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Pride is a large-scale plotting project situated in Village Kasindra, Tehsil Dholera, District Ahmedabad, inside the rapidly progressing Dholera Smart City (Dholera SIR). With easy access to the Ahmedabad-Dholera Expressway and close proximity to the upcoming Dholera International Airport, Pride offers buyers secure, legally approved residential plots in India’s Greenfield Smart City.

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
            alt="Pride"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Pride?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Strategic Advantage
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Located inside Dholera SIR with unmatched connectivity to the expressway, airport, and Dholera Metro City.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Future Appreciation
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Being part of an early-stage Dholera Smart City project promises significant ROI.

                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Investor Plans
                  </h3>
                  <p className="text-gray-200 text-sm">
                   Flexible sizes and affordable installment options for all categories of investors.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Legally Secure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    All plots are NA/NOC approved, registry-ready, and carry clear titles
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Planned Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated project with wide roads, electrification, water facilities, and landscaped green areas.

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
