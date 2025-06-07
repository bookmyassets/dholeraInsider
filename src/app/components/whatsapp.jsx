import React from "react";
import Image from "next/image";
import whatsapp from "../assets/icons/whatsapp.svg";
import Link from "next/link";
import '../whatsapp.module.css'

export default function Whatsapp() {
  return (
    <div>
      
      <Link href="https://wa.link/bvb3dt">
    <div className="fixed bottom-5 right-5 z-10">
      <div className="relative h-28 w-28 rounded-full bg-white shadow-lg flex items-center justify-center">
        {/* Rotating Circular Text using SVG */}
        <svg className="absolute w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
          <defs>
           
            <path id="circlePath" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
          </defs>
          <text fill="black" fontSize="11" fontWeight="bold">
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              TALK TO US  ● &nbsp;  DHOLERA INSIDER  ●
            </textPath>
          </text>
        </svg>

        {/* WhatsApp Icon */}
        <div className="absolute">
          <Image src={whatsapp} alt="WhatsApp" width={70} height={70} />
        </div>
      </div>
    </div>
      </Link>
    </div>
  );
}