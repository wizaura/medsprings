"use client";

import { BadgeCheck, Globe, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Certified Standards",
    desc: "Manufacturing aligned with international medical standards.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Export Compliance",
    desc: "Meeting global regulatory and export requirements.",
    icon: Globe,
  },
  {
    number: "03",
    title: "Clinical Reliability",
    desc: "Strict testing for durability and safety.",
    icon: ShieldCheck,
  },
];

export default function QualityAssurance() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Quality Assurance
          </h2>

          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            At Medsprings, quality is at the core of everything we build.
            Our products follow strict international medical standards
            ensuring reliability, safety and consistent performance.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            From manufacturing to export compliance, we maintain rigorous
            quality control procedures and continuous validation processes.
          </p>

        </div>

        {/* ================= MOBILE DESIGN ================= */}
        <div className="flex flex-col gap-8 md:hidden">

          {/* Circle */}
          <div
            className="w-32 h-32 mx-auto relative group"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.9s cubic-bezier(.25,.8,.25,1)",
              }}
            >
              <div
                className="absolute inset-0 bg-brand text-white rounded-full flex flex-col items-center justify-center text-center shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <p className="text-sm font-semibold">Medical</p>
                <p className="text-xs opacity-80">Quality</p>
              </div>

              <div
                className="absolute inset-0 bg-brand text-white rounded-full flex items-center justify-center text-center shadow-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <p className="text-sm font-semibold">Medsprings</p>
              </div>
            </div>

            <style jsx>{`
              .group:hover > div {
                transform: rotateY(180deg);
              }
            `}</style>
          </div>

          {/* Timeline */}
          <div className="relative pl-6 border-l border-gray-200">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="mb-3 relative">

                  {/* Dot */}
                  <div className="mt-2 w-5 h-5 bg-brand rotate-45 shrink-0"></div>

                  {/* Card */}
                  <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">

                    <div className="flex items-start gap-3">

                      <Icon size={18} className="text-brand mt-1" />

                      <div>

                        <p className="text-xs font-semibold text-brand">
                          {step.number}
                        </p>

                        <h4 className="font-semibold text-sm">
                          {step.title}
                        </h4>

                        <p className="text-gray-600 text-xs mt-1">
                          {step.desc}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* ================= DESKTOP DESIGN ================= */}
        <div className="hidden md:flex items-center justify-center gap-6">

          {/* Circle */}
          <div
            className="w-44 h-44 relative group shrink-0"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.9s cubic-bezier(.25,.8,.25,1)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 bg-brand text-white rounded-full flex flex-col items-center justify-center text-center shadow-xl"
                style={{ backfaceVisibility: "hidden" }}
              >
                <h3 className="text-lg font-semibold">Medical</h3>
                <p className="text-sm opacity-80">Quality Process</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-brand text-white rounded-full flex flex-col items-center justify-center text-center shadow-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-lg font-semibold">Medsprings</h3>
                <p className="text-sm opacity-80">Trusted Standards</p>
              </div>
            </div>

            {/* 🔥 ADD THIS */}
            <style jsx>{`
    .group:hover > div {
      transform: rotateY(180deg) scale(1.05);
    }
  `}</style>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 max-w-md">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div key={i} className="flex items-start gap-4">

                  <div className="mt-2 w-5 h-5 bg-brand rotate-45 shrink-0"></div>

                  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-4 w-full">

                    <div className="text-brand">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-brand">
                        {step.number}
                      </p>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        {step.desc}
                      </p>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}