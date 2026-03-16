import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 pb-10 min-h-[90vh] flex items-center">

      <div className="max-w-7xl mx-auto w-full">

        <div className="relative rounded-xl min-h-[80vh] flex items-center text-white overflow-hidden">

          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/home-hero-v.mp4" type="video/mp4" />
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 p-10 md:p-20 max-w-4xl">

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Engineering Possibilities
              <br />
              in Eye Care
            </h1>

            <p className="mt-6 text-gray-200 text-sm md:text-base max-w-sm leading-relaxed">
              Medsprings engineers ophthalmic technologies that strengthen
              the continuum of care across high-volume and high-performance
              settings.
            </p>

            <div className="mt-8 flex gap-4">

              <Link
                href="/contact"
                className="inline-block bg-brand px-6 py-3 rounded-md text-sm font-medium hover:opacity-90"
              >
                Book A Callback
              </Link>

              <Link
                href="/products"
                className="inline-block border border-white/60 px-6 py-3 rounded-md text-sm hover:bg-white hover:text-black transition"
              >
                Browse Products
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}