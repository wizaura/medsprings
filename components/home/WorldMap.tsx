"use client";

import { MapPin } from "lucide-react";

export default function GlobalMap() {
  const locations = [
    { name: "USA", top: "45%", left: "23%" },
    { name: "Brazil", top: "73%", left: "35%" },
    { name: "UK", top: "30%", left: "46%" },
    { name: "Germany", top: "35%", left: "52%" },
    { name: "UAE", top: "51%", left: "60%" },
    { name: "India", top: "54%", left: "66%" },
    { name: "Japan", top: "44%", left: "81%" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-semibold text-brand mb-2">
        Global Presence
      </h2>

      <p className="text-gray-500 md:text-lg mb-10 max-w-2xl mx-auto">
        Ensuring high-tier medical innovation transcends geographical boundaries. 
      </p>

      <div className="relative w-full max-w-7xl mx-auto aspect-[2/1]">
        <img
          src="/world-line-2.svg"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Pins */}
        {locations.map((loc) => (

          <div
            key={loc.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ top: loc.top, left: loc.left }}
          >
            {/* Glow */}
            <div className="w-10 h-10 rounded-full absolute animate-ping bg-yellow-400/30"></div>

            {/* Icon Pin */}
            <div className="relative">

              {/* Shadow */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-2 bg-black/25 blur-md rounded-full"></div>

              {/* Icon */}
              <MapPin
                size={28}
                strokeWidth={2.5}
                className="text-yellow-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
                fill="#facc15"
              />

            </div>

            {/* Label */}
            <p className="text-xs mt-2 text-gray-800 font-semibold whitespace-nowrap">
              {loc.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}