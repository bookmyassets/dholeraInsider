import React from "react";
import Image from "next/image";
import whatsapp from "../assets/icons/whatsapp.svg";
import Link from "next/link";

export default function Whatsapp() {
  return (
    <div className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 hover:scale-105 transition-transform duration-300">
      <Link href="https://wa.link/bvb3dt" passHref legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <div className="relative h-20 w-20 md:h-28 md:w-28 rounded-full bg-white shadow-xl flex items-center justify-center">
            
            {/* Rotating SVG Text */}
            <svg
              className="absolute w-full h-full animate-spin-slow"
              viewBox="0 0 100 100"
              style={{ animationDuration: "20s" }}
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                fill="black"
                fontSize="10"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                  TALK TO US &nbsp;&nbsp; ● &nbsp;&nbsp; DHOLERA INSIDER &nbsp;&nbsp; ●
                </textPath>
              </text>
            </svg>

            {/* WhatsApp Icon */}
            <div className="absolute flex items-center justify-center bg-[#25D366] rounded-full p-2 md:p-3">
              <Image
                src={whatsapp}
                alt="WhatsApp"
                width={40}
                height={40}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
