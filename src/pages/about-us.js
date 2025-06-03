import React from "react";
import Image from "next/image";
import heroD from "../assets/hero/aboutHero.webp";

export default function Aboutus() {
  return (
    <div>
      {/* Hero Section */}
      <div>
        {/* Hero Section */}
        <section className="flex flex-col w-full sm:h-[50vh] h-[50vh] relative">
          <Image
            src={heroD}
            alt="bg image"
            width={1800}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Background Large Text */}
            <p className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/5">
              About Us
            </p>

            {/* Foreground Main Text */}
            <p className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              About Us
            </p>
          </div>
        </section>
      </div>

      {/* Content Section */}
      <section className="bg-[#f4efe7] dark:bg-[#171f2a] py-16">
        <div className="container mx-auto px-6 sm:px-12">
          <h2 className="text-black dark:text-white uppercase text-sm font-semibold">
            What We Stand For
          </h2>
          <h1 className="text-[#1e3a8b] text-3xl sm:text-4xl font-bold mt-2">
            We are dedicated to children rights.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left Section - Our Mission */}
            <div>
              <h3 className="text-black dark:text-white text-sm font-semibold uppercase">
                Our Mission
              </h3>
              <h2 className="text-[#1e3a8b] text-2xl font-bold mt-2">
                We Make Sure to Provide Care for Children
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem Ipsum main services is providing basic necessities such as
                food, shelter, and clothing to children who are living in
                poverty or experiencing homelessness.
              </p>
            </div>

            {/* Right Section - Vision */}
            <div>
              <h3 className="text-black dark:text-white text-sm font-semibold uppercase">
                Our Vision
              </h3>
              <h2 className="text-[#1e3a8b] text-2xl font-bold mt-2">
                We Ensure Special Care That No Child is Injured.
              </h2>
              <p className="text-gray-400 mt-4">
                Lorem Ipsum main services is providing basic necessities such as
                food, shelter, and clothing to children who are living in
                poverty or experiencing homelessness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
