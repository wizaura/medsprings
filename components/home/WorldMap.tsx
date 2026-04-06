"use client";

export default function GlobalMap() {
  const locations = [
    { name: "USA", top: "45%", left: "23%" },
    { name: "Brazil", top: "73%", left: "35%" },
    { name: "UK", top: "30%", left: "46%" },
    { name: "Germany", top: "35%", left: "52%" },
    { name: "UAE", top: "51%", left: "60%" },
    { name: "India", top: "54%", left: "66%" },
    { name: "Japan", top: "44%", left: "81%" },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-2">
        Global Presence
      </h2>

      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
        Expanding access to advanced ophthalmic technologies across international markets.
      </p>

      <div className="relative w-full max-w-7xl mx-auto aspect-[2/1]">
        <img
          src="/world-line-2.svg"
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Pins */}
        {locations.map((loc) => (
          <div
            key={loc.name}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
            style={{ top: loc.top, left: loc.left }}
          >
            {/* Green pulse ring */}
            <div className="w-8 h-8 rounded-full absolute animate-ping bg-emerald-400/30"></div>

            {/* Pin */}
            <div className="relative">
              {/* Shadow */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-3 h-2 bg-black/20 blur-sm rounded-full"></div>

              {/* Silver outer */}
              <div
                className="w-5 h-5 rounded-full border border-gray-400 shadow-md flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #ffffff, #e5e7eb 40%, #9ca3af 70%, #6b7280)",
                }}
              >
                {/* Green inner dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-inner"></div>
              </div>

              {/* Pin tip */}
              <div
                className="w-2 h-3 mx-auto -mt-1"
                style={{
                  background:
                    "linear-gradient(to bottom, #9ca3af, #6b7280)",
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
              ></div>
            </div>

            {/* Label */}
            <p className="text-xs mt-2 text-gray-700 font-medium whitespace-nowrap">
              {loc.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}