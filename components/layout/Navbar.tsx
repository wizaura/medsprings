"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 border-b w-full bg-white z-50 transition-all ${
        scrolled ? "border-gray-200 shadow-sm" : "border-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Medsprings"
            width={140}
            height={40}
          />
        </Link>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-base font-medium text-gray-700">

            <Link href="/" className="hover:text-brand transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-brand transition">
              About
            </Link>

            <Link href="/products" className="hover:text-brand transition">
              Products
            </Link>

            <Link href="/contact" className="hover:text-brand transition">
              Contact
            </Link>

          </nav>

          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone size={16} />
            <span>+0123-456-789</span>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="cursor-pointer md:hidden hover:text-brand"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">

          <nav className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <div className="flex items-center gap-2 pt-2 text-sm">
              <Phone size={16} />
              +0123-456-789
            </div>

          </nav>

        </div>
      )}
    </header>
  );
}