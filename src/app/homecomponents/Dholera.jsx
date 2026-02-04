import React from "react";
import Link from "next/link";
import sample1 from "@/app/assets/home/Invest_in_dholera.webp";
import Image from "next/image";

export default function Dholera() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900">
      {/* Why Dholera Smart City Section */}
      <div className="pt-8 max-w-6xl mx-auto px-4">
        <div className="text-center ">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-white mb-4">
           Why Invest in Dholera Smart City

          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-12 gap-6 md:gap-12 max-w-7xl mx-auto">
            <div className="w-full md:w-2/5 pl-2 pr-2">
              <div className="w-full h-full">
                <Image src={sample1} alt="Dholera Smart City" />
              </div>
            </div>

            {/* Right Section (60%) */}
           <div className="w-full md:w-3/5 pl-2 pr-2 space-y-6">
  <div>
    <p className="text-gray-100">
      <strong>India’s First Greenfield Smart City:</strong> Dholera Smart City is
      one of India’s most ambitious government-backed projects, strategically
      developed under the Delhi–Mumbai Industrial Corridor (DMIC) in Gujarat.
      Planned as a next-generation smart city, Dholera is designed for
      sustainable urban living, advanced infrastructure, and large-scale
      industrial growth.
    </p>
  </div>

  <div>
    <p className="text-gray-100">
      <strong>Strong Government & Corporate Support:</strong> Dholera is emerging
      as a major semiconductor and industrial hub, backed by strong government
      initiatives and investments from leading companies such as TATA, ReNew,
      Jabil, INOX Air Products, Reliance Industries, Adani Group, and NextGen
      Group.
    </p>
  </div>

  <div>
    <p className="text-gray-100">
      <strong>World-Class Infrastructure:</strong> The city offers plug-and-play
      industrial infrastructure, smart road networks, well-planned industrial
      zones, and sustainable urban development with modern utilities and smart
      governance systems.
    </p>
  </div>

  <div>
    <p className="text-gray-100">
      <strong>Excellent Connectivity:</strong> Dholera enjoys seamless
      connectivity through the Ahmedabad–Dholera Expressway, the upcoming
      Dholera International Airport, the proposed metro rail, and its close
      proximity to Ahmedabad.
    </p>
  </div>

  <div>
    <p className="text-gray-100">
      <strong>High Investment Returns:</strong> With affordable land prices at
      present, rapid industrial development, and rising demand for residential
      and commercial plots, Dholera presents a strong opportunity for long-term
      real estate investment.
    </p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
