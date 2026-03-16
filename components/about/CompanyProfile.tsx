import Image from "next/image";

export default function CompanyProfile() {
    return (
        <section className="py-24 px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div className="relative h-[400px] rounded-xl overflow-hidden">
                    <Image
                        src="/about-1.jpg"
                        alt="Medsprings Company"
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Engineering Excellence in Eye Care
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                        Medsprings is a global provider of ophthalmic technologies and
                        solutions designed to enhance patient outcomes and improve
                        clinical performance. Our commitment to innovation ensures
                        healthcare professionals have access to reliable, high-quality
                        tools and equipment.
                    </p>

                    <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                        With a strong focus on research, product quality, and global
                        partnerships, Medsprings continues to expand its reach and
                        support healthcare providers across international markets.
                    </p>

                </div>

            </div>

        </section>
    );
}