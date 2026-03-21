"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleLogin = async () => {
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Invalid credentials");
            }

            router.push("/admin");

        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

            <div className="w-full max-w-md">

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 space-y-6">

                    {/* Header */}
                    <div className="text-center space-y-2">
                        <h2 className="text-2xl font-semibold">
                            Admin Login
                        </h2>
                        <p className="text-sm text-gray-500">
                            Enter your credentials to access dashboard
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="text-sm text-red-500 text-center">
                            {error}
                        </div>
                    )}

                    {/* Form */}
                    <div className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="text-sm text-gray-600 mb-1 block">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="admin@medsprings.com"
                                className="w-full border border-gray-200 px-4 py-2.5 rounded-lg focus:outline-none focus:border-brand transition"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        {/* Password */}
                        <div className="relative">

                            <label className="text-sm text-gray-600 mb-1 block">
                                Password
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="w-full border border-gray-200 px-4 py-2.5 pr-10 rounded-lg focus:outline-none focus:border-brand transition"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {/* Eye Toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-[38px] text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>

                        </div>

                    </div>

                    {/* Button */}
                    <button
                        onClick={handleLogin}
                        disabled={loading}
                        className="cursor-pointer w-full bg-brand text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Signing in..." : "Login"}
                    </button>

                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-400 mt-6">
                    Medsprings Admin Panel
                </p>

            </div>

        </div>
    );
}