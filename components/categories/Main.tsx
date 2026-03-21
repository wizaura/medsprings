import Link from "next/link";

async function getCategories() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/category`, {
        cache: "no-store",
    });

    if (!res.ok) return [];

    return res.json();
}

export default async function Categories() {
    const categories = await getCategories();

    return (
        <section className="py-20 px-6">

            <div className="max-w-7xl mx-auto">

                {/* Sub Heading */}
                <div className="mb-12 text-center">

                    <h2 className="text-2xl md:text-3xl text-brand font-semibold">
                        Browse Categories
                    </h2>

                    <p className="mt-2 text-gray-500 text-base">
                        Select a category to explore products
                    </p>

                </div>

                {/* Grid */}
                {categories.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No categories available
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                        {categories.map((cat: any) => (
                            <Link
                                key={cat.id}
                                href={`/categories/${cat.slug}`}
                                className="group block"
                            >

                                <div className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

                                    {cat.image && (
                                        <img
                                            src={cat.image}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                                    <div className="absolute bottom-6 left-6 text-white">
                                        <h3 className="text-xl font-semibold">
                                            {cat.name}
                                        </h3>
                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>
                )}

            </div>

        </section>
    );
}