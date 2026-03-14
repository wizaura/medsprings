import Link from "next/link";

const steps = [
    {
        number: "01.",
        title: "Discovery",
        desc: "The first step is to gain a deep understanding of your business.",
    },
    {
        number: "03.",
        title: "Implementation",
        desc: "The first step is to gain a deep understanding of your business.",
    },
    {
        number: "02.",
        title: "Development",
        desc: "The first step is to gain a deep understanding of your business.",
    },
    {
        number: "04.",
        title: "Monitoring",
        desc: "The first step is to gain a deep understanding of your business.",
    },
];

export default function Process() {
    return (
        <section className="bg-brand text-white py-24 px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Left side */}
                <div>

                    <h2 className="text-3xl md:text-5xl font-semibold">
                        Our process
                    </h2>

                    <p className="mt-6 text-white/80 max-w-sm">
                        We are dedicated to providing the highest level of service, delivering
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block cursor-pointer mt-8 border border-white/60 px-6 py-3 rounded-full text-sm hover:bg-white hover:text-brand transition"
                    >
                        Call Us
                    </Link>

                </div>

                {/* Right side */}
                <div className="grid sm:grid-cols-2 gap-6">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-black/10 rounded-xl p-8 hover:bg-black/20 transition"
                        >

                            <div className="text-3xl font-semibold text-white/80">
                                {step.number}
                            </div>

                            <h3 className="mt-6 text-lg font-semibold">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm text-white/70">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}