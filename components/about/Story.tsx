export function OurStory() {
  return (
    <section
      className="relative py-24 px-6 text-white"
      style={{
        backgroundImage: "url('/about-12.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-semibold"
        >
          Our Story: Two Decades of Clinical Insights
        </h2>

        {/* Paragraph 1 */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-6 text-white leading-relaxed"
        >
          For over two decades, we have been at the very heart of the ophthalmic industry.
          Prior to Medsprings, we built an impressive legacy for others—taking advanced intraocular
          lenses, critical surgical equipment, and essential OVDs to global markets. Our work helped
          establish distribution networks across multiple countries and secure product registrations
          in key international markets.
        </p>

        {/* Paragraph 2 */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-white leading-relaxed"
        >
          Through this journey, we saw an unmet demand not just for individual products,
          but for a consolidated, trusted offering that covered the entire value chain.
          Surgeons and healthcare providers were not just looking for a supplier — they
          were looking for a partner. A partner built on quality, consistency, and fair pricing.
          This moment of clarity became our call to action. Medsprings was founded to forge
          a new path — one built on innovation, trust, and a deep connection to the people we serve.
        </p>

        {/* North Star Block */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white">
            Our North Star: Bridging the Gap in Global Eye Care
          </h3>

          <p className="mt-4 text-white/80 leading-relaxed">
            Inspired by the precision of legacy leaders and the accessibility of emerging pioneers,
            Medsprings was established to move beyond the traditional supplier to become a true
            scientific partner. We provide a consolidated, high-tier alternative that prioritizes
            the patient–surgeon relationship. We bridge the gap between sophisticated engineering
            and practical affordability, ensuring that gold-standard consumables are within reach
            of every practitioner.
          </p>
        </div>

      </div>
    </section>
  );
}