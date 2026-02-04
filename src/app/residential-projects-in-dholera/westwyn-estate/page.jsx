"use client";
import Image from "next/image";
import React, { useState } from "react";
import westwynEstate1 from "@/app/assets/estate.webp";
import westwynEstate1M from "@/app/assets/residential/estate1M.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";
import { AnimatePresence } from "framer-motion";
import BrochureDownload from "@/app/components/BrochureDownload";
import PrimeLocationSection from "./PrimeLocations";

const FeatureCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-xl p-4 border hover:bg-teal-700 group border-gray-200 text-center transition-colors duration-300 ease-in-out">
    <div className="w-12 h-12 bg-blue-100 group-hover:text-white group-hover:scale-110 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 ease-in-out">
      {icon}
    </div>
    <h4 className="group-hover:text-white group-hover:scale-110 font-semibold text-gray-900 text-sm mb-1 transition-all duration-300 ease-in-out">
      {title}
    </h4>
    <p className="group-hover:text-white group-hover:scale-110 text-[#151f28] font-bold text-lg transition-all duration-300 ease-in-out">
      {value}
    </p>
  </div>
);

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
      icon: "👵",
      title: "Senior Citizen Zone",
    },
    {
      icon: "📱",
      title: "App-Based Society Management",
    },
    {
      icon: "📹",
      title: "24/7 Security & CCTV Surveillance",
    },
  ];

  const projectFeatures = [
    { icon: "🏠", title: "Plot Size", value: "151 and 198 Sq.Yards" },
    { icon: "💰", title: "Starting Price", value: "₹6,500/Sq.Yd" },
    { icon: "🏗️", title: "Project Type", value: "Residential Plots" },
    { icon: "📍", title: "Location", value: "0 KM from Dholera SIR" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Dholera Insider",
            url: "https://dholerainsider.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://dholerainsider.com/residential-projects-in-dholera/westwyn-estate{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      <title>
        WestWyn Estate Dholera – Premium Dholera Plots in Smart City Dholera
      </title>
      <meta
        name="description"
        content="Explore WestWyn Estate Dholera plots in smart city Dholera with strong Dholera investment potential in Gujarat’s Dholera Smart City."
      />
      <meta
        name="keywords"
        content="WestWyn Estate Dholera, Dholera plots, Dholera Smart City, Dholera investment, investment in Dholera"
      />
      <link
        rel="canonical"
        href="https://www.dholerainsider.com/residential-projects-in-dholera/westwyn-estate"
      />
      <div className="relative w-full h-[80vh] max-sm:h-[50vh]">
        <Image
          src={westwynEstate1}
          alt="WestWyn Estate in Dholera SIR"
          className="w-full h-full max-sm:hidden"
          priority
        />
        <Image
          src={westwynEstate1M}
          alt="WestWyn Estate in Dholera SIR"
          className="w-full h-full object-cover md:hidden"
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
              </div>

              {/* Middle Column - Title & Description */}
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-teal-900 mb-2 leading-tight hover:text-teal-800 transition-colors">
                  <p>Immediate Possession</p>
                </h1>
                <div className="text-2xl text-center font-bold">
                  ₹6,500
                  <span className="text-sm ml-1">/Sq.Yd</span>
                </div>
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
                <div className="text-teal-900 text-xl text-center font-semibold hover:text-teal-800 transition-colors"></div>
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
                ₹6,500
                <span className="text-sm text-gray-600 ml-1">/Sq.Yd</span>
              </div>
            </div>

            {/* Title & Description */}
            <div>
              <h1 className="text-3xl font-bold text-teal-900 mb-2 leading-tight hover:text-teal-800 transition-colors">
                <p>Immediate Possession</p>
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
              {/* <div className="text-teal-900 text-xl text-center font-semibold hover:text-teal-800 transition-colors">
                <p>Immediate Possession</p>
              </div> */}
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
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <h1 className="text-2xl md:text-4xl md:text-center font-bold text-white mb-6">
              WestWyn Estate <br />{" "}
              <span className="italic">Premium Residential Plots </span>
            </h1>
            <div className="max-w-5xl mx-auto">
              <p className="text-lg text-gray-100 leading-relaxed">
                WestWyn Estate is a premium residential plotting project in
                Dholera Smart City, Gujarat, designed for smart living and
                long-term investment. Strategically located at 0 km from Dholera
                SIR, close to TP 5, offering excellent connectivity to major
                mega projects in Dholera Smart City. Overall, it is a secure
                Investment for those looking to invest in Dholera plots with
                strong future appreciation.
              </p>
              <br />
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {projectFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <PrimeLocationSection />
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
          <div className="max-w-6xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-xl md:text-4xl font-bold text-white mb-8">
                Why Invest in WestWyn Estate?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
                    Prime Location Advantage
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Strategically positioned on Vadhela-Navda Highway, 0 km from
                    Dholera SIR, close to TP 5, and only 15 minutes away from
                    the activation area.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
                    Connectivity to Mega Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Minutes from the upcoming Dholera International Airport,
                    Ahmedabad–Dholera Expressway, and proposed monorail.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
                    Secure & Approved Investment
                  </h3>
                  <p className="text-gray-200 text-sm">
                    NA/NOC cleared, AUDA-registered, and title-clear plots.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
                    High Appreciation Potential
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Early investors benefit from rapid value growth.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
                    Modern Living & Lifestyle
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Gated community with green landscapes, wide roads, and
                    amenities for comfort, security, and sustainability.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ">
                  <h3 className="text-lg md:text-xl font-semibold text-teal-300 mb-3">
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
              <h2 className="text-xl md:text-4xl font-bold text-white mb-8">
                Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="bg-teal-500/20 backdrop-blur-sm rounded-lg p-4 text-center border border-teal-400/30 hover:bg-teal-500/30 transition-all duration-300"
                  >
                    <div className="text-xl md:text-4xl mb-2">
                      {amenity.icon}
                    </div>
                    <p className="text-white font-medium text-lg">
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
