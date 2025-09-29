import Image from "next/image";
import React from "react";
import westwynEstate1 from "@/app/assets/residential/estate1.webp";
import westwynEstate1M from "@/app/assets/residential/estate1M.webp";

export default function Hero() {

    const amenities = [
    {
      icon: "🚗",
      title: "EV Charging Station"
    },
    {
      icon: "⚡",
      title: "Power & Water Supply"
    },
    {
      icon: "🏃‍♂️",
      title: "Jogging Track & Yoga Deck"
    },
    {
      icon: "🧒",
      title: "Kids Play Area"
    },
    {
      icon: "📍",
      title: "Project Boundary"
    },
    {
      icon: "🏘️",
      title: "Gated Community"
    },
    {
      icon: "🛣️",
      title: "Internal Roads"
    },
    {
      icon: "📹",
      title: "24/7 Security & CCTV Surveillance"
    },
    {
      icon: "📱",
      title: "App-Based Society Management"
    },
    {
      icon: "👵",
      title: "Senior Citizen Zone"
    }
  ];


  return (
    <>
      <Image
        src={westwynEstate1}
        alt="WestWyn Estate - Your Gateway to Smart Investment"
      />

      <div className="relative min-h-screen">
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
        <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About WestWyn Estate
            </h1>

            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              We are excited to unveil our next milestone – WestWyn Estate.
              Backed by investor trust and driven by our commitment to growth,
              excellence, and reliability, this new project marks the beginning
              of another promising chapter at a prime location.
            </p>

            <p className="text-lg text-gray-200 mb-12 leading-relaxed">
              Located on Navda Highway, right at the entrance of Dholera SIR (0
              km) and close to TP 5, WestWyn Estate places you at the center of
              a rapidly developing smart city corridor. Every plot here is
              designed as a secure, future-ready investment that grows as
              Dholera transforms.
            </p>

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
                  <p className="text-white font-medium text-sm">{amenity.title}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
