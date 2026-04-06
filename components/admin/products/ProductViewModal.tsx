"use client";

import { useEffect, useState } from "react";

export default function ProductViewModal({
  open,
  product,
  onClose,
}: {
  open: boolean;
  product: any;
  onClose: () => void;
}) {
  const [active, setActive] = useState(product?.image1);

  useEffect(() => {
    if (product?.image1) {
      setActive(product.image1);
    }
  }, [product]);

  if (!open || !product) return null;

  const images = [product.image1, product.image2].filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-5xl rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            {product.tagline && (
              <p className="text-sm text-gray-500">{product.tagline}</p>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT → Images */}
          <div>

            {/* Main Image */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <img
                src={active}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {images.map((img: string, i: number) => (
                  <button
                    key={i}
                    onClick={() => setActive(img)}
                    className={`w-16 h-16 rounded-md overflow-hidden border ${
                      active === img
                        ? "border-brand"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Header Background Preview */}
            {product.image3 && (
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-2">
                  Header Background
                </p>
                <img
                  src={product.image3}
                  className="w-full h-32 object-cover rounded-lg border"
                />
              </div>
            )}

          </div>

          {/* RIGHT → Details */}
          <div className="space-y-4">

            <div>
              <p className="text-sm text-gray-400">Category</p>
              <p className="font-medium">
                {product.category?.name}
              </p>
            </div>

            {product.shortDesc && (
              <div>
                <p className="text-sm text-gray-400">Short Description</p>
                <p className="text-gray-700 text-sm">
                  {product.shortDesc}
                </p>
              </div>
            )}

            <div>
              <p className="text-sm text-gray-400">Description</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            {product.features?.length > 0 && (
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  Key Features
                </p>

                <ul className="space-y-2">
                  {product.features.map((f: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-brand mt-1">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specifications */}
            {product.specifications?.length > 0 && (
              <div>
                <p className="text-sm text-gray-400 mb-2">
                  Technical Specifications
                </p>

                <div className="border border-gray-300 rounded-lg overflow-hidden text-sm">
                  {product.specifications.map((s: any, i: number) => (
                    <div
                      key={i}
                      className="grid grid-cols-2 border-b border-gray-300 last:border-b-0"
                    >
                      <div className="bg-gray-50 p-2 font-medium">
                        {s.feature}
                      </div>
                      <div className="p-2">{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}