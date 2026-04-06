// app/categories/[slug]/page.tsx

import PageHero from "@/components/common/PageHero";
import CategoryProducts from "@/components/products/Main";

async function getCategory(slug: string) {
    console.log(slug, 'ds')
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/category/${slug}`,
        { cache: "no-store" }
    );

    if (!res.ok) return null;

    return res.json();
}

export default async function ProductsListPage({
    params,
}: {
    params: { slug: string };
}) {

    const { slug } = await params;

    const data = await getCategory(slug);

    return (
        <div>
            <PageHero
                title={data.name}
                description="Discover advanced medical solutions designed to support healthcare professionals with precision, 
                safety, and performance in every clinical setting."
                image={data.image}
            />
            <CategoryProducts data={data} />
        </div>
    );
}