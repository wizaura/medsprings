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
    <header className={`fixed ${scrolled ? "top-0" : "top-4" } left-0 w-full z-50 transition-all duration-300`}>
      <div
        className={`mx-auto px-6 py-3 border transition-all duration-300 ${scrolled
          ? "bg-white shadow-md max-w-5xl rounded-b-3xl border-gray-200"
          : "bg-transparent max-w-8xl md:mx-8  border-transparent"
          }`}
      >

        {/* DESKTOP - NOT SCROLLED */}
        {!scrolled && (
          <div
            className="hidden md:grid grid-cols-3 items-center"
            data-aos="fade-down"
          >
            {/* Logo */}
            <div className="flex justify-start -ml-2">
              <Link href="/" className="flex items-center gap-3">

                <Image
                  src="/logo.png"
                  alt="Medsprings Logo"
                  width={34}
                  height={34}
                  className="rounded-lg"
                />

                <Image
                  src="/name-white.png"
                  alt="Medsprings"
                  width={280}
                  height={90}
                />

              </Link>
            </div>

            {/* Nav Center */}
            <nav className="flex justify-center gap-8 font-medium text-white">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition text-lg ${isActive(link.href)
                    ? "text-cyan-300"
                    : "hover:text-cyan-300"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Phone */}
            <div className="flex justify-end items-center gap-2 text-white hover:text-cyan-300 font-bold text-sm">
              <Phone size={16} />
              <a href="tel:+917200820012">
                +91 7200 8200 12
              </a>
            </div>
          </div>
        )}

        {/* MOBILE - ALWAYS VISIBLE */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <Link href="/">
            {scrolled ? (
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="Medsprings Logo"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />

                <Image
                  src="/name-colour.png"
                  alt="Medsprings"
                  width={200}
                  height={60}
                />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Medsprings Logo"
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <Image
                  src="/name-white.png"
                  alt="Medsprings"
                  width={200}
                  height={60}
                />
              </div>
            )}
          </Link>

          {/* Toggle */}
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X
                size={26}
                className={`cursor-pointer ${scrolled
                  ? "text-black hover:text-red-500"
                  : "text-white hover:text-red-500"
                  }`}
              />
            ) : (
              <Menu
                size={26}
                className={scrolled ? "text-black" : "text-white"}
              />
            )}
          </button>

        </div>

        {/* DESKTOP - SCROLLED */}
        {scrolled && (
          <div className="hidden md:flex items-center justify-between" data-aos="fade-down">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Medsprings Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />

              <Image
                src="/name-colour.png"
                alt="Medsprings"
                width={260}
                height={80}
              />
            </Link>

            <nav className="flex items-center gap-8 text-lg font-medium">
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
        className={`md:hidden mx-auto max-w-6xl bg-white rounded-3xl shadow-md overflow-hidden transition-all duration-300 ${open ? "max-h-[300px]" : "max-h-0"
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

          <div className="flex justify-end items-center gap-2 text-gray-700 hover:text-brand font-bold text-sm">
            <Phone size={16} />
            <a href="tel:+917200820012">
              +91 7200 8200 12
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}