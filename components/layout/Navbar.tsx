"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 Active checker
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/categories" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-white border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-white"
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

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">

          <nav className="flex items-center gap-8 text-base font-medium">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-gray-700 hover:text-brand"
                }`}
              >
                {link.name}

                {/* 🔥 underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-brand transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

          </nav>

          {/* Phone */}
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Phone size={16} />
            <span>+0123-456-789</span>
          </div>

        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden hover:text-brand transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6 font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`transition ${
                isActive(link.href)
                  ? "text-brand"
                  : "text-gray-700 hover:text-brand"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-2 pt-2 text-sm text-gray-600">
            <Phone size={16} />
            +0123-456-789
          </div>

        </nav>
      </div>

    </header>
  );
}