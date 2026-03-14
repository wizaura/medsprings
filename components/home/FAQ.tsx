"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer:
            "We provide advanced ophthalmic technologies including intraocular lenses, surgical tools, and diagnostic equipment designed to improve clinical outcomes.",
    },
    {
        question: "Do you provide support for clinics and hospitals?",
        answer:
            "Yes. Our team works closely with clinics, hospitals, and medical professionals to ensure seamless integration of our technologies and tools.",
    },
    {
        question: "Do you accept international clients?",
        answer:
            "Absolutely. Our technologies are trusted worldwide, and we collaborate with healthcare institutions across multiple countries.",
    },
    {
        question: "How can we request a product consultation?",
        answer:
            "You can contact our team through the callback form or call our support team to discuss your requirements and get personalized guidance.",
    },
    {
        question: "Are your products clinically tested?",
        answer:
            "Yes. All our ophthalmic technologies undergo rigorous clinical validation and quality checks to meet global healthcare standards.",
    },
];

export default function FAQ() {
    const [active, setActive] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="py-24 px-6 bg-gray-50">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                {/* Left Side */}
                <div>

                    <h2 className="text-3xl md:text-5xl font-semibold max-w-lg text-gray-900">
                        Frequently asked questions
                    </h2>

                    <p className="mt-6 text-gray-600 max-w-sm">
                        Our experienced team is committed to ensuring that you feel
                        comfortable and confident in our care. Whether you need routine
                        consultations or advanced ophthalmic solutions.
                    </p>

                </div>

                {/* Right Side */}
                <div className="space-y-4">

                    {faqs.map((faq, index) => {

                        const open = active === index;

                        return (
                            <div
                                key={index}
                                className="bg-gray-200/50 rounded-xl px-6 py-5"
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