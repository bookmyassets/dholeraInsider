"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import scrollIcon from "../assets/icons/topArrowIcon.png";
import Whatsapp from "../components/whatsapp";
import Hero from "../components/hero";
import CTAsection from "../components/CTAsection";
import CommonForm from "../components/CommonForm";

import Invest from "../homecomponents/Invest";
import WhyDI from "../homecomponents/WhyDI";
import WestWyn_Estate from "../homecomponents/WestWyn_Estate";
import FAQSection from "../homecomponents/Faq";
import InvestmentTimeline from "../homecomponents/ROI2";
import BrowseBlogsSection from "../components/BrowseBlogs";

const HomePage = ({openForm}) => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

   useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check localStorage to see if popup was already shown
      const popupShown = localStorage.getItem('popupShown');
      
      if (!popupShown) {
        const timer = setTimeout(() => {
          openForm();
          localStorage.setItem('popupShown', 'true');
        }, 2000); // 5 seconds

        const handleScroll = () => {
          if (window.scrollY > window.innerHeight * 0.05) {
            openForm();
            localStorage.setItem('popupShown', 'true');
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
          }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
          clearTimeout(timer);
        };
      }
    }
  }, [openForm]);


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
      <Hero/>
      <Whatsapp />
      <Invest />
      <WhyDI/>
      <CommonForm title="Get Plots under ₹10 Lakhs in Dholera's Fast Development Corridor"/>
      {/* <BrowseBlogsSection/> */}
      <InvestmentTimeline/>
      <WestWyn_Estate/>
      
      <CTAsection/>
      {/* <MegaIndustries/>
      <TestimonialsSection/> */}
      <FAQSection/>
      

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
