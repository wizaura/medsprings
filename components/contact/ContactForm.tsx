"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { FaWhatsapp } from "react-icons/fa";
import ProductSelect from "@/components/common/ProductSelect";
import { useEffect } from "react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  country: z.string().min(2, "Country required"),
  quantity: z.string().min(1, "Quantity required"),
  product: z.string().min(1, "Select product"),
  message: z.string().min(5, "Message required"),
});

export default function ContactForm({
  preselectedProduct,
}: {
  preselectedProduct?: string;
}) {

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(schema),
  });

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

  useEffect(() => {
    if (preselectedProduct) {
      setValue("product", preselectedProduct);
    }
  }, [preselectedProduct, setValue]);

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
          className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm space-y-4"
        >

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                {...register("name")}
                placeholder="John Doe"
                className="mt-1 border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                {...register("email")}
                placeholder="you@example.com"
                className="mt-1 border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                {...register("country")}
                placeholder="India"
                className="mt-1 border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Quantity Required
              </label>
              <input
                {...register("quantity")}
                placeholder="e.g. 100 units"
                className="mt-1 border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>

          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Interest
            </label>

            <div className="mt-1">
              <ProductSelect
                value={watch("product")}
                onChange={(val) => setValue("product", val)}
              />
            </div>

            {errors.product && (
              <p className="text-red-500 text-sm mt-1">
                {errors.product.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Message
            </label>

            <textarea
              {...register("message")}
              placeholder="Tell us about your requirements..."
              rows={3}
              className="mt-1 border border-gray-200 rounded-md px-4 py-3 w-full focus:outline-none focus:border-brand"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

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