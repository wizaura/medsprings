"use client"

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
    <section className="py-28 px-6 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT TEXT */}
        <div>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Quality Assurance
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
            At Medsprings, quality is at the core of everything we build.
            Our products follow strict international medical standards
            ensuring reliability, safety and consistent performance.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-md">
            From manufacturing to export compliance, we maintain rigorous
            quality control procedures and continuous validation processes.
          </p>

        </div>

        {/* RIGHT INFOGRAPHIC */}
        <div className="flex items-center justify-center gap-6">

          {/* Center Circle */}
          <div
            className="w-44 h-44 relative group"
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
                <h3 className="text-lg font-semibold">
                  Medical
                </h3>

                <p className="text-sm opacity-80">
                  Quality Process
                </p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 bg-brand text-white rounded-full flex flex-col items-center justify-center text-center shadow-xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h3 className="text-lg font-semibold">
                  Medsprings
                </h3>

                <p className="text-sm opacity-80">
                  Trusted Standards
                </p>
              </div>

            </div>

            <style jsx>{`
    .group:hover > div {
      transform: rotateY(180deg) scale(1.05);
    }
  `}</style>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <div
                  key={i}
                  className="flex items-center gap-4 group"
                >

                  {/* Connector */}
                  <div className="w-6 h-6 bg-brand rotate-45 group-hover:scale-110 transition"></div>

                  {/* Card */}
                  <div className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition p-3 w-[260px]">

                    <div className="w-10 h-10 flex items-center justify-center rounded-full text-brand">
                      <Icon size={18} />
                    </div>

                    <div>

                      <div className="text-sm font-semibold text-brand">
                        {step.number}
                      </div>

                      <h4 className="font-semibold text-sm">
                        {step.title}
                      </h4>

                      <p className="text-gray-600 text-xs mt-1">
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