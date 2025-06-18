import React from "react";
import Image from "next/image";
import wtp from "@/gallery/wtp-gallery-image.webp";
import expressway from "@/gallery/expressway-gallery-image.webp";
import toll from "@/gallery/toll-gallery-image.webp";
import tata from "@/gallery/tata-gallery-image.webp";
import stp from "@/gallery/stp-gallery-image.webp";
import landFilling from "@/gallery/land-filling-gallery-image.webp";
import solarPark from "@/gallery/solar-park-gallery-image.webp";
import dholeraSector from "@/gallery/dholera-sector-gallery-image.webp";
import abcd from "@/gallery/abcd-gallery-image.webp";
import torrentPower from "@/gallery/torrent-power-gallery-image.webp";
import CommonForm from "@/app/components/CommonForm";

export default function DholeraProgressPage() {
  const galleryImages = [
    {
      id: 1,
      src: wtp,
      alt: "Water Treatment Plant",
      caption: "Advanced WTP under development",
    },
    {
      id: 2,
      src: expressway,
      alt: "Expressway Construction",
      caption: "Ahmedabad-Dholera Expressway in progress",
    },
    {
      id: 3,
      src: toll,
      alt: "Toll Plaza",
      caption: "Entry point infrastructure with toll systems",
    },
    {
      id: 4,
      src: tata,
      alt: "TATA Site",
      caption: "TATA Group's industrial development site",
    },
    {
      id: 5,
      src: stp,
      alt: "Sewage Treatment Plant",
      caption: "Modern STP facility construction",
    },
    {
      id: 6,
      src: landFilling,
      alt: "Land Filling",
      caption: "Ongoing land leveling and filling",
    },
    {
      id: 7,
      src: solarPark,
      alt: "Solar Park",
      caption: "Massive solar energy plant at Dholera",
    },
    {
      id: 8,
      src: dholeraSector,
      alt: "Sector Planning",
      caption: "Zoning and sector-based development",
    },
    {
      id: 9,
      src: abcd,
      alt: "ABCD Building",
      caption: "Administrative building for Dholera SIR",
    },
    {
      id: 10,
      src: torrentPower,
      alt: "Torrent Power Station",
      caption: "Power infrastructure by Torrent Group",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-teal-900">
      <link
        rel="canonical"
        href="https://www.dholeratimes.com/gallery/Dholera-photos"
      />

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center">
            Explore Dholera Growth through Images
          </h2>
          <p className="text-emerald-200 text-center max-w-2xl mx-auto">
            Witness the rapid development of India's first smart city through
            our exclusive photo gallery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 shadow-2xl h-80 hover:shadow-emerald-500/30"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">
                  {image.alt}
                </h3>
                <p className="text-emerald-200 text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CommonForm title="Invest In Dholera Smart City Now" />
    </div>
  );
}
