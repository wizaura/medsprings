type Props = {
  title: string;
  description?: string;
  image?: string;
};

export default function PageHero({
  title,
  description,
  image,
}: Props) {
  return (
    <section className="relative bg-brand text-white overflow-hidden">

      {/* ========== MOBILE HERO (Image Background) ========== */}
      <div className="relative md:hidden h-[300px]">
        {image && (
          <img
            src={image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex items-center h-full px-6">
          <div>
            <h1 className="text-3xl font-semibold leading-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-3 text-sm text-white/90">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ========== DESKTOP HERO (Diagonal Layout) ========== */}
      <div className="hidden md:grid md:grid-cols-2 h-[380px]">
        
        {/* Left Content */}
        <div className="flex items-center px-8 md:px-16 relative z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              {title}
            </h1>

            {description && (
              <p className="mt-4 text-lg text-white/80 max-w-lg">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full">
          {image && (
            <img
              src={image}
              alt="Hero"
              className="w-full h-full object-cover clip-diagonal"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />
        </div>
      </div>

      {/* Diagonal Divider */}
      <svg
        className="hidden md:block absolute top-0 left-1/2 h-full w-32 -translate-x-1/2"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="#00E5FF"
          strokeOpacity="0.7"
          strokeWidth="1.2"
        />
        <line
          x1="95"
          y1="0"
          x2="0"
          y2="95"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      </svg>
    </section>
  );
}