import { CheckCircle } from "lucide-react";

export function Advantage() {
  const items = [
    {
      title: "Clinical Precision",
      desc: "Optimized for consistent, repeatable performance during every procedure.",
    },
    {
      title: "Regulatory Rigor",
      desc: "Vetted against global compliance frameworks like ISO and CE.",
    },
    {
      title: "Operational Agility",
      desc: "Streamlined supply chain integrated into global healthcare infrastructures.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading Block */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-semibold"
          >
            The Medsprings Advantage
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600"
          >
            We offer a curated portfolio engineered to remove the logistical
            and financial barriers to premium surgical care.
          </p>

          {/* Small divider */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-16 h-[3px] bg-brand mx-auto mt-6"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {items.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="border border-gray-200 rounded-xl p-8 transition duration-300 hover:shadow-xl hover:-translate-y-1 bg-white"
            >
              <CheckCircle className="text-brand mb-5" size={26} />

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}