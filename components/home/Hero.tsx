"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [playCount, setPlayCount] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const MAX_PLAYS = 2; // change to 3 if needed

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    if (playCount < MAX_PLAYS - 1) {
      setPlayCount((prev) => prev + 1);

      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    } else {
      setShowLogo(true);

      // Freeze on last frame (important)
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="relative min-h-screen text-white overflow-hidden flex flex-col justify-end">

      {/* SEO H1 */}
      <h1 className="sr-only">
        Medsprings - Ophthalmic Intelligence, Trusted Worldwide
      </h1>

      {/* ✅ VIDEO (always present) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ${
          showLogo ? "animate-none scale-105" : "animate-videoZoom"
        }`}
      >
        <source src="/home-hero-v.mp4" type="video/mp4" />
      </video>

      {/* ✅ LOGO OVERLAY (no gray issue now) */}
      {showLogo && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 transition-all duration-1000">

          <img
            src="/logo_1.png"
            alt="Medsprings Logo"
            className="w-48 md:w-150 mb-6 opacity-0 animate-fadeIn"
          />
        </div>
      )}

      {/* OVERLAY */}
      {!showLogo && (
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            loaded ? "bg-black/50" : "bg-black/20"
          }`}
        />
      )}

      {/* CONTENT */}
      {!showLogo && (
        <div
          className={`relative z-10 px-6 md:px-20 max-w-6xl text-center ml-auto pb-12 transition-all duration-1000 ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            The Blue Print For
            <br />
            Clinical Precision…
          </h2>

          <p className="mt-6 text-gray-200 text-sm md:text-lg max-w-2xl leading-relaxed">
            Medsprings architects global healthcare solutions by pairing elite
            product quality with seamless, high-efficiency processing. Grounded
            in value-based principles, we ensure that clinical precision is
            supported by a foundation of trust and dependable performance.
          </p>
        </div>
      )}
    </section>
  );
}