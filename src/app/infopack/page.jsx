"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import maps from "@/app/assets/locations.webp";
import videos from "@/app/assets/videos.webp";
import inventory from "@/app/assets/plot.webp";
import bg from "@/app/assets/bg-image.webp";

export default function Info() {
  const items = [
    {
      id: 1,
      title: "Locations",
      description: "Dholera SIR sits 100 km from Ahmedabad on the Delhi–Mumbai Industrial Corridor, with a planned expressway, metro, and international airport nearby.",
      link: "/infopack/locations",
      image: maps,
      tag: "Explore Map",
      highlights: ["100 km from Ahmedabad", "DMIC Corridor", "Airport Planned"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Videos",
      description: "Watch expert insights from urban planners and investors on why Dholera - India's first greenfield smart city - is a once-in-a-generation opportunity.",
      link: "/infopack/videos",
      image: videos,
      tag: "Watch Now",
      highlights: ["Smart City Vision", "ROI Analysis", "Infrastructure Plans"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Available Plots",
      description: "Browse live inventory of residential plots from 100 to 500+ sq yd. Prices are rising as milestones are met - secure your plot in Dholera SIR today.",
      link: "/infopack/Inventory",
      image: inventory,
      tag: "Book Now",
      highlights: ["100–500+ sq yd", "RERA Compliant", "Prices Rising"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="min-h-screen py-16 px-6 lg:px-12 relative"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Teal overlay */}
      <div className="absolute inset-0 bg-teal-900 bg-opacity-90" />

      <div className="relative z-10 max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <p className="text-teal-400 pt-8 text-xs font-semibold tracking-widest uppercase mb-2">
            Dholera Special Investment Region
          </p>
          <h1 className="text-4xl font-bold text-white leading-tight mb-3">
            Your Information Pack
          </h1>
          <p className="text-teal-200 text-sm leading-relaxed">
            India's first greenfield smart city - spread across 920 km², backed by ₹1 lakh crore in planned investment, and modelled on the success of GIFT City. Explore everything you need to make a confident investment decision.
          </p>
          <div className="mt-6 h-px bg-teal-700" />
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { value: "920 km²", label: "Smart City Area" },
            { value: "₹1L Cr+", label: "Planned Investment" },
            { value: "2× Delhi", label: "Size Comparison" },
            { value: "2031", label: "Target Completion" },
          ].map((s) => (
            <div key={s.label} className="bg-teal-800 bg-opacity-60 rounded-xl px-5 py-4 border border-teal-700">
              <p className="text-white text-2xl font-bold">{s.value}</p>
              <p className="text-teal-300 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <Link href={item.link} key={item.id}>
              <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">

                {/* Image */}
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-teal-800 bg-opacity-80 text-teal-100 text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <h3 className="text-teal-900 font-semibold text-base leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* Highlight chips */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.highlights.map((h) => (
                      <span key={h} className="bg-teal-50 text-teal-700 text-xs px-2 py-0.5 rounded-full border border-teal-100">
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-teal-700 text-xs font-semibold tracking-wide uppercase">
                      View Details
                    </span>
                    <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}