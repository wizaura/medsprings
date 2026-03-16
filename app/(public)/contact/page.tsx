import ContactHero from "@/components/contact/Hero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/GoogleMapsSection";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </>
  );
}