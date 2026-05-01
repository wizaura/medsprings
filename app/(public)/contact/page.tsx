// app/contact/page.tsx

import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/common/PageHero";

export default async function ContactPage() {

  return (
    <>
      <PageHero
        title="Let's Design Your Clinical Success Story - Let's Connect"
        description="We are ready to streamline your journey from initial inquiry to global distribution."
        image="/about-11.jpg"
      />

      <ContactForm />
    </>
  );
}