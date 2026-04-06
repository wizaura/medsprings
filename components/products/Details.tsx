"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ProductDetails({ data }: { data: any }) {

    if (!data) {
        return (
            <div className="py-20 text-center text-gray-500">
                Product not found
            </div>
        );
    }

    const {
        name,
        tagline,
        shortDesc,
        description,
        features,
        specifications,
        image1,
        image2,
        category,
        slug,
    } = data;

    const images = [image1, image2].filter(Boolean);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="bg-white">

            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Title Block */}
                    <div className="mb-12 max-w-3xl">
                        <p className="text-sm uppercase tracking-wider text-brand">
                            {category?.name}
                        </p>

                        <h1 className="text-3xl md:text-4xl font-semibold mt-2">
                            {name}
                        </h1>

                        {tagline && (
                            <p className="mt-3 text-gray-600">
                                {tagline}
                            </p>
                        )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-14 items-start">

                        {/* LEFT → IMAGE GALLERY */}
                        <div>
                            <div className="border border-gray-200 rounded-2xl overflow-hidden">
                                <img
                                    src={images[activeIndex]}
                                    className="w-full h-[420px] object-cover transition duration-700"
                                />
                            </div>

                            {images.length > 1 && (
                                <div className="flex gap-4 mt-4">
                                    {images.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveIndex(i)}
                                            className={`border rounded-lg overflow-hidden w-20 h-20 ${
                                                activeIndex === i
                                                    ? "border-brand"
                                                    : "border-gray-200"
                                            }`}
                                        >
                                            <img
                                                src={img}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* RIGHT → INFO */}
                        <div>

                            {/* Overview */}
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold">
                                    Overview
                                </h3>

                                <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                                    {description}
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* FEATURES */}
                    {features?.length > 0 && (
                        <div className="mt-20">
                            <h3 className="text-xl font-semibold">
                                Key Features
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                {features.map((f: string, i: number) => (
                                    <div
                                        key={i}
                                        className="border border-gray-200 rounded-xl p-5 flex gap-3"
                                    >
                                        <CheckCircle className="text-brand mt-1" size={20} />
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {f}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* SPECIFICATIONS */}
                    {specifications?.length > 0 && (
                        <div className="mt-20 max-w-7xl">
                            <h3 className="text-xl font-semibold">
                                Technical Specifications
                            </h3>

                            <div className="mt-6 border border-gray-200 rounded-xl overflow-hidden">
                                {specifications.map((s: any, i: number) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-2 border-b border-gray-200 last:border-b-0"
                                    >
                                        <div className="bg-gray-50 p-4 font-medium">
                                            {s.feature}
                                        </div>
                                        <div className="p-4">
                                            {s.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-20 bg-brand text-white rounded-2xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Interested in this product?
                            </h3>
                            <p className="text-white/80 mt-2 text-sm">
                                Contact our team for product details, pricing, and availability.
                            </p>
                        </div>

                        <Link
                            href={`/contact`}
                            className="bg-white text-brand px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
                        >
                            Enquire Now
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    );
}