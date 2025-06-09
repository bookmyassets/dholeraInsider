"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import heroBg from "../assets/hero/heroSection2.webp";
import heroBg2 from "../assets/hero/heroSection3.webp";
import heroBg3 from "../assets/hero/heroSection4.webp";
import heroM from "../assets/hero/heroSection2M.webp";
import heroM2 from "../assets/hero/heroSection3Mb.webp";
import heroM3 from "../assets/hero/heroSection4M.webp";
import Link from "next/link";

const Hero = ({ address, phone, email }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      desktopImage: heroBg,
      mobileImage: heroM,
      title: "Find Real Estate That Suits You",
      subtitle: "Premium Properties",
      description: "Discover your perfect property with our expert guidance and extensive portfolio of premium real estate options."
    },
    {
      desktopImage: heroBg2, 
      mobileImage: heroM2,   
      title: "Luxury Homes & Apartments",
      subtitle: "Exclusive Listings",
      description: "Explore our curated collection of luxury homes and modern apartments in prime locations."
    },
    {
      desktopImage: heroBg3, 
      mobileImage: heroM3,   
      title: "Investment Opportunities",
      subtitle: "Smart Investments",
      description: "Maximize your returns with our carefully selected investment properties and expert market insights."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const showMoreBtn = () => {
    document
      .getElementById("about-container")
      .scrollIntoView({ behavior: "smooth" });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative flex flex-col w-full h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Desktop Image */}
          <Image
            src={slide.desktopImage}
            alt={`Slide ${index + 1}`}
            fill
            className="w-full h-screen bg-black bg-no-repeat object-center max-sm:hidden"
            priority={index === 0}
          />
          {/* Mobile Image */}
          <Image
            src={slide.mobileImage}
            alt={`Slide ${index + 1} mobile`}
            fill
            className="w-full h-[90vh] bg-no-repeat md:hidden"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
            
            {/* Left Section - Text Content */}
            <div className="flex flex-col  items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
              <Link href="/contact" className="bg-white max-sm:hidden hover:bg-emerald-800 px-4 py-2 rounded-xl text-emerald-800 hover:text-white h-10 w-auto font-black text-sm uppercase cursor-pointer transition-colors duration-300 mb-6">
                Contact Us 
              </Link>

              <h1 className="font-normal text-4xl md:text-5xl lg:text-7xl text-white capitalize leading-tight mb-4 transition-all duration-500">
                {slides[currentSlide].title}
              </h1>

              <h2 className="text-xl md:text-2xl text-orange-400 font-semibold mb-4 transition-all duration-500">
                {slides[currentSlide].subtitle}
              </h2>

              <p className="mt-2 text-gray-300 max-w-md text-lg hidden md:block transition-all duration-500">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Right Section - Form */}
           {/*  <div className="w-full lg:w-1/2 max-w-md">
              <form className="space-y-6 bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg px-6 md:px-10 py-8 rounded-xl shadow-xl border border-gray-700/50">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Get To Know More About Dholera
                </h2>

                <div className="space-y-2">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-700 dark:placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-gray-200/50 dark:bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-700 dark:placeholder-gray-400 outline-none transition-all duration-300"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 font-semibold text-sm uppercase"
                >
                  Get Details
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-orange-500 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Show more button */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={showMoreBtn}
          className="text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36 transition-all duration-300"
        >
          show more
        </button>
      </div>
    </section>
  );
};

export default Hero;