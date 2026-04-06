// app/contact/page.tsx

import ContactForm from "@/components/contact/ContactForm";
import PageHero from "@/components/common/PageHero";

export default async function ContactPage() {

  return (
    <>
      <PageHero
        title="Advanced Healthcare, Trusted Doctors"
        description="MedSprings offers modern medical care with experienced professionals and world-class facilities."
        image="/about-11.jpg"
      />

      <ContactForm />
    </>
  );
}