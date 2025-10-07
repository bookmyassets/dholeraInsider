"use client";
import React, { useState } from "react";
import Image from "next/image";
import hero from "@/app/assets/gallery/news.webp"
import sample1 from "@/app/assets/gallery/abcd.webp";
import sample2 from "@/app/assets/gallery/abcd-internal.webp";
import sample3 from "@/app/assets/gallery/abcd-internal1.webp";
import sample4 from "@/app/assets/gallery/activation.webp";
import sample5 from "@/app/assets/gallery/airport.webp";
import sample6 from "@/app/assets/gallery/airport1.webp";
import sample7 from "@/app/assets/gallery/butterfly.webp";
import sample8 from "@/app/assets/gallery/express.webp";
import sample9 from "@/app/assets/gallery/Expressway.webp";
import sample10 from "@/app/assets/gallery/riverfront.webp";
import sample11 from "@/app/assets/gallery/solar.webp";
import sample12 from "@/app/assets/gallery/tata&river.webp";
import sample13 from "@/app/assets/gallery/tata.webp";
import sample14 from "@/app/assets/gallery/tata1.webp";
import sample15 from "@/app/assets/gallery/terminal.webp";
import sample16 from "@/app/assets/gallery/toll.webp";
import sample17 from "@/app/assets/gallery/ring-road.webp";
import sample18 from "@/app/assets/gallery/renew.webp";


export default function DholeraProgressPage() {
  const galleryImages = [
  { id: 1, src: sample1, alt: "Aerial view of ABCD Building in Dholera SIR", caption: "Aerial view of ABCD Building in Dholera SIR" },
  { id: 2, src: sample2, alt: "Artificial river development in Dholera Smart City", caption: "Artificial river development in Dholera Smart City" },
  { id: 3, src: sample3, alt: "Aerial view of Activation area in Dholera Smart City", caption: "Aerial view of Activation area in Dholera Smart City" },
  { id: 4, src: sample4, alt: "Man-made riverfront in Dholera Smart City", caption: "Man-made riverfront in Dholera Smart City" },
  { id: 5, src: sample5, alt: "Aerial view of Dholera Smart City roads with canal side walkway", caption: "Aerial view of Dholera Smart City roads with canal side walkway" },
  { id: 6, src: sample6, alt: "Runway terminal of Dholera International Airport", caption: "Runway terminal of Dholera International Airport" },
  { id: 7, src: sample7, alt: "Aerial view of Ahmedabad Dholera Expressway", caption: "Aerial view of Ahmedabad Dholera Expressway" },
  { id: 8, src: sample8, alt: "Proposed metro rail infrastructure in Dholera Smart City planning", caption: "Proposed metro rail infrastructure in Dholera Smart City planning" },
  { id: 9, src: sample9, alt: "ReNew solar cell manufacturing plant in Dholera Smart City", caption: "ReNew solar cell manufacturing plant in Dholera Smart City" },
  { id: 10, src: sample10, alt: "Solar power infrastructure by ReNew power in Dholera Smart Industrial Region", caption: "Solar power infrastructure by ReNew power in Dholera Smart Industrial Region" },
  { id: 11, src: sample11, alt: "Tata Power renewable solar energy park in Dholera Smart City", caption: "Tata Power renewable solar energy park in Dholera Smart City" },
  { id: 12, src: sample12, alt: "World's largest solar park infrastructure in Dholera Smart City", caption: "World's largest solar park infrastructure in Dholera Smart City" },
  { id: 13, src: sample13, alt: "Sustainable development with largest solar park in Dholera", caption: "Sustainable development with largest solar park in Dholera" },
  { id: 14, src: sample14, alt: "Aerial view of Sardar Patel Ring Road in Ahmedabad", caption: "Aerial view of Sardar Patel Ring Road in Ahmedabad" },
  { id: 15, src: sample15, alt: "Dholera Ring Road development promoting regional connectivity", caption: "Dholera Ring Road development promoting regional connectivity" },
  { id: 16, src: sample16, alt: "TATA semiconductor plant construction update in Dholera SIR", caption: "TATA semiconductor plant construction update in Dholera SIR" },
  { id: 16, src: sample17, alt: "Sardar Patel Ring Road", caption: "Sardar Patel Ring Road Dholera SIR" },
  { id: 16, src: sample18, alt: "Renew Solar Plant", caption: "Renew Solar Plant" },
];


  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen ">
             <link rel="canonical" href="https://www.dholeratimes.com/gallery/dholera-sir-progress" />
      <meta name="robots" content="index, dofollow"/>

      {/* Hero Section with Enhanced Overlay */}
      <div className="relative h-[40vh] overflow-hidden bg-teal-700">
        <div className="">


        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white flex justify-center items-center tracking-tight leading-tight">
              Dholera SIR Gallery
            </h1>
          </div>
        </div>
        </div>
      </div>

      {/* Gallery Section with Enhanced Design */}
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Gallery Grid with Enhanced Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 shadow-2xl h-80 cursor-pointer"
              onClick={() => openPopup(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              
            </div>
          ))}
        </div>

        {/* Navigation with Category Tags */}
        {/* <div className="mt-16 flex flex-wrap justify-center gap-3">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-200 transition-colors font-medium">All Images</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors font-medium">Infrastructure</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors font-medium">Transportation</span>
          <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-200 transition-colors font-medium">Urban Planning</span>
        </div> */}
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" 
          onClick={closePopup}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center text-black font-bold z-10"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            {/* <div className="bg-white p-4 text-center">
              <h3 className="text-lg font-bold">{selectedImage.alt}</h3>
              <p className="text-gray-600">{selectedImage.caption}</p>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}