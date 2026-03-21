// /components/common/ProductSelect.tsx

"use client";

import { useEffect, useState } from "react";

export default function ProductSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">

      {/* Input */}
      <input
        value={
          products.find((p) => p.slug === value)?.name || search
        }
        onChange={(e) => {
          setSearch(e.target.value);
          onChange("");
          setOpen(true);
        }}
        placeholder="Search Product"
        className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">

          {filtered.length === 0 && (
            <p className="p-3 text-sm text-gray-400">
              No products found
            </p>
          )}

          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                onChange(p.slug);
                setSearch("");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-50 cursor-pointer text-sm"
            >
              {p.name}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}