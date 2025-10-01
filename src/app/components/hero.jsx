"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "WestWyn Estate",
      subtitle: "Get Registry-Ready Plots under ₹10 Lakhs in Dholera",
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - You should add your image here */}
      <div className="absolute inset-0">
        <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
               <source src="/video/video2.mp4" type="video/mp4" />
          </video>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          {/* Left Section - Text Content */}
          <div className="max-w-2xl mx-auto">
            <Link href="tel:+919211820887" className="inline-block mb-6 px-6 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>

            <h1 className="text-3xl md:text-4xl text-teal-300 font-bold mb-4 animate-fadeIn">
              {slides[currentSlide].title}
            </h1>

            <h2 className="text-2xl font-semibold mb-6 animate-fadeIn">
              {slides[currentSlide].subtitle}
            </h2>

            {/* <p className="text-lg mb-8 animate-fadeIn">
              {slides[currentSlide].description}
            </p> */}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Hero;