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
        description,
        benefits,
        image1,
        image2,
        category,
        sku,
    } = data;

    const images = [image1, image2].filter(Boolean);

    const [activeIndex, setActiveIndex] = useState(0);

    // 🔥 Auto switch every 4s
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <section className="py-12 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Breadcrumb */}
                <div className="text-sm text-gray-400 mb-10">
                    <Link href="/" className="hover:text-brand">Home</Link> /{" "}
                    <Link href={`/categories/${category.slug}`} className="hover:text-brand">
                        {category.name}
                    </Link> /{" "}
                    <span className="text-gray-600">{name}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-14 items-start">

                    {/* ================= LEFT: IMAGE GALLERY ================= */}
                    <div>

                        {/* Main Image */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden">
                            <img
                                src={images[activeIndex]}
                                className="w-full h-[420px] object-cover transition duration-700"
                            />
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4 mt-4">

                                {images.map((img, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)} // manual override
                                        className={`border rounded-lg overflow-hidden w-20 h-20 ${activeIndex === i
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

                    {/* ================= RIGHT: PRODUCT INFO ================= */}
                    <div>

                        {/* Category Badge */}
                        <div className="text-xs text-brand font-medium uppercase tracking-wide">
                            {category.name}
                        </div>

                        {/* Title */}
                        <h1 className="mt-2 text-3xl md:text-4xl font-semibold leading-tight">
                            {name}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-gray-600 leading-relaxed text-base whitespace-pre-line">
                            {description}
                        </p>

                        {/* Divider */}
                        <div className="my-8 border-t border-gray-200" />

                        {/* Benefits */}
                        {benefits?.length > 0 && (
                            <div>

                                <h3 className="text-lg font-semibold">
                                    Key Benefits
                                </h3>

                                <div className="mt-5 space-y-4">

                                    {benefits.map((b: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">

                                            <CheckCircle className="text-brand mt-1" size={18} />

                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {b}
                                            </p>

                                        </div>
                                    ))}

                                </div>

                            </div>
                        )}

                        {/* CTA */}
                        <div className="mt-10 flex gap-4">

                            <Link
                                href={`/contact?product=${data.slug}`}
                                className="bg-brand text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
                            >
                                Enquire for this Product
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}