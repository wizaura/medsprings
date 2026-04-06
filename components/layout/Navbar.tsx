"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-4 left-0 w-full z-50 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl px-6 py-3 border transition-all duration-300 ${scrolled
            ? "bg-white shadow-md rounded-xl border-gray-200"
            : "bg-transparent border-transparent"
          }`}
      >

        {/* DESKTOP - NOT SCROLLED */}
        {!scrolled && (
          <div
            className="hidden md:grid grid-cols-3 items-center"
            data-aos="fade-down"
          >
            {/* Logo */}
            <div className="flex justify-start brightness-1">
              <Link href="/">
                <Image src="/logo_1.png" alt="Medsprings" width={140} height={40} />
              </Link>
            </div>

            {/* Nav Center */}
            <nav className="flex justify-center gap-8 font-medium text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${isActive(link.href)
                      ? "text-cyan-300"
                      : "hover:text-cyan-300"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Phone */}
            <div className="flex justify-end items-center gap-2 text-white text-sm">
              <Phone size={16} />
              +0123-456-789
            </div>
          </div>
        )}

        {/* MOBILE - ALWAYS VISIBLE */}
        <div className="flex md:hidden items-center justify-between">
          <Link href="/">
            <Image src="/logo_1.png" alt="Medsprings" width={110} height={40} />
          </Link>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className={scrolled ? "text-black" : "text-white"} />
            ) : (
              <Menu className={scrolled ? "text-black" : "text-white"} />
            )}
          </button>
        </div>

        {/* DESKTOP - SCROLLED */}
        {scrolled && (
          <div className="hidden md:flex items-center justify-between" data-aos="fade-down">
            <Link href="/">
              <Image src="/logo.jpg" alt="Medsprings" width={120} height={40} />
            </Link>

            <nav className="flex items-center gap-8 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${isActive(link.href)
                      ? "text-brand"
                      : "text-gray-700 hover:text-brand"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mx-auto max-w-6xl mt-2 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-[300px]" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-brand"
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