import PageHero from "@/components/common/PageHero";
import ProductDetails from "@/components/products/Details";

async function getProduct(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/products/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getProduct(slug);

  return (
    <div>
      <PageHero
        title={data.name}
        description={`${data.shortDesc || "Discover advanced medical solutions designed to support healthcare professionals with precision, safety, and performance in every clinical setting." }`}
        image={data.image3}
      />
      <ProductDetails data={data} />;
    </div>
  )
}