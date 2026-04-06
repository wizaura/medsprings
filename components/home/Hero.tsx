import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 animate-videoZoom"
      >
        <source src="/home-hero-v.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 max-w-6xl">

        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-semibold leading-tight"
        >
          Engineering Possibilities
          <br />
          in Eye Care
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed"
        >
          Medsprings engineers ophthalmic technologies that strengthen
          the continuum of care across high-volume and high-performance
          settings.
        </p>

      </div>
    </section>
  );
}