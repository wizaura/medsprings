// app/contact/page.tsx

import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/GoogleMapsSection";
import PageHero from "@/components/common/PageHero";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;

  return (
    <>
      <PageHero
        title="Contact Us"
        description="Have questions about our products or want to discuss a partnership? Our team is here to assist you."
      />

      <ContactForm preselectedProduct={product} />

      <ContactMap />
    </>
  );
}