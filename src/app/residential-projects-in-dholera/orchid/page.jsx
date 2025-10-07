"use client"
import Image from "next/image";
import React, { useState } from "react";
import westwynEstate1 from "@/app/assets/residential2/orchid.webp";
import westwynEstate1M from "@/app/assets/residential/orchid-mob.webp";
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
    <div className="relative">

      <Image
        src={westwynEstate1}
        alt="orchid"
        className="w-full h-full max-sm:hidden"
        priority
        />
      <Image
        src={westwynEstate1M}
        alt="orchid"
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
                    <button onClick={openBrochureForm} className="flex-1 bg-teal-900 text-white hover:bg-teal-800 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                      📄 Download Brochure
                    </button>
                  </div>
                  <div className="text-teal-900 text-xl font-semibold hover:text-teal-800 transition-colors">
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
                  <a href="/residential-projects-in-dholera/westwyn-estate">
                    <h1 className="text-2xl font-bold text-teal-900 hover:text-teal-800 mb-2 leading-tight">
                      <span className="text-base font-bold text-teal-900">
                        Explore Our Latest Project
                      </span>{" "}
                      <br /> WestWyn Estate
                    </h1>
                  </a>
                </div>

              {/* Contact & Buttons */}
              <div className="flex flex-col justify-between">
                <div className="flex items-center gap-2 text-gray-700 text-base mb-4">
                  <button onClick={openBrochureForm} className="flex-1 bg-teal-900 text-white hover:bg-teal-800 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5">
                    📄 Download Brochure
                  </button>
                </div>
                <div className="text-teal-900 text-xl font-semibold hover:text-teal-800 transition-colors">
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
            alt="Orchid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Orchid
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              Orchid is a premium residential plotting community situated in
              Gamph village, within the heart of the rapidly emerging Dholera
              Smart City (Dholera SIR). Strategically positioned along the DMIC
              corridor, Orchid brings investors the perfect mix of legally
              secure plots, modern township facilities, and digital ease of
              ownership.
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
            alt="Orchid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in Orchid?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Smart City Advantage
                  </h3>
                  <p className="text-gray-200 text-sm">
                    An exclusive entry into India’s first Greenfield Smart City,
                    backed by government-driven infrastructure
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Prime Location
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Located in Village Gamph, Tehsil Dholera, District
                    Ahmedabad, with strong links to the Ahmedabad–Dholera
                    Expressway, Dholera International Airport, and major DMIC
                    projects.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Safe & Legal Investment
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Every plot is NA/NOC approved, comes with clear titles, and
                    is registry-ready with plan pass certification
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Growth Potential
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Being part of an early-stage smart city ensures long-term
                    appreciation
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Lifestyle Amenities & Digital Ease
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated campus, internal roads, street lights, water, power,
                    CCTV, landscaped gardens, and an integrated digital booking
                    system with instant documents.
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
              title="Get the Dholera Brochure"
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
