"use client";

import { useEffect, useState } from "react";

type Inquiry = {
  id: string;
  fullName: string;
  role?: string;
  email: string;
  phone?: string;
  organisation?: string;
  helpType: string;
  message: string;
  createdAt: string;
};

export default function InquiriesAdmin() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const fetchInquiries = async () => {
    const res = await fetch("/api/admin/inquiries");
    const data = await res.json();
    setInquiries(data);
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const filtered = inquiries.filter((i) =>
    i.fullName.toLowerCase().includes(search.toLowerCase()) ||
    i.helpType.toLowerCase().includes(search.toLowerCase()) ||
    i.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold">Inquiries</h1>
        <p className="text-gray-500 mt-2">Manage customer inquiries</p>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search by name, email or help type..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-200 px-4 py-2 rounded-lg w-full max-w-md"
      />

      {/* LIST */}
      <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-200">

        {filtered.length === 0 && (
          <p className="p-6 text-gray-500 text-sm">No inquiries found</p>
        )}

        {filtered.map((i) => (
          <div
            key={i.id}
            className="p-5 flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <p className="font-medium">{i.fullName}</p>
              <p className="text-sm text-gray-500">{i.helpType}</p>
              <p className="text-xs text-gray-400 mt-1">
                {new Date(i.createdAt).toLocaleString()}
              </p>
            </div>

            <button
              onClick={() => setSelected(i)}
              className="cursor-pointer hover:underline text-sm text-brand"
            >
              View
            </button>
          </div>
        ))}
      </div>

      {/* VIEW MODAL */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden">

            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Inquiry Details</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">

              {/* Info Grid */}
              <div className="grid md:grid-cols-2 gap-4 text-sm">

                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Full Name</p>
                  <p className="font-medium">{selected.fullName}</p>
                </div>

                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Email</p>
                  <a
                    href={`mailto:${selected.email}`}
                    className="font-medium text-brand hover:underline"
                  >
                    {selected.email}
                  </a>
                </div>

                {selected.role && (
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Role</p>
                    <p className="font-medium">{selected.role}</p>
                  </div>
                )}

                {selected.organisation && (
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Organisation</p>
                    <p className="font-medium">{selected.organisation}</p>
                  </div>
                )}

                <div className="border border-gray-200 rounded-xl p-4 md:col-span-2">
                  <p className="text-gray-400 text-xs mb-1">Help Type</p>
                  <p className="font-medium">{selected.helpType}</p>
                </div>

                {selected.phone && (
                  <div className="border border-gray-200 rounded-xl p-4">
                    <p className="text-gray-400 text-xs mb-1">Phone</p>
                    <a
                      href={`tel:${selected.phone}`}
                      className="font-medium text-brand hover:underline"
                    >
                      {selected.phone}
                    </a>
                  </div>
                )}

                <div className="border border-gray-200 rounded-xl p-4">
                  <p className="text-gray-400 text-xs mb-1">Date</p>
                  <p className="font-medium">
                    {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>

              </div>

              {/* Message */}
              <div className="border border-gray-200 rounded-xl p-4">
                <p className="text-gray-400 text-xs mb-2">Message</p>
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selected.message}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${selected.email}`}
                  className="bg-brand text-white px-5 py-2 rounded-lg text-sm hover:opacity-90"
                >
                  Reply via Email
                </a>

                {selected.phone && (
                  <a
                    href={`tel:${selected.phone}`}
                    className="border border-gray-200 px-5 py-2 rounded-lg text-sm"
                  >
                    Call
                  </a>
                )}

                <button
                  onClick={() => setSelected(null)}
                  className="cursor-pointer border border-gray-200 hover:bg-gray-200 px-5 py-2 rounded-lg text-sm ml-auto"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}