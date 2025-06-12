"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import About from "../components/about";
import scrollIcon from "../assets/icons/topArrowIcon.png";
import Whatsapp from "../components/whatsapp";
import Hero from "../components/hero";
import Westwyn from "../components/WestWyn";

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="dark:bg-bgDark">
      {/* <Hero
        
      /> */}
      <Hero
        address="620 JMD Megapolis, Sector-48, Sohna Road, Gurugram, India"
        phone="+91 9958993549"
        email="info@dholerinsider.com"
        className=""
      />
      <Whatsapp />
      <About />
      <Westwyn/>
      

      {showButton && (
        <div className="fixed bottom-24 right-10 z-50">
          <button
            onClick={handleScrollToTop}
            className="bg-slate-100 rounded shadow-xl overflow-visible"
          >
            <Image src={scrollIcon} alt="scroll button" />
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
