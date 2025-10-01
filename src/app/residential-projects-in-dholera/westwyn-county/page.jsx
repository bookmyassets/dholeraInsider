import Image from "next/image";
import React from "react";
import westwynEstate1 from "@/app/assets/residential2/county.webp";
import westwynEstate1M from "@/app/assets/residential/county-mob.webp";
import CommonForm from "@/app/components/CommonForm";
import PopupScroll from "@/app/components/PopUpScroll";

export default function Hero() {
  const amenities = [
    {
      icon: "👥", // Users
      title: "Club House & Co-Working Space",
    },
    {
      icon: "🏰", // Shield
      title: "Gated Community",
    },
    {
      icon: "⚡", // Car
      title: "EV Charging Station",
    },
    {
      icon: "🧒", // Baby
      title: "Kids Play Area",
    },
    {
      icon: "📹", // Shield
      title: "24/7 Security & CCTV Surveillance",
    },
    {
      icon: "🏊", // Waves
      title: "Swimming Pool",
    },
    {
      icon: "📱", // Globe
      title: "App-based Society Management",
    },
    {
      icon: "🌳", // Trees
      title: "Lush Green Surroundings",
    },
    {
      icon: "💪", // Baby
      title: "Indoor Games & Gymnasium",
    },
    {
      icon: "💡", // Lightbulb
      title: "Automated Street Light",
    },
    {
      icon: "🏃", // Activity
      title: "Jogging Track",
    },
    {
      icon: "🛣️", // FaRoad
      title: "Internal Roads",
    },
    {
      icon: "📍", // SquareDashed
      title: "Project Boundary",
    },
    {
      icon: "🧘", // Heart
      title: "Yoga Deck & Senior Citizen Zone",
    },
    {
      icon: "💧", // Zap
      title: "Power & Water Supply",
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
            alt="WestWyn County"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About WestWyn County
            </h1>

            <p className="text-lg text-gray-100 leading-relaxed">
              WestWyn County brings a secure and future-ready investment
              opportunity in Dholera SIR, offering 100% government-approved,
              clear-title plots. Backed by the vision of Dholera Smart City, the
              project caters to both Indian and NRI investors with
              registry-ready documentation, flexible payment plans, resale
              support, and buy-back assistance*. It’s a hassle-free way to own a
              piece of India’s most ambitious greenfield smart city.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Located on the Fedra–Pipli State Highway (100 ft road), WestWyn
              County enjoys one of the most connected addresses in Dholera. The
              project is just 15 minutes away from Dholera International Airport
              and the Ahmedabad–Dholera Expressway, giving residents and
              investors direct access to Gujarat’s next big economic hub.
              Surrounded by upcoming residential sectors, industrial hubs, and
              commercial projects, this location combines convenience with
              long-term value growth.
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
            alt="WestWyn County"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-emerald-900/95 to-teal-900/95"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Why Invest Section */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Invest in WestWyn County?
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Prime Location for Growth
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Situated close to the growth corridor of Dholera SIR,
                    WestWyn County ensures investors gain early entry into the
                    fastest-developing sectors. Its proximity to mega projects
                    and smooth connectivity to Ahmedabad makes it a smart bet
                    for both living and investment.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Trusted Developer Legacy
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Built on years of consistent delivery, superior
                    construction, and glowing customer satisfaction the
                    developer you can depend on for transparency, quality, and
                    long-term value in every project.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Safe & Legal Investment
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Fully compliant plots - NA/NOC cleared, layout plan
                    sanctioned, and clear title -ready for registry and extra
                    support such as resale and buy-back. All legal approvals are
                    in place, so you can buy with peace of mind and confidence.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    High Appreciation Potential
                  </h3>
                  <p className="text-gray-200 text-sm">
                    With Dholera International Airport, Tata’s semiconductor
                    fab, and other industrial investments coming up, WestWyn
                    County plots are positioned for strong appreciation. Early
                    investors stand to gain the most as land values rise in this
                    government-supported smart city.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-teal-300 mb-3">
                    Backed by Smart City Infrastructure
                  </h3>
                  <p className="text-gray-200 text-sm">
                    As part of Dholera Smart City, WestWyn County benefits from
                    state and central government-led development. With
                    industrial parks, residential clusters, and mega
                    infrastructure projects underway, the area is primed for
                    sustained growth.
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
    </>
  );
}
