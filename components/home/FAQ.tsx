"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
      "Premium isn't a label — it's a process. From imported raw materials meeting international purity standards, to multi-layer quality checks and global compliance certifications, Medsprings is built on the same foundational rigor as the world's most trusted ophthalmic names — with the agility of a focused, innovation-driven company.",
  },
  {
    question: "What sets Medsprings products apart in terms of quality?",
    answer:
      "It starts at the source. We use internationally sourced, pharma-grade raw materials — the same inputs that power the world's most respected ophthalmic brands. Every batch is processed under strict GMP protocols and validated against CE and ISO benchmarks before it reaches the operating room.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* Left Side */}
        <div className="my-auto">
          <p
            data-aos="fade-up"
            className="text-brand uppercase tracking-wider text-sm font-medium"
          >
            FAQ
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-semibold text-gray-900 max-w-lg"
          >
            Frequently Asked Questions
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-gray-600 max-w-md"
          >
            Everything you need to know about partnering with Medsprings,
            product quality, regulatory support, and global distribution.
          </p>
        </div>

        {/* Right Side */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-gray-200 rounded-xl px-6 py-5 bg-gray-50 hover:bg-gray-100"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-medium text-gray-900">
                    {faq.question}
                  </span>

                  {open ? (
                    <Minus className="cursor-pointer text-gray-500 hover:text-brand" size={18} />
                  ) : (
                    <Plus className="cursor-pointer text-gray-500 hover:text-brand" size={18} />
                  )}
                </button>

                {open && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}