"use client";
import { useState, useEffect, useRef } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlugPageForm() {
  // Popup states
  const [showFormPopup, setShowFormPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: "", 
    mobileNumber: "", 
    email: "", 
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [debugScroll, setDebugScroll] = useState(0); // Add this for debugging
  
  const recaptchaRef = useRef(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  useEffect(() => {
  const handleScroll = () => {
    if (hasTriggered) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Better calculation to avoid division by zero
    const scrollableDistance = Math.max(documentHeight - windowHeight, 1);
    const scrollPercent = (scrollPosition / scrollableDistance) * 100;
    
    setDebugScroll(scrollPercent);
    
    if (scrollPercent >= 30 && !hasTriggered) {
      setShowFormPopup(true);
      setHasTriggered(true);
    }
  };

  // Initial check in case user refreshes mid-scroll
  handleScroll();

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [hasTriggered]);

  // Load reCAPTCHA
  useEffect(() => {
    const loadRecaptcha = () => {
      if (typeof window !== "undefined" && !window.grecaptcha && siteKey) {
        const script = document.createElement("script");
        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => setRecaptchaLoaded(true);
        script.onerror = () => setRecaptchaLoaded(true);
        document.head.appendChild(script);
      } else if (window.grecaptcha || !siteKey) {
        setRecaptchaLoaded(true);
      }
    };

    loadRecaptcha();

    // Escape key handler
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showFormPopup) {
        handlePopupClose();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showFormPopup, siteKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrorMessage("");
  };

  const validateForm = () => {
    if (!formData.fullName.trim() || !formData.mobileNumber.trim()) {
      setErrorMessage("Please fill in all required fields");
      return false;
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    if (!/^\d{10,15}$/.test(formData.mobileNumber.replace(/\D/g, ''))) {
      setErrorMessage("Please enter a valid mobile number (10-15 digits)");
      return false;
    }

    return true;
  };

  const onRecaptchaSuccess = async (token) => {
    try {
      const response = await fetch(
         "https://api.telecrm.in/enterprise/67a30ac2989f94384137c2ff/autoupdatelead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TELECRM_API_KEY}`,
          },
          body: JSON.stringify({
            fields: {
              name: formData.fullName,
              phone: formData.mobileNumber,
              source: "BookMyAssets",
            },
            source: "BookMyAssets Popup",
            tags: ["Dholera Investment", "Popup Lead", "BookMyAssets"],
            recaptchaToken: token,
          }),
        }
      );

      if (response.ok) {
        setFormData({ fullName: "", mobileNumber: ""});
        setShowThankYou(true);
        
        setTimeout(() => {
          setShowThankYou(false);
          setShowFormPopup(false);
        }, 3000);
      } else {
        throw new Error("Error submitting form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
      if (window.grecaptcha && recaptchaRef.current) {
        try {
          window.grecaptcha.reset();
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

    if (!recaptchaLoaded || !window.grecaptcha) {
      setErrorMessage("Security verification not loaded. Please refresh the page.");
      setIsLoading(false);
      return;
    }

    if (!recaptchaRef.current.innerHTML) {
      try {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: siteKey,
          callback: onRecaptchaSuccess,
          theme: "light",
        });
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error);
        setErrorMessage("Error with verification. Please try again.");
        setIsLoading(false);
      }
    } else {
      window.grecaptcha.execute();
    }
  };

  const handlePopupClose = () => {
    setShowFormPopup(false);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handlePopupClose();
    }
  };

  // Debug component to show scroll percentage
  /* const DebugInfo = () => (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.7)',
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 1000,
      fontSize: '14px'
    }}>
      Scroll: {debugScroll.toFixed(2)}%
    </div>
  ); */

  return (
    <>
 
      
      <AnimatePresence>
        {showFormPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {showThankYou ? (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We will contact you shortly.</p>
                </div>
              ) : (
                <>
                  {/* Section 1: Heading */}
                  <div className="text-center mb-6">
                    <button
                      onClick={handlePopupClose}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
                    >
                      ×
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">BookMyAssets</h1>
                    
                    {/* Section 2: Sub-heading CTA */}
                    <p className="text-lg text-gray-700 font-semibold">
                      Secure Your Future with AUDA-Approved Plots in Dholera Smart City
                    </p>
                  </div>

                  {/* Section 3: Form Fields */}
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm mb-4">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="mobileNumber" className="block text-gray-700 text-sm font-medium mb-2">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center mb-4">
                      <div ref={recaptchaRef}></div>
                    </div>

                    {/* Section 4: Submit Button with Tagline */}
                    <button
                      type="submit"
                      disabled={isLoading || !recaptchaLoaded}
                      className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                        isLoading || !recaptchaLoaded
                          ? "bg-gray-400 cursor-not-allowed text-gray-600"
                          : "bg-[#deae3c] hover:bg-[#eab308] text-white transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        "Submit"
                      )}
                    </button>

                    {/* Section 5: Privacy Notice */}
                    <div className="text-center mt-4">
                      <p className="text-xs text-gray-500">
                        We respect your privacy. Your details are safe with us.
                      </p>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}