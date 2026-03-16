"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  country: z.string().min(2, "Country required"),
  quantity: z.string().min(1, "Quantity required"),
  product: z.string().min(1, "Select product"),
  message: z.string().min(5, "Message required"),
});

export default function ContactForm() {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
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
    <section className="py-24 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT CONTACT INFO */}
        <div className="my-auto p-4">

          <h2 className="text-3xl md:text-5xl font-semibold">
            Get in Touch
          </h2>

          <p className="mt-6 text-md md:text-lg text-gray-600 max-w-md">
            If you're interested in our ophthalmic technologies or want
            to discuss product distribution, send us an inquiry and our
            team will respond shortly.
          </p>

          {/* Contact Cards */}
          <div className="mt-10 space-y-6">

            <a
              href="tel:+0123456789"
              className="flex items-center gap-4 hover:text-brand transition"
            >
              <Phone className="text-brand" size={20} />
              +01 234 567 89
            </a>

            <a
              href="mailto:info@medsprings.com"
              className="flex items-center gap-4 hover:text-brand transition"
            >
              <Mail className="text-brand" size={20} />
              info@medsprings.com
            </a>

            <a
              href="https://maps.google.com/?q=London"
              target="_blank"
              className="flex items-center gap-4 hover:text-brand transition"
            >
              <MapPin className="text-brand" size={20} />
              London, United Kingdom
            </a>

          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/123456789"
            className="inline-flex items-center gap-2 mt-10 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>

        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm space-y-6"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <input
                {...register("name")}
                placeholder="Full Name"
                className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email")}
                placeholder="Email"
                className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <input
                {...register("country")}
                placeholder="Country"
                className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
            </div>

            <div>
              <input
                {...register("quantity")}
                placeholder="Quantity"
                className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
            </div>

          </div>

          <select
            {...register("product")}
            className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
          >
            <option value="">Product Interest</option>
            <option>Ophthalmic Devices</option>
            <option>Medical Instruments</option>
            <option>Pharmaceuticals</option>
          </select>

          {errors.product && (
            <p className="text-red-500 text-sm">{errors.product.message}</p>
          )}

          <textarea
            {...register("message")}
            placeholder="Message"
            rows={4}
            className="border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
          />

          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          <button
            disabled={isSubmitting}
            className="cursor-pointer bg-brand text-white px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>

        </form>

      </div>

    </section>
  );
}