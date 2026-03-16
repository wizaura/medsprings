import { Target, Eye, ShieldCheck } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    desc: "To deliver innovative ophthalmic technologies that enhance vision care and empower healthcare professionals worldwide.",
    icon: Target,
  },
  {
    title: "Our Vision",
    desc: "To become a globally trusted leader in ophthalmic solutions by continuously advancing medical innovation.",
    icon: Eye,
  },
  {
    title: "Our Values",
    desc: "Integrity, quality, innovation, and commitment to improving lives through better vision care.",
    icon: ShieldCheck,
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-semibold">
            Our Purpose
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            Guided by innovation, responsibility, and a commitment to
            improving vision care worldwide.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="relative overflow-hidden group bg-white rounded-2xl p-10 border border-gray-200 hover:bg-brand hover:text-white hover:shadow-xl transition duration-300"
              >

                {/* Decorative circle */}
                <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition"></div>

                {/* Icon */}
                <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-white/20 group-hover:text-white mb-6 transition">

                  <Icon size={26} />

                </div>

                {/* Title */}
                <h3 className="relative z-10 text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="relative z-10 mt-4 text-gray-600 group-hover:text-white/80 text-sm leading-relaxed transition">
                  {item.desc}
                </p>

                {/* Accent Line */}
                <div className="relative z-10 mt-8 w-10 h-[3px] bg-brand group-hover:bg-white group-hover:w-16 transition-all"></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}