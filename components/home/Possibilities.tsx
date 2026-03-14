import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const items = [
    {
        title: "Pharmaceuticals",
        image: "/home_possibilities_1.png",
    },
    {
        title: "Pharmaceuticals",
        image: "/home_possibilities_2.png",
    },
    {
        title: "Pharmaceuticals",
        image: "/home_possibilities_3.png",
    },
];

export default function Possibilities() {
    return (
        <section className="bg-brand text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
                        SEE NEW POSSIBILITIES
                    </h2>

                    <p className="mt-4 text-sm md:text-base text-white/80 max-w-sm mx-auto">
                        Ophthalmic Intelligence. Trusted Worldwide.
                        Technologies and tools shaped by clinical insight.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">

                    {items.map((item, index) => (
                        <div key={index} className="group">

                            {/* Wrapper */}
                            <div className="relative">

                                {/* Image */}
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-300"
                                    />
                                </div>

                                {/* Arrow Button */}
                                <Link
                                    href="/products"
                                    className="group absolute -bottom-6 left-1/2 -translate-x-1/2 z-50"
                                >
                                    <div className="cursor-pointer bg-white group-hover:bg-brand w-12 h-12 rounded-full flex items-center justify-center shadow-md transition">
                                        <ArrowUpRight className="text-brand group-hover:text-white w-5 h-5" />
                                    </div>
                                </Link>

                            </div>

                            {/* Title */}
                            <h3 className="text-center mt-10 text-xl font-bold">
                                {item.title}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}