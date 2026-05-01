export default function WhyPartner() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Intro */}
        <div className="text-center max-w-3xl mx-auto">
          <p
            data-aos="fade-up"
            className="text-brand uppercase tracking-wider text-md font-medium"
          >
            Join Our Global Network
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl md:text-5xl font-semibold mt-2"
          >
            Why Partner with Medsprings
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600"
          >
            We invite you to partner with us in the democratization of essential
            medical technologies. Together, we can enhance clinical efficiency
            and patient recovery across the globe.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-16 h-[3px] bg-brand mx-auto mt-6"
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Medical Practitioners */}
          <div
            data-aos="fade-right"
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-6">
              For Medical Practitioners
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Clinically tested and proven products</li>
              <li>• Wide range of ophthalmic solutions</li>
              <li>• Patient safety focused engineering</li>
              <li>• CE, ISO & international quality standards</li>
              <li>• Tender support</li>
              <li>• Value for money</li>
            </ul>
          </div>

          {/* Business Partners */}
          <div
            data-aos="fade-left"
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-6">
              For Business Partners – Distributors & Importers
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Marketing & sales support</li>
              <li>• Import documentation support</li>
              <li>• Simplified order processing</li>
              <li>• Regulatory support (CE, ISO, GMP)</li>
              <li>• Product registration assistance</li>
              <li>• 24/7 documentation support team</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}