import { Target, Eye } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    desc: "Clarity, Evolved. For the World. To be the Global Standard in Ophthalmic Precision, evolving surgical clarity for the world’s most demanding markets.",
    icon: Eye,
    image: "/about-13.jpg",
  },
  {
    title: "Our Mission",
    desc: "Elevating Surgical Outcomes. We engineer and deliver high-performance ophthalmic solutions that exceed international regulatory standards, empowering surgical excellence through innovation and clinical partnership.",
    icon: Target,
    image: "/about-14.jpg",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            data-aos="fade-up"
            className="text-brand uppercase tracking-wider text-md font-medium"
          >
            Vision & Mission
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-semibold mt-2"
          >
            Guided by Purpose. Driven by Precision.
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600"
          >
            Our vision defines where we are going. Our mission defines how we get there.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="relative overflow-hidden group rounded-2xl h-[320px] flex items-end border border-gray-200 shadow-sm"
              >

                {/* Background Image */}
                <img
                  src={item.image}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

                {/* Content */}
                <div className="relative z-10 p-8 text-white">

                  {/* Icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/20 mb-4">
                    <item.icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-white text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Accent line */}
                  <div className="mt-5 w-10 h-[2px] bg-white group-hover:w-16 transition-all"></div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}