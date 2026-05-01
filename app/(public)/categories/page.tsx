import PageHero from "@/components/common/PageHero";
import Categories from "@/components/categories/Main";

export default function CategoryList() {
    return (
        <div>
            <PageHero
                title="Our Products"
                description="Explore our range of ophthalmic offerings designed to
                enhance clinical performance and patient outcomes."
                image="/product-header.jpg"
            />
            <Categories />
        </div>
    )
}