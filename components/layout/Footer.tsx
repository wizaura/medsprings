import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default async function Footer() {

  return (
    <footer className="bg-brand text-white px-6 pb-8">

      <div className="max-w-7xl mx-auto">

        <div className="border-white/20 border-t"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12">

          {/* Logo */}
          <div className="md:col-span-2">
            <Image src="/logo.jpg" alt="Medsprings" width={120} height={40} />

            <p className="mt-4 text-white/80 text-sm max-w-xs">
              Delivering advanced ophthalmic technologies trusted worldwide.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">

              <Link href="#" className="hover:scale-110 hover:text-white/80 transition">
                <Facebook size={18} />
              </Link>

              <Link href="#" className="hover:scale-110 hover:text-white/80 transition">
                <Twitter size={18} />
              </Link>

              <Link href="#" className="hover:scale-110 hover:text-white/80 transition">
                <Instagram size={18} />
              </Link>

              <Link href="#" className="hover:scale-110 hover:text-white/80 transition">
                <Youtube size={18} />
              </Link>

            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>

            <div className="flex flex-col gap-3 text-white/80 text-sm">

              <Link
                href="/"
                className="hover:text-white transition relative w-fit"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="hover:text-white transition relative w-fit"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition relative w-fit"
              >
                Contact
              </Link>

            </div>
          </div>

          {/* Quick */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-white/80 text-sm">

              <Link
                href="/categories"
                className="hover:text-white transition relative w-fit"
              >
                All Products
              </Link>

              <Link
                href="/contact"
                className="hover:text-white transition relative w-fit"
              >
                Enquiry
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/20 text-xs text-white/60 text-center">
          © {new Date().getFullYear()} Medsprings. All rights reserved.
        </div>

      </div>

    </footer>
  );
}