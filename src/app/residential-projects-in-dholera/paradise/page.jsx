"use client";
import Image from "next/image";
import React, { useState } from "react";
import westwynEstate1 from "@/app/assets/residential/paradise.webp";
import westwynEstate1M from "@/app/assets/residential/paradise-mob.webp";
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

  return (
    <>
      <div>
        <div className="relative w-full h-[80vh] max-sm:h-[60vh]">
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
                  <a href="/residential-projects-in-dholera/westwyn-estate">
                    <h1 className="text-2xl font-bold text-teal-900 hover:text-teal-800 mb-2 leading-tight">
                      <span className="text-base font-bold text-teal-900">
                        Explore Our Latest Project
                      </span>{" "}
                      <br /> WestWyn Estate
                    </h1>
                  </a>
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
      </div>

      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
            alt="Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Paradise
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Paradise is a thoughtfully planned plotting project in Village
              Shela, Taluka Dholera, District Ahmedabad, within the upcoming
              Dholera Smart City (Dholera SIR). Close to the Ahmedabad–Dholera
              Expressway and the future Dholera International Airport, Paradise
              offers buyers a perfect balance of security, planning, and
              connectivity inside India’s first Greenfield Smart City.
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
            alt="Paradise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Paradise?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Prime Connectivity
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Located inside Dholera SIR with quick access to the
                    expressway, airport, and industrial hubs of Dholera Metro
                    City.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Future Growth
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Early investment entry into the Dholera Smart City project,
                    giving scope for strong value appreciation.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Legal & Transparent
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Fully NA/NOC approved, clear titles, and registry-ready
                    plots.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Lifestyle Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated entry, wide roads, electrification, water facilities,
                    and landscaped green areas.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Investor-Oriented Options
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Flexible plot sizes and convenient plans that cater to every
                    type of investor.
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
