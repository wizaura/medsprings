"use client";

import Link from "next/link";

export default function CategoryProducts({ data }: { data: any }) {

    if (!data) {
        return (
            <div className="py-20 text-center text-gray-500">
                Category not found
            </div>
        );
    }

    const { name, products } = data;

    return (
        <section className="py-20 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                {/* Top Heading */}
                <div className="mb-16 text-center">

                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {name} Products
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Explore a curated range of high-quality medical products engineered
                        for precision, reliability, and consistent clinical performance
                        across modern healthcare environments.
                    </p>

                    <p className="mt-3 text-xs text-gray-400">
                        {products.length} products available
                    </p>

                </div>

                {/* Empty State */}
                {products.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No products found in this category
                    </p>
                ) : (

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                        {products.map((product: any) => (

                            <Link
                                key={product.id}
                                href={`/products/${product.slug}`}
                                className="group block"
                            >
                                <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-xl transition duration-300">

                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">

                                        <img
                                            src={product.image1}
                                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                                            {/* CTA ON IMAGE */}
                                            <div className="flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition duration-300">

                                                <span>View Details</span>
                                                <span className="text-lg">→</span>

                                            </div>

                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col justify-between min-h-[120px]">

                                        <div>

                                            <h3 className="font-medium text-sm md:text-base leading-snug line-clamp-2 group-hover:text-brand transition">
                                                {product.name}
                                            </h3>

                                            <p className="mt-2 text-xs text-gray-500 leading-relaxed line-clamp-2">
                                                {product.description}
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </Link>

                        ))}

                    </div>

                )}

            </div>

        </section>
    );
}