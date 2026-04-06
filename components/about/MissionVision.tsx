import { Target, Eye } from "lucide-react";

const items = [
  {
    title: "Our Vision",
    desc: "Clarity, Evolved. For the World. To be the Global Standard in Ophthalmic Precision, evolving surgical clarity for the world’s most demanding markets.",
    icon: Eye,
  },
  {
    title: "Our Mission",
    desc: "Elevating Surgical Outcomes. We engineer and deliver high-performance ophthalmic solutions that exceed international regulatory standards, empowering surgical excellence through innovation and clinical partnership.",
    icon: Target,
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
            className="text-brand uppercase tracking-wider text-sm font-medium"
          >
            Vision & Mission
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-4xl font-semibold mt-2"
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
                className="relative overflow-hidden group bg-white rounded-2xl p-10 border border-gray-200 hover:bg-brand hover:text-white hover:shadow-xl transition duration-300"
              >

                {/* Decorative SVG Circle */}
                <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-brand/10 rounded-full opacity-0 group-hover:opacity-100 transition"></div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-white/20 group-hover:text-white mb-6 transition">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-2xl font-semibold">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="relative z-10 mt-4 text-gray-600 group-hover:text-white/80 leading-relaxed">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div className="relative z-10 mt-8 w-12 h-[3px] bg-brand group-hover:bg-white group-hover:w-20 transition-all"></div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}