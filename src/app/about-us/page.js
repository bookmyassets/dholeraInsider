"use client"
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import heroD from "../assets/hero/aboutHero.webp";
import heroM from "../assets/hero/aboutMhero.webp";
import "./about.css"

export default function Aboutus() {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ fullName: "", phone: "", location: "", message: "" });
    const [showPopup, setShowPopup] = useState(false);
    const [submissionCount, setSubmissionCount] = useState(0);
    const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
    const recaptchaRef = useRef(null);
    const recaptchaWidgetId = useRef(null);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
    useEffect(() => {
      const loadRecaptcha = () => {
        if (typeof window !== "undefined" && !window.grecaptcha) {
          try {
            const script = document.createElement("script");
            script.src = "https://www.google.com/recaptcha/api.js";
            script.async = true;
            script.defer = true;
            script.onload = () => setRecaptchaLoaded(true);
            script.onerror = () => {
              console.error("Failed to load reCAPTCHA script");
              setRecaptchaLoaded(true);
            };
            document.head.appendChild(script);
          } catch (err) {
            console.error("reCAPTCHA script loading error:", err);
            setRecaptchaLoaded(true);
          }
        } else if (window.grecaptcha) {
          setRecaptchaLoaded(true);
        }
      };
  
      loadRecaptcha();
  
      // Get submission count from localStorage
      if (typeof window !== "undefined") {
        setSubmissionCount(
          parseInt(localStorage.getItem("formSubmissionCount") || "0", 10)
        );
        setLastSubmissionTime(
          parseInt(localStorage.getItem("lastSubmissionTime") || "0", 10)
        );
      }
  
      // Prevent modal close when clicking inside
      const handleClickInside = (e) => {
        e.stopPropagation();
      };
  
      const formElement = document.getElementById("contact-form-container");
      if (formElement) {
        formElement.addEventListener("click", handleClickInside);
      }
  
      return () => {
        if (formElement) {
          formElement.removeEventListener("click", handleClickInside);
        }
      };
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      setErrorMessage(""); // Clear error messages on input change
    };
  
    const validateForm = () => {
      if (!formData.fullName || !formData.phone) {
        setErrorMessage("Please fill in all fields");
        return false;
      }
  
      // Simple phone validation
      if (!/^\d{10,15}$/.test(formData.phone)) {
        setErrorMessage("Please enter a valid phone number (10-15 digits)");
        return false;
      }
  
      // Check submission limits
      const now = Date.now();
      const hoursPassed = (now - lastSubmissionTime) / (1000 * 60 * 60);
  
      if (hoursPassed >= 24) {
        // Reset counter if 24 hours have passed
        setSubmissionCount(0);
        if (typeof window !== "undefined") {
          localStorage.setItem("formSubmissionCount", "0");
          localStorage.setItem("lastSubmissionTime", now.toString());
        }
      } else if (submissionCount >= 3) {
        setErrorMessage(
          "You have reached the maximum submission limit. Try again after 24 hours."
        );
        return false;
      }
  
      return true;
    };
  
    const onRecaptchaSuccess = async (token) => {
      try {
        const response = await fetch("https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.phone,
              location: formData.location,
              message: formData.message,
              source: "Dholera Insider",
            },
            source: "Dholera Insider Website",
            tags: ["Dholera Investment", "Website Lead"],
          }),
        });
  
        const responseText = await response.text();
  
        if (response.ok) {
          // Success handling
          setFormData({ fullName: "", phone: "", location: "", message: "" });
          setShowPopup(true);
          setSubmissionCount((prev) => {
            const newCount = prev + 1;
            if (typeof window !== "undefined") {
              localStorage.setItem("formSubmissionCount", newCount.toString());
              localStorage.setItem("lastSubmissionTime", Date.now().toString()); // Fixed this line
            }
            return newCount;
          });
        } else {
          let errorData;
          try {
            errorData = JSON.parse(responseText);
          } catch {
            errorData = { message: responseText };
          }
          throw new Error(errorData.message || "Error submitting form");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        setErrorMessage(
          error.message || "Error submitting form. Please try again."
        );
      } finally {
        setIsLoading(false);
  
        // Reset reCAPTCHA
        if (window.grecaptcha && recaptchaWidgetId.current !== null) {
          try {
            window.grecaptcha.reset(recaptchaWidgetId.current);
          } catch (err) {
            console.error("Error resetting reCAPTCHA:", err);
          }
        }
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrorMessage("");
  
      if (!validateForm()) {
        setIsLoading(false);
        return;
      }
  
      // If reCAPTCHA is loaded, render it in the ref
      if (window.grecaptcha && recaptchaLoaded && siteKey) {
        try {
          // Check if reCAPTCHA widget is already rendered
          if (recaptchaWidgetId.current === null && recaptchaRef.current) {
            recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
              sitekey: siteKey,
              callback: onRecaptchaSuccess,
              theme: "dark",
            });
          } else if (recaptchaWidgetId.current !== null) {
            // Reset and execute existing widget
            window.grecaptcha.reset(recaptchaWidgetId.current);
            window.grecaptcha.execute(recaptchaWidgetId.current);
          }
        } catch (error) {
          console.error("Error rendering reCAPTCHA:", error);
          setErrorMessage("Error with verification. Please try again.");
          setIsLoading(false);
        }
      } else {
        setErrorMessage("reCAPTCHA not loaded. Please refresh and try again.");
        setIsLoading(false);
      }
    };
  

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

      {/* Dholera Insider Section */}
      <section className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-6 sm:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#1e3a8b] dark:text-teal-400 text-3xl sm:text-4xl font-bold text-center mb-8">
              About Dholera Insider
            </h2>
            
            <div className="bg-[#f4efe7] dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Dholera Insider is your trusted source for timely, accurate, and in-depth information 
                about Dholera Smart City — India's first greenfield smart city under the Delhi-Mumbai 
                Industrial Corridor (DMIC). We aim to bridge the gap between official developments 
                and public awareness by bringing the latest updates, project insights, and real estate 
                trends all in one place.
              </p>
              
              <h3 className="text-[#1e3a8b] dark:text-teal-400 text-xl font-bold mt-6 mb-3">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To empower citizens, investors, and industry stakeholders with transparent, verified 
                information on Dholera SIR, helping them stay informed, plan ahead, and make smart decisions.
              </p>
              
              <h3 className="text-[#1e3a8b] dark:text-teal-400 text-xl font-bold mt-6 mb-3">What We Offer</h3>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>Daily updates on Dholera SIR developments</li>
                <li>In-depth guides for real estate investors</li>
                <li>Expert opinions, news, and government updates</li>
                <li>Insider access to land prices, project progress, and infrastructure milestones</li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 mt-6 italic">
                Stay ahead of the curve with Dholera Insider — your front-row seat to India's smart city revolution.
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
             Know More About Dholera, With Dholera Insider
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
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
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
                    value={formData.location}
                    onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your Query here"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  onClick={handleSubmit}
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