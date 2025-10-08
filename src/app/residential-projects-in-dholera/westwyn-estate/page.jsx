"use client";
import Image from "next/image";
import React, { useState } from "react";
import westwynEstate1 from "@/app/assets/estate.webp";
import westwynEstate1M from "@/app/assets/residential/estate1M.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";
import { AnimatePresence } from "framer-motion";
import BrochureDownload from "@/app/components/BrochureDownload";

export default function Hero() {
  const [brochureFormOpen, setIsBrochureFormOpen] = useState(false);

  const openBrochureForm = () => {
    setIsBrochureFormOpen(true);
  };

  const closeBrochureForm = () => {
    setIsBrochureFormOpen(false);
  };

  const amenities = [
    {
      icon: "🚗",
      title: "EV Charging Station",
    },
    {
      icon: "⚡",
      title: "Power & Water Supply",
    },
    {
      icon: "🏃‍♂️",
      title: "Jogging Track & Yoga Deck",
    },
    {
      icon: "🧒",
      title: "Kids Play Area",
    },
    {
      icon: "📍",
      title: "Project Boundary",
    },
    {
      icon: "🏘️",
      title: "Gated Community",
    },
    {
      icon: "🛣️",
      title: "Internal Roads",
    },
    {
      icon: "📹",
      title: "24/7 Security & CCTV Surveillance",
    },
    {
      icon: "📱",
      title: "App-Based Society Management",
    },
    {
      icon: "👵",
      title: "Senior Citizen Zone",
    },
  ];

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
        <div className="absolute bottom-0 left-0 right-0 p-4 hidden md:block">
          <div className="bg-white/95 backdrop-blur-md rounded-t-2xl shadow-2xl border border-white/30 max-w-6xl mx-auto w-full">
            <div className="grid md:grid-cols-3 gap-6 p-6">
              {/* Left Column - Categories & Price */}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className="px-3 py-1.5 text-white bg-teal-900 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
                    Residential
                  </span>
                  <span className="px-3 py-1.5 bg-teal-900 text-white rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
                    🔥 Newly Launched
                  </span>
                </div>
                <div className="text-3xl font-bold">
                  ₹6,250
                  <span className="text-sm ml-1">/Sq.Yd</span>
                </div>
              </div>

              {/* Middle Column - Title & Description */}
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2 leading-tight hover:text-teal-800 transition-colors">
                  WestWyn Estate
                </h1>
              </div>

              {/* Right Column - Contact & Buttons */}
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2 text-gray-700 text-base mb-4">
                  <button
                    onClick={openBrochureForm}
                    className="flex-1 bg-teal-900 text-white hover:bg-teal-800 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    📄 Download Brochure
                  </button>
                </div>
                <div className="text-teal-900 text-xl text-center font-semibold hover:text-teal-800 transition-colors">
                  <p>Immediate Possession</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden mt-6">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 w-full">
          <div className="grid gap-6 p-6">
            {/* Categories & Price */}
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span className="px-3 py-1.5 text-white bg-teal-900 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
                  Residential
                </span>
                <span className="px-3 py-1.5 bg-teal-900 text-white rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
                  🔥 Newly Launched
                </span>
              </div>
              <div className="text-3xl font-bold text-teal-900">
                ₹6,250
                <span className="text-sm text-gray-600 ml-1">/Sq.Yd</span>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-2xl font-bold text-teal-900 mb-2 leading-tight hover:text-teal-800 transition-colors">
                WestWyn Estate
              </h1>
            </div>

            {/* Contact & Buttons */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2 text-gray-700 text-base mb-4">
                <button
                  onClick={openBrochureForm}
                  className="flex-1 bg-teal-900 text-white hover:bg-teal-800 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  📄 Download Brochure
                </button>
              </div>
              <div className="text-teal-900 text-xl text-center font-semibold hover:text-teal-800 transition-colors">
                <p>Immediate Possession</p>
              </div>
            </div>
          </div>
        </div>
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

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About WestWyn Estate
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              We are excited to unveil our next milestone – WestWyn Estate.
              Backed by investor trust and driven by our commitment to growth,
              excellence, and reliability, this new project marks the beginning
              of another promising chapter at a prime location.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Located on Navda Highway, right at the entrance of Dholera SIR (0
              km) and close to TP 5, WestWyn Estate places you at the center of
              a rapidly developing smart city corridor. Every plot here is
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
                    Prime Location Advantage
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Strategically positioned on Navda Highway, 0 km from Dholera
                    SIR, close to TP 5, and only 15 minutes away from the
                    activation area.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Connectivity to Mega Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Minutes from the upcoming Dholera International Airport,
                    Ahmedabad–Dholera Expressway, and proposed monorail.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Secure & Approved Investment
                  </h3>
                  <p className="text-gray-200 text-sm">
                    NA/NOC cleared, AUDA-registered, and title-clear plots.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    High Appreciation Potential
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Early investors benefit from rapid value growth.
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

            {/* Amenities Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-teal-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{amenity.icon}</div>
                    <p className="text-white font-medium text-sm">
                      {amenity.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupScroll title="Registry Ready Plots Under ₹10 Lakhs" />
      <AnimatePresence>
        {brochureFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
            <BrochureDownload
              title="Get WestWyn Estate Brochure"
              buttonName="Download Brochure"
              onClose={() => closeBrochureForm()}
              link="https://cdn.sanity.io/files/c3e1h345/projects/c9471499567c096befb9416aa99c7f0077900d11.pdf"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
