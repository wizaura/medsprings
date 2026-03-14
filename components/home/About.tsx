import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-12 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-4xl font-semibold text-brand">
                        About Us
                    </h2>

                    <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm md:text-base">
                        Ophthalmic Intelligence. Trusted Worldwide. <br />
                        Technologies and tools shaped by clinical insight.
                    </p>

                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div className="w-full">

                        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden">

                            <Image
                                src="/home_about_1.jpg"
                                alt="Eye care technology"
                                fill
                                className="object-cover"
                            />

                        </div>

                    </div>

                    {/* Text Content */}
                    <div>

                        <h3 className="text-3xl md:text-4xl font-semibold text-brand leading-tight">
                            Helping the world, see better
                        </h3>

                        <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-base">
                            We began by solving one pressing need, engineering high-quality
                            intraocular lenses that were both reliable and accessible.
                            Beyond numbers, we are measured by something simpler: how many
                            people can see the world better because of what we build.
                        </p>

                        <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                            We began by solving one pressing need, engineering high-quality
                            intraocular lenses that were both reliable and accessible.
                            Beyond numbers, we are measured by something simpler: how many
                            people can see the world better because of what we build.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block mt-8 bg-brand text-white px-6 py-3 rounded-md text-sm hover:opacity-90"
                        >
                            Book A Callback
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}