"use client";

import { Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const schema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  role: z.string().min(2, "Title/Role is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(6, "Contact number required"),
  organisation: z.string().min(2, "Organisation name required"),
  helpType: z.string().min(1, "Please select an option"),
  message: z.string().min(5, "Requirement details required"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const options = [
    "Distributorship",
    "Product Requirements",
    "General",
    "Escalations",
  ];

  const onSubmit = async (data: any) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Inquiry sent successfully!");
      reset();
    } catch {
      toast.error("Failed to send inquiry.");
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white via-brand/10 to-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="my-auto">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Your journey to better outcomes begins here.
            <br />
            <span className="text-brand">We're listening.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          {/* Response Badge */}
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm mt-6">
            Response Time: Within 24 Hours
          </div>

          {/* Contact Info */}
          <div className="mt-10 space-y-5">
            <a href="tel:+917200820012" className="flex items-center gap-4 hover:text-brand transition">
              <Phone className="text-brand" size={20} />
              +91 7200820012
            </a>

            <a href="tel:+917200829697" className="flex items-center gap-4 hover:text-brand transition">
              <Phone className="text-brand" size={20} />
              +91 7200829697
            </a>

            <a href="mailto:info@medsprings.in" className="flex items-center gap-4 hover:text-brand transition">
              <Mail className="text-brand" size={20} />
              info@medsprings.in
            </a>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917200820012"
            className="inline-flex items-center gap-2 mt-8 bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition shadow-md"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/80 backdrop-blur-md p-10 rounded-2xl border border-gray-200 shadow-xl space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="label">Full Name</label>
              <input {...register("fullName")} className="input" placeholder="John Doe" />
              <p className="error">{errors.fullName?.message as string}</p>
            </div>

            <div>
              <label className="label">Title / Role</label>
              <input {...register("role")} className="input" placeholder="Manager / Doctor / Distributor" />
              <p className="error">{errors.role?.message as string}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="label">Email ID</label>
              <input {...register("email")} className="input" placeholder="you@example.com" />
              <p className="error">{errors.email?.message as string}</p>
            </div>

            <div>
              <label className="label">Contact Number</label>
              <input {...register("phone")} className="input" placeholder="+91 9876543210" />
              <p className="error">{errors.phone?.message as string}</p>
            </div>
          </div>

          <div>
            <label className="label">Organisation Name</label>
            <input {...register("organisation")} className="input" placeholder="Hospital / Company Name" />
            <p className="error">{errors.organisation?.message as string}</p>
          </div>

          <div className="relative" ref={dropdownRef}>
            <label className="label">How can we help you?</label>

            <div
              onClick={() => setOpen(!open)}
              className={`input flex justify-between items-center cursor-pointer ${open ? "ring-2 ring-brand/20 border-brand" : ""
                }`}
            >
              <span className={watch("helpType") ? "text-black" : "text-gray-400"}>
                {watch("helpType") || "Select an option"}
              </span>

              {/* Rotating Arrow */}
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"
                  }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Dropdown */}
            <div
              className={`absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-200 ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setValue("helpType", option);
                    setOpen(false);
                  }}
                  className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                >
                  {option}
                </div>
              ))}
            </div>

            <p className="error">{errors.helpType?.message as string}</p>
          </div>

          <div>
            <label className="label">Requirement Details</label>
            <textarea
              {...register("message")}
              rows={4}
              className="input"
              placeholder="Tell us about your requirement..."
            />
            <p className="error">{errors.message?.message as string}</p>
          </div>

          <p className="text-sm text-gray-500">
            Our team will respond within 24 hours.
          </p>

          <button
            disabled={isSubmitting}
            className="cursor-pointer w-full bg-brand text-white py-3 rounded-xl font-medium hover:shadow-lg hover:scale-[1.02] transition"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>

      {/* Reusable Styles */}
      <style jsx>{`
        .input {
  margin-top: 6px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 10px 16px;
  width: 100%;
  outline: none;
  transition: all 0.25s ease;
  background: #fff;
}

.input:hover {
  border-color: #d1d5db;
}

.input:focus {
  border-color: #0ea5a4;
  box-shadow: 0 0 0 3px rgba(14, 165, 164, 0.15);
}

.label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.error {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
}

/* Smooth dropdown animation */
.dropdown-enter {
  opacity: 0;
  transform: translateY(-8px);
}
.dropdown-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.2s ease;
}
      `}</style>
    </section>
  );
}