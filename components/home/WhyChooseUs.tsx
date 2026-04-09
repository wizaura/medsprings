import { Briefcase, MessageSquare, Clipboard } from "lucide-react";

const features = [
    {
        icon: Briefcase,
        title: "Proven track record",
        desc: "We are dedicated to providing the highest level of service, delivering",
    },
    {
        icon: MessageSquare,
        title: "Collaborative approach",
        desc: "We are dedicated to providing the highest level of service, delivering",
    },
    {
        icon: Clipboard,
        title: "Innovative solutions",
        desc: "We leverage the latest technologies to deliver solutions.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-6 bg-white">

            <div className="max-w-6xl mx-auto text-center">

                {/* Small label */}
                <div className="flex items-center justify-center gap-3 mb-6">

                    <div className="w-10 h-[2px] bg-brand"></div>

                    <span className="text-brand text-base md:text-lg font-medium">
                        Why choose us
                    </span>

                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
                    We strive to deliver <br /> value to our clients
                </h2>

                {/* Subtitle */}
                <p className="mt-6 text-gray-600 max-w-xl mx-auto text-sm md:text-lg">
                    We are dedicated to providing the highest level of service, delivering
                    We are dedicated to providing the highest level of service, delivering
                </p>

            </div>

            {/* Features */}
            <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-10 md:gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className={`flex gap-5 px-6 ${index !== features.length - 1
                                    ? "md:border-r md:border-gray-200"
                                    : ""
                                }`}
                        >
                            <div className="bg-brand text-white w-12 h-12 flex items-center justify-center rounded-md shrink-0">
                                <Icon size={20} />
                            </div>

                            <div>
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-sm md:text-base mt-2">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}