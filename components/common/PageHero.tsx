type Props = {
  title: string;
  description?: string;
  backgroundImage?: string;
};

export default function PageHero({
  title,
  description,
  backgroundImage,
}: Props) {
  return (
    <section
      className="relative text-white py-24 px-6 overflow-hidden"
    >

      {/* Background Image (optional) */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-brand/80" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-semibold">
          {title}
        </h1>

        {description && (
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            {description}
          </p>
        )}

      </div>

    </section>
  );
}