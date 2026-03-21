"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ConfirmModal from "@/components/common/ConfirmModal";


export default function CategoriesAdmin() {

    const [name, setName] = useState("");
    const [categories, setCategories] = useState<any[]>([]);
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [editing, setEditing] = useState<any | null>(null);

    const [openForm, setOpenForm] = useState(false);
    const [search, setSearch] = useState("");

    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [deleteLoading, setDeleteLoading] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 🔁 Fetch
    const fetchCategories = async () => {
        try {
            const res = await fetch("/api/admin/categories");
            const data = await res.json();
            setCategories(data);
        } catch {
            toast.error("Failed to load categories");
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // 🔍 Filter
    const filtered = categories.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    // 🖼 Image Preview
    const handleImageChange = (file: File | null) => {
        setImage(file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(editing?.image || null);
        }
    };

    // 🚀 Submit
    const handleSubmit = async () => {
        if (!name) {
            setError("Category name is required");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const formData = new FormData();
            formData.append("name", name);
            if (image) formData.append("image", image);

            const url = editing
                ? `/api/admin/categories/${editing.id}`
                : "/api/admin/categories";

            const method = editing ? "PUT" : "POST";

            const res = await fetch(url, { method, body: formData });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            toast.success(editing ? "Updated" : "Created");

            resetForm();
            fetchCategories();
            setOpenForm(false);

        } catch (err: any) {
            setError(err.message);
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    // ✏️ Edit
    const startEdit = (cat: any) => {
        setEditing(cat);
        setName(cat.name);
        setPreview(cat.image);
        setImage(null);
        setOpenForm(true);
    };

    // 🗑 Delete
    const confirmDelete = (id: string) => {
        setDeleteId(id);
    };

    const handleDelete = async () => {
        if (!deleteId) return;

        setDeleteLoading(true);

        try {
            const res = await fetch(`/api/admin/categories/${deleteId}`, {
                method: "DELETE",
            });

            const data = await res.json(); // ✅ important

            if (!res.ok) {
                throw new Error(data.error || "Delete failed");
            }

            toast.success("Category deleted");
            fetchCategories();
            setDeleteId(null);

        } catch (err: any) {
            toast.error(err.message); // ✅ real backend error
        } finally {
            setDeleteLoading(false);
        }
    };

    // 🔄 Reset
    const resetForm = () => {
        setName("");
        setImage(null);
        setPreview(null);
        setEditing(null);
        setError("");
    };

    return (
        <div className="p-8 max-w-7xl mx-auto">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-3xl font-semibold">
                        Categories
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Manage the categories
                    </p>
                </div>

                <button
                    onClick={() => {
                        resetForm();
                        setOpenForm(!openForm);
                    }}
                    className="bg-brand text-white px-5 py-2 rounded-md"
                >
                    {openForm ? "Close" : "Add Category"}
                </button>

            </div>

            {/* SEARCH */}
            <input
                placeholder="Search categories..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border border-gray-200 px-4 py-3 rounded-md w-full max-w-md mb-8"
            />

            {/* FORM */}
            {openForm && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">

                    {/* Header */}
                    <h2 className="text-lg font-semibold mb-6">
                        {editing ? "Edit Category" : "Create Category"}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 items-start">

                        {/* LEFT */}
                        <div className="space-y-4">

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Category Name
                                </label>

                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="e.g. Eye Care"
                                    className="mt-2 border border-gray-200 px-4 py-2 rounded-md w-full focus:outline-none focus:border-brand"
                                />
                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="space-y-4">

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Category Image
                                </label>

                                <label className="mt-2 flex flex-col items-center justify-center w-full px-4 py-3 border border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand transition text-sm text-gray-500">

                                    <span className="text-center">
                                        Click to upload image{" "}
                                        <span className="text-xs text-gray-400">
                                            (PNG, JPG recommended)
                                        </span>
                                    </span>

                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) =>
                                            handleImageChange(e.target.files?.[0] || null)
                                        }
                                    />

                                </label>
                            </div>

                            {/* Preview */}
                            {preview && (
                                <div className="flex items-center gap-4">

                                    <img
                                        src={preview}
                                        className="w-20 h-20 rounded-lg object-cover border"
                                    />

                                    <button
                                        onClick={() => handleImageChange(null)}
                                        className="text-sm text-red-500"
                                    >
                                        Remove
                                    </button>

                                </div>
                            )}

                        </div>

                    </div>

                    {/* Error */}
                    {error && (
                        <p className="text-red-500 text-sm mt-4">
                            {error}
                        </p>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3 mt-6">

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="bg-brand text-white px-6 py-2 rounded-md hover:opacity-90 transition"
                        >
                            {loading
                                ? "Saving..."
                                : editing
                                    ? "Update Category"
                                    : "Create Category"}
                        </button>

                        {editing && (
                            <button
                                onClick={resetForm}
                                className="border border-gray-200 px-6 py-2 rounded-md hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                        )}

                    </div>

                </div>
            )}

            {/* LIST */}
            <div className="grid md:grid-cols-3 gap-6">

                {filtered.map((cat) => (

                    <div
                        key={cat.id}
                        className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition"
                    >

                        {cat.image && (
                            <img
                                src={cat.image}
                                className="h-32 w-full object-cover rounded"
                            />
                        )}

                        <h3 className="mt-3 font-semibold">
                            {cat.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                            {cat.slug}
                        </p>

                        <div className="flex gap-4 mt-4 text-sm">

                            <button
                                onClick={() => startEdit(cat)}
                                className="text-blue-600"
                            >
                                Edit
                            </button>

                            <button
                                onClick={() => confirmDelete(cat.id)}
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
                title="Delete Category"
                description="Are you sure you want to delete this category? This cannot be undone."
                onCancel={() => setDeleteId(null)}
                onConfirm={handleDelete}
                loading={deleteLoading}
            />

        </div>
    );
}