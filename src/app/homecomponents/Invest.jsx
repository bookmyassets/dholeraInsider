import React from "react";
import Link from "next/link";
import sample1 from "@/app/assets/home/Invest_in_dholera.webp";
import Image from "next/image";

export default function Invest() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-teal-900">
      {/* Why Dholera Smart City Section */}
      <div className="pt-8 max-w-6xl mx-auto px-4">
        <div className="text-center ">
          <h2 className="text-4xl max-sm:text-3xl font-bold text-white mb-4">
            Invest in <span className="text-teal-400">Dholera :</span> High
            Growth, Secure Future
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="">
          <div className="flex flex-col md:flex-row px-4 md:px-8 py-12 gap-6 md:gap-12 max-w-7xl mx-auto">
            <div className="w-full md:w-2/5 pl-2 pr-2">
            <div className="w-full h-full">
              <Image src={sample1} alt="sample1" />
            </div>
            </div>

            {/* Right Section (60%) */}
            <div className="w-full md:w-3/5 pl-2 pr-2 space-y-6">
              <div>
                <p className="text-gray-100">
                  Dholera Smart City is India’s first Greenfield Smart City,
                  built with cutting-edge infrastructure and designed for
                  exponential growth. This government-backed project offers
                  unmatched opportunities in the industrial, commercial, and
                  residential sectors. With rapid development and strategic
                  advantages, Dholera SIR is the ideal destination for
                  high-return investments and a sustainable future.
                </p>
              </div>

              <div>
                <p className="text-gray-100">
                  Whether you’re looking for premium investments or planning to
                  buy plots under 10 lakh in Dholera, Dholera Insider connects
                  you with secure, NA/NOC-approved, plan-passed, title-cleared
                  projects that are registry-ready and positioned for long-term
                  growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
