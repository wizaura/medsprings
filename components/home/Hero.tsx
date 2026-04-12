"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col justify-end">

      {/* SEO H1 */}
      <h1 className="sr-only">
        Medsprings - Ophthalmic Intelligence, Trusted Worldwide
      </h1>

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-videoZoom"
      >
        <source src="/home-hero-v.mp4" type="video/mp4" />
      </video>

      {/* Overlay (dynamic) */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          loaded ? "bg-black/50" : "bg-black/20"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 px-6 md:px-20 max-w-6xl text-center ml-auto pb-12 transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          The Blue Print For 
          <br />
          Clinical Precision…
        </h2>

        <p className="mt-6 text-gray-200 text-sm md:text-lg max-w-2xl leading-relaxed">
          Medsprings architects global healthcare solutions by pairing elite 
          product quality with seamless, high-efficiency processing. 
          Grounded in value-based principles, we ensure that clinical precision 
          is supported by a foundation of trust and dependable performance.
        </p>

      </div>
    </section>
  );
}