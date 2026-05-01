export function AboutIntro() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        {/* Sub Heading */}
        <p
          data-aos="fade-up"
          className="text-brand font-medium tracking-wide uppercase text-md"
        >
          About Us
        </p>

        {/* Main Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-3xl md:text-5xl font-semibold text-gray-900"
        >
          Precision Solutions for Global Surgery
        </h2>

        {/* Secondary Heading */}
        <h3
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-xl md:text-2xl text-gray-600 font-medium"
        >
          Advancing the Standards of Clinical Excellence
        </h3>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-6 text-gray-600 text-md md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Medsprings serves as a strategic link between advanced medical engineering and the global surgical community.
          Operating from India’s primary innovation hubs, we specialize in high-performance ophthalmic consumables
          designed for the rigors of modern surgical environments.
        </p>

      </div>
    </section>
  );
}