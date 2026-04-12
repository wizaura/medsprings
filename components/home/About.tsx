import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image */}
                    <div
                        data-aos="fade-right"
                        className="w-full"
                    >
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/home_about_1.jpg"
                                alt="Eye care technology"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div data-aos="fade-left">
                        <h3 className="text-3xl md:text-5xl font-semibold text-brand leading-tight">
                            Inspiring You to Thrive
                        </h3>

                        <p className="mt-6 text-gray-600 leading-relaxed text-sm md:text-lg">
                            There is a moment after every successful procedure — when a patient 
                            sees clearly, breathes deeply, and feels the world rush back in. 
                            That moment is why Medsprings exists. We didn't start with a catalogue.
                             We started with a question — what does a patient truly deserve? 
                             The answer shaped everything. It shaped how we source our materials, 
                             how we engineer our products, and how we show up for the surgeons and 
                             partners who trust us. Every innovation we engineer carries one intention — 
                             to inspire every patient to step boldly back into a life that thrives.

                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
}