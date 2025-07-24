"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is it safe to invest in Dholera SIR?",
    answer:
      "Yes, it is safe to invest in Dholera Smart City. Being India’s first greenfield smart city under the Delhi-Mumbai Industrial Corridor (DMIC), it is a government-backed project with strong planning and infrastructure. With RERA-approved developments and growing investments from reputed companies, Dholera Smart City offers a secure and high-potential investment opportunity."
  },
  {
    question: " Which city is closest to Dholera?",
    answer:
      "The closest major city to Dholera Smart City is Bhavnagar, located around 50 km away. Ahmedabad is also nearby, just 100 km from Dholera Smart City, and well connected through highways, proposed metro lines, and a six-lane expressway. "
  },
  {
    question: "Is Dholera RERA approved?",
    answer:
      "Yes, many projects within Dholera Smart City are RERA-approved. The region is being developed under strict government regulations, ensuring transparency, legal security, and investor confidence. Always verify the RERA registration number of any project in Dholera Smart City before investing."
  },
  {
    question: " Is Dholera bigger than Delhi?",
    answer:
      "In terms of planned area, Dholera Smart City spans over 920 sq km, which is larger than Delhi’s 1,484 sq km. While Delhi is a fully developed and populated city, Dholera Smart City is still under development, but it offers futuristic urban planning and advanced infrastructure."
  },
  {
    question: "Will Dholera be successful?",
    answer:
      "Yes, Dholera Smart City is expected to be a huge success due to its strategic location, strong government support, and modern infrastructure. With major companies like Tata, Maruti, and Polycab investing in the area, Dholera Smart City is shaping up to be a global investment and industrial hub."
  },
  {
    question: "Does Dholera have an airport?",
    answer:
      "Dholera Smart City is getting its international airport, the Dholera International Airport, which is currently under construction. Situated around 20 km from the city center, it will enhance national and international connectivity and boost economic activity in Dholera Smart City."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-extrabold text-black text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 relative">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="border rounded-lg p-4 shadow-2xl bg-gray-900 bg-opacity-80"
              >
                <button
                  className="w-full flex justify-between items-center text-[#edc46b] text-left text-lg font-bold"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 text-lg text-[#f6d99a] overflow-hidden border-t-2 border-[#edc46b] border-opacity-50 py-5"
                    >
                      {Array.isArray(faq.answer) ? (
                        <ul className="list-disc pl-2 ">
                          {faq.answer.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

     
    </>
  );
}