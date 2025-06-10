import React from "react";
import Image from "next/image";
import heroD from "../assets/hero/aboutHero.webp";
import heroM from "../assets/hero/aboutMhero.webp";
import "./about.css"

export default function Aboutus() {
  return (
    <div>
      {/* Hero Section */}
      <div>
        <section className="flex flex-col w-full sm:h-[50vh] h-[50vh] relative">
          <Image
            src={heroD}
            alt="bg image"
            width={1800}
            height={700}
            className="w-full h-full object-cover max-sm:hidden"
          />
          <Image
            src={heroM}
            alt="bg image"
            width={1800}
            height={700}
            className="w-full h-full object-cover md:hidden"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            {/* Background Large Text */}
            <p className="text-5xl sm:text-7xl md:text-9xl font-black uppercase text-white/5">
              About Dholera
            </p>

            {/* Foreground Main Text */}
            <p className="absolute text-lg sm:text-2xl md:text-4xl font-bold text-white">
              About Dholera SIR
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
            Pioneering India's First Greenfield Smart City
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Left Section - Our Mission */}
            <div>
              <h3 className="text-black dark:text-white text-sm font-semibold uppercase">
                Our Mission
              </h3>
              <h2 className="text-[#1e3a8b] text-2xl font-bold mt-2">
                Building Sustainable Urban Infrastructure
              </h2>
              <p className="text-gray-400 mt-4">
                Dholera Special Investment Region (SIR) is India's most ambitious 
                smart city project, designed to set global benchmarks in urban 
                planning, sustainability, and economic growth. Our mission is to 
                create a model city that integrates cutting-edge technology with 
                environmental consciousness.
              </p>
            </div>

            {/* Right Section - Vision */}
            <div>
              <h3 className="text-black dark:text-white text-sm font-semibold uppercase">
                Our Vision
              </h3>
              <h2 className="text-[#1e3a8b] text-2xl font-bold mt-2">
                Transforming Urban Living in India
              </h2>
              <p className="text-gray-400 mt-4">
                Dholera SIR envisions a future-ready city that leverages smart 
                technologies, renewable energy, and efficient transportation 
                systems. We aim to create an economic hub that attracts global 
                investments while maintaining ecological balance and offering 
                unparalleled quality of life to residents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Out Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-teal-900 animate-gradient-x">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-3xl sm:text-4xl font-bold text-center">
              Reach Out to Us
            </h2>
            <p className="text-gray-300 mt-4 text-center">
              Have questions about Dholera SIR? Contact our team for more information.
            </p>

            <form className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-white text-sm font-medium mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Enter your location"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Message For us
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your Query here"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}