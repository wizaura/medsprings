"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Categories", href: "/admin/categories" },
  { name: "Products", href: "/admin/products" },
  { name: "Inquiries", href: "/admin/inquiries" },
];

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Title */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-[#1F2147]">
            Admin Panel
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-2 bg-gray-100 p-1 rounded-full">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition
                  ${
                    active
                      ? "bg-[#1F2147] text-white shadow-sm"
                      : "text-gray-600 hover:text-[#1F2147]"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

        </nav>

      </div>

    </header>
  );
}