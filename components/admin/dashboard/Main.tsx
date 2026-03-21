"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  const router = useRouter();

  const fetchDashboard = async () => {
    try {
      const res = await fetch("/api/admin/dashboard");
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // 🔥 LOGOUT
  const handleLogout = async () => {
    setLoggingOut(true);

    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      });

      router.push("/admin/login");

    } catch (err) {
      console.error("Logout failed");
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <div className="text-gray-500">Loading dashboard...</div>
    );
  }

  if (!data) {
    return (
      <div className="text-red-500">Failed to load dashboard</div>
    );
  }

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-semibold">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Overview of your platform
          </p>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          className="cursor-pointer text-sm font-bold border border-gray-200 px-4 py-2 rounded-lg hover:bg-red-400 hover:text-white transition"
        >
          {loggingOut ? "Logging out..." : "Logout"}
        </button>

      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Total Products</p>
          <h2 className="text-3xl font-semibold mt-2">
            {data.stats.products}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Total Categories</p>
          <h2 className="text-3xl font-semibold mt-2">
            {data.stats.categories}
          </h2>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-sm text-gray-500">Total Inquiries</p>
          <h2 className="text-3xl font-semibold mt-2">
            {data.stats.inquiries}
          </h2>
        </div>

      </div>

      {/* RECENT PRODUCTS */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">

        <h2 className="text-lg font-semibold mb-6">
          Recent Products
        </h2>

        {data.recentProducts.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No products yet
          </p>
        ) : (

          <div className="space-y-4">

            {data.recentProducts.map((p: any) => (
              <div
                key={p.id}
                className="flex items-center justify-between border-b pb-3 last:border-0"
              >

                <div className="flex items-center gap-4">

                  <img
                    src={p.image1}
                    className="w-12 h-12 rounded-lg object-cover border"
                  />

                  <div>
                    <p className="font-medium">{p.name}</p>
                    <p className="text-xs text-gray-500">
                      {p.category?.name}
                    </p>
                  </div>

                </div>

                <Link
                  href={`/admin/products`}
                  className="text-sm text-brand"
                >
                  View
                </Link>

              </div>
            ))}

          </div>

        )}

      </div>

    </div>
  );
}