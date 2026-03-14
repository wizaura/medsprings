import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-brand text-white px-6 py-20">

            <div className="max-w-7xl mx-auto">

                {/* CTA */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Ready to export our products?
                    </h2>

                    <Link
                        href="/contact"
                        className="border border-white/40 px-6 py-2 rounded-full text-sm hover:bg-white hover:text-brand transition"
                    >
                        Get started
                    </Link>

                </div>

                {/* Divider */}
                <div className="my-12 border-white/20 border-t"></div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

                    {/* Logo + Info */}
                    <div className="md:col-span-2">

                        <Image
                            src="/logo.jpg"
                            alt="Medsprings"
                            width={120}
                            height={40}
                        />

                        <p className="mt-4 text-white/80 text-sm max-w-xs">
                            Industry-leading exporting firm with products
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-6">

                            <Link href="/" className="hover:text-white/80 transition">
                                <Facebook size={18} className="cursor-pointer" />
                            </Link>

                            <Link href="/" className="hover:text-white/80 transition">
                                <Twitter size={18} className="cursor-pointer" />
                            </Link>

                            <Link href="/" className="hover:text-white/80 transition">
                                <Instagram size={18} className="cursor-pointer" />
                            </Link>

                            <Link href="/" className="hover:text-white/80 transition">
                                <Youtube size={18} className="cursor-pointer" />
                            </Link>

                        </div>

                    </div>

                    {/* Company */}
                    <div>

                        <h3 className="font-semibold mb-4">Company</h3>

                        <div className="flex flex-col gap-3 text-white/80 text-sm">

                            <Link href="/" className="hover:text-white">Home</Link>
                            <Link href="/about" className="hover:text-white">About Us</Link>
                            <Link href="/products" className="hover:text-white">Products</Link>

                        </div>

                    </div>

                    {/* Pages */}
                    <div>

                        <h3 className="font-semibold mb-4">Pages</h3>

                        <div className="flex flex-col gap-3 text-white/80 text-sm">

                            <Link href="/products" className="hover:text-white">Category</Link>
                            <Link href="/contact" className="hover:text-white">Contact</Link>
                            <Link href="/404" className="hover:text-white">404</Link>

                        </div>

                    </div>

                    {/* Products */}
                    <div>

                        <h3 className="font-semibold mb-4">Products</h3>

                        <div className="flex flex-col gap-3 text-white/80 text-sm">

                            <Link href="/products" className="hover:text-white">Pharmaceuticals</Link>
                            <Link href="/products" className="hover:text-white">Pharmaceuticals</Link>
                            <Link href="/products" className="hover:text-white">Pharmaceuticals</Link>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}