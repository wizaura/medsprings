"use client";

import ConfirmModal from "@/components/common/ConfirmModal";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ProductViewModal from "./ProductViewModal";

export default function ProductsAdmin() {

    const [products, setProducts] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);

    const [editing, setEditing] = useState<any | null>(null);
    const [openForm, setOpenForm] = useState(false);

    const [search, setSearch] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [categoryId, setCategoryId] = useState("");

    const [benefits, setBenefits] = useState<string[]>([""]);

    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);

    const [preview1, setPreview1] = useState<string | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);

    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const [viewProduct, setViewProduct] = useState<any | null>(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 🔄 Fetch
    const fetchData = async () => {
        const [pRes, cRes] = await Promise.all([
            fetch("/api/admin/products"),
            fetch("/api/admin/categories"),
        ]);

        setProducts(await pRes.json());
        setCategories(await cRes.json());
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 🔍 Filter
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category?.name?.toLowerCase().includes(search.toLowerCase())
    );

    // 🖼 Image Preview
    const handleImage = (file: File | null, type: "1" | "2") => {
        if (!file) return;

        const url = URL.createObjectURL(file);

        if (type === "1") {
            setImage1(file);
            setPreview1(url);
        } else {
            setImage2(file);
            setPreview2(url);
        }
    };

    // Benefits
    const addBenefit = () => setBenefits([...benefits, ""]);
    const updateBenefit = (i: number, val: string) => {
        const copy = [...benefits];
        copy[i] = val;
        setBenefits(copy);
    };
    const removeBenefit = (i: number) => {
        setBenefits(benefits.filter((_, index) => index !== i));
    };

    // 🚀 Submit
    const handleSubmit = async () => {
        if (!name || !categoryId) {
            setError("Name and category are required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("categoryId", categoryId);
            formData.append("benefits", JSON.stringify(benefits.filter(b => b.trim())));

            if (image1) formData.append("image1", image1);
            if (image2) formData.append("image2", image2);

            const url = editing
                ? `/api/admin/products/${editing.id}`
                : "/api/admin/products";

            const method = editing ? "PUT" : "POST";

            const res = await fetch(url, { method, body: formData });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            toast.success(editing ? "Product updated" : "Product created");

            resetForm();
            fetchData();
            setOpenForm(false);

        } catch (err: any) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ✏️ Edit
    const startEdit = (p: any) => {
        setEditing(p);
        setOpenForm(true);

        setName(p.name);
        setDescription(p.description);
        setCategoryId(p.categoryId);
        setBenefits(p.benefits || []);

        setPreview1(p.image1);
        setPreview2(p.image2);

        setImage1(null);
        setImage2(null);
    };

    // 🗑 Delete
    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        setDeleteLoading(true);

        try {
            await fetch(`/api/admin/products/${deleteId}`, {
                method: "DELETE",
            });

            toast.success("Product deleted");
            fetchData();
            setDeleteId(null);

        } catch {
            toast.error("Delete failed");
        } finally {
            setDeleteLoading(false);
        }
    };

    // 🔄 Reset
    const resetForm = () => {
        setEditing(null);
        setName("");
        setDescription("");
        setCategoryId("");
        setBenefits([""]);
        setImage1(null);
        setImage2(null);
        setPreview1(null);
        setPreview2(null);
        setError("");
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Products
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Manage your products
                    </p>
                </div>

                <button
                    onClick={() => {
                        resetForm();
                        setOpenForm(!openForm);
                    }}
                    className="bg-brand text-white px-5 py-2 rounded-md"
                >
                    {openForm ? "Close" : "Add Product"}
                </button>
            </div>

            {/* SEARCH */}
            <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-200 px-4 py-3 rounded-md w-full max-w-md mb-8"
            />

            {/* FORM */}
            {openForm && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10 space-y-4">

                    <h2 className="text-lg font-semibold">
                        {editing ? "Edit Product" : "Create Product"}
                    </h2>

                    <input
                        placeholder="Product name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-200 px-4 py-2 rounded w-full"
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border border-gray-200 px-4 py-2 rounded w-full"
                    />

                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="border border-gray-200 px-4 py-2 rounded w-full"
                    >
                        <option value="">Select category</option>
                        {categories.map((c) => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </select>

                    {/* Benefits */}
                    <div>
                        <p className="font-medium">Benefits</p>
                        {benefits.map((b, i) => (
                            <div key={i} className="flex gap-2 mt-2">
                                <input
                                    value={b}
                                    onChange={(e) => updateBenefit(i, e.target.value)}
                                    className="border border-gray-200 px-3 py-2 rounded w-full"
                                />
                                <button onClick={() => removeBenefit(i)}>✕</button>
                            </div>
                        ))}
                        <button onClick={addBenefit} className="text-sm mt-2 text-brand">
                            + Add Benefit
                        </button>
                    </div>

                    {/* Images */}
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* IMAGE 1 */}
                        <div className="space-y-3">

                            <label className="text-sm font-medium text-gray-700">
                                Product Image 1
                            </label>

                            <label className="flex flex-col items-center justify-center w-full px-4 py-6 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand transition text-sm text-gray-500">

                                <span className="text-center">
                                    Click to upload image
                                    <br />
                                    <span className="text-xs text-gray-400">
                                        Main product image
                                    </span>
                                </span>

                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImage(e.target.files?.[0] || null, "1")
                                    }
                                />

                            </label>

                            {/* Preview */}
                            {preview1 && (
                                <div className="flex items-center gap-4">

                                    <img
                                        src={preview1}
                                        className="w-20 h-20 rounded-lg object-cover border"
                                    />

                                    <button
                                        onClick={() => {
                                            setImage1(null);
                                            setPreview1(null);
                                        }}
                                        className="text-sm text-red-500"
                                    >
                                        Remove
                                    </button>

                                </div>
                            )}

                        </div>


                        {/* IMAGE 2 */}
                        <div className="space-y-3">

                            <label className="text-sm font-medium text-gray-700">
                                Product Image 2
                            </label>

                            <label className="flex flex-col items-center justify-center w-full px-4 py-6 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand transition text-sm text-gray-500">

                                <span className="text-center">
                                    Click to upload image
                                    <br />
                                    <span className="text-xs text-gray-400">
                                        Optional secondary view
                                    </span>
                                </span>

                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        handleImage(e.target.files?.[0] || null, "2")
                                    }
                                />

                            </label>

                            {/* Preview */}
                            {preview2 && (
                                <div className="flex items-center gap-4">

                                    <img
                                        src={preview2}
                                        className="w-20 h-20 rounded-lg object-cover border"
                                    />

                                    <button
                                        onClick={() => {
                                            setImage2(null);
                                            setPreview2(null);
                                        }}
                                        className="text-sm text-red-500"
                                    >
                                        Remove
                                    </button>

                                </div>
                            )}

                        </div>

                    </div>

                    {/* ERROR (important placement) */}
                    {error && (
                        <p className="text-red-500 text-sm">{error}</p>
                    )}

                    <div className="flex gap-3">
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-brand text-white px-6 py-2 rounded"
                        >
                            {loading ? "Saving..." : editing ? "Update" : "Create"}
                        </button>

                        {editing && (
                            <button
                                onClick={resetForm}
                                className="border border-gray-200 px-6 py-2 rounded"
                            >
                                Cancel
                            </button>
                        )}
                    </div>

                </div>
            )}

            {/* LIST */}
            <div className="grid md:grid-cols-3 gap-6">

                {filteredProducts.map((p) => (
                    <div key={p.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">

                        <img
                            src={p.image1}
                            className="h-40 w-full object-cover rounded"
                        />

                        <h3 className="mt-3 font-semibold">{p.name}</h3>

                        <p className="text-sm text-gray-500">
                            {p.category?.name}
                        </p>

                        <div className="flex gap-4 mt-4 text-sm">
                            <button
                                onClick={() => setViewProduct(p)}
                                className="cursor-pointer hover:underline text-green-600"
                            >
                                View
                            </button>
                            <button
                                onClick={() => startEdit(p)}
                                className=" cursor-pointer hover:underline text-blue-600">
                                Edit
                            </button>
                            <button
                                onClick={() => confirmDelete(p.id)}
                                className="cursor-pointer hover:underline text-red-500"
                            >
                                Delete
                            </button>
                        </div>

                    </div>
                ))}

            </div>

            <ConfirmModal
                open={!!deleteId}
                title="Delete Product"
                description="Are you sure you want to delete this product? This cannot be undone."
                onCancel={() => setDeleteId(null)}
                onConfirm={handleDelete}
                loading={deleteLoading}
            />

            <ProductViewModal
                open={!!viewProduct}
                product={viewProduct}
                onClose={() => setViewProduct(null)}
            />

        </div>
    );
}