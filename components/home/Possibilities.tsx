import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

async function getCategories() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/category`, {
    cache: "no-store",
  });

  if (!res.ok) return [];
  const data = await res.json();
  return data.slice(0, 3);
}

export default async function Possibilities() {
  const items = await getCategories();

  return (
    <section className="bg-brand text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-semibold tracking-wide"
          >
            Architects of Superior Clinical Outcomes
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-sm md:text-lg text-white/80 max-w-xl mx-auto"
          >
            Medsprings streamlines the path from procurement to patient care 
            through high-efficiency processing and elite product standards.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden">

                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Arrow */}
                <Link
                  href={`/categories/${item.slug}`}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="cursor-pointer bg-white group-hover:bg-brand w-12 h-12 rounded-full flex items-center justify-center shadow-md transition">
                    <ArrowUpRight className="text-brand group-hover:text-white w-5 h-5" />
                  </div>
                </Link>
              </div>

              {/* Title */}
              <h3 className="text-center mt-6 text-xl font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View All */}
        <div
          data-aos="fade-left"
          className="flex justify-end mt-8"
        >
          <Link
            href="/categories"
            className="text-sm text-white/80 hover:text-white hover:underline hover:underline-offset-4 transition"
          >
            View All Categories →
          </Link>
        </div>

      </div>
    </section>
  );
}