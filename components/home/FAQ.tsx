"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Why should you consider Medsprings?",
    answer:
      "Because we are surgeon trusted and patient focused. Medsprings brings world-class ophthalmic solutions to the markets that need them most — without ever compromising on quality or care.",
  },
  {
    question: "Do you provide marketing and sales enablement materials?",
    answer:
      "Yes. Partners receive co-branded marketing assets, clinical data sheets, and sales training support to accelerate market adoption.",
  },
  {
    question: "Are your products internationally certified?",
    answer:
      "Yes. Our products are compliant with CE, ISO, and other international regulatory frameworks, ensuring safety and confidence in every market.",
  },
  {
    question: "Can you support product registration in my country?",
    answer:
      "Absolutely. We provide full regulatory documentation, facility audit support, and hands-on guidance through your local registration process.",
  },
  {
    question: "Do you offer support for distributors entering new markets?",
    answer:
      "Yes — from import documentation to marketing support and tender assistance, we support our partners through every stage of market entry.",
  },
  {
    question: "What makes Medsprings a premium ophthalmic brand?",
    answer:
      "Premium isn't a label — it's a process. From imported raw materials meeting international purity standards, to multi-layer quality checks and global compliance certifications.",
  },
  {
    question: "What sets Medsprings products apart in terms of quality?",
    answer:
      "It starts at the source. We use internationally sourced, pharma-grade raw materials with strict GMP protocols and CE/ISO validation.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="my-auto">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-semibold text-gray-900 max-w-lg"
          >
            Frequently Asked Questions
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-gray-600 md:text-lg max-w-md"
          >
            Everything you need to know about partnering with Medsprings,
            product quality, regulatory support, and global distribution.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`rounded-xl border transition-all duration-300 ${
                  open
                    ? "bg-white border-gray-300 shadow-md"
                    : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full px-6 py-5 text-left"
                >
                  <span className="font-medium md:text-lg text-gray-900">
                    {faq.question}
                  </span>

                  <Plus
                    size={18}
                    className={`cursor-pointer transition-transform duration-300 ${
                      open ? "rotate-45 text-brand" : "text-gray-500"
                    }`}
                  />
                </button>

                {/* Content (Animated) */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    open ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}