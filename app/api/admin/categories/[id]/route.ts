import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";

function getPublicId(url: string) {
    try {
        const parts = url.split("/");
        const file = parts.pop();
        const folder = parts.pop();
        const name = file?.split(".")[0];

        return `medsprings/${folder}/${name}`;
    } catch {
        return "";
    }
}

// ✅ UPDATE CATEGORY
export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const file = formData.get("image") as File | null;

        if (!name) {
            return Response.json({ error: "Name required" }, { status: 400 });
        }

        // 🔥 Generate slug
        const baseSlug = slugify(name, {
            lower: true,
            strict: true,
            trim: true,
        });

        let finalSlug = baseSlug;

        // 🔥 Get existing category
        const existing = await prisma.category.findUnique({
            where: { id },
        });

        let imageUrl: string | undefined;

        if (file && file.size > 0) {

            // 🔥 DELETE OLD IMAGE
            if (existing?.image) {
                const publicId = getPublicId(existing.image);
                await cloudinary.uploader.destroy(publicId);
            }

            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const upload: any = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        { folder: "medsprings/categories" },
                        (err, result) => {
                            if (err) reject(err);
                            else resolve(result);
                        }
                    )
                    .end(buffer);
            });

            imageUrl = upload.secure_url;
        }

        const updated = await prisma.category.update({
            where: { id },
            data: {
                name,
                slug: finalSlug,
                ...(imageUrl && { image: imageUrl }),
            },
        });

        return Response.json(updated);

    } catch (error) {
        console.error("UPDATE CATEGORY ERROR:", error);
        return Response.json({ error: "Update failed" }, { status: 500 });
    }
}


// ✅ DELETE CATEGORY
export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        // 🔍 Check products using this category
        const productCount = await prisma.product.count({
            where: { categoryId: id },
        });

        if (productCount > 0) {
            return Response.json(
                {
                    error: "Cannot delete category with existing products",
                },
                { status: 400 }
            );
        }

        // 🔍 Get category
        const existing = await prisma.category.findUnique({
            where: { id },
        });

        // 🗑️ Delete image from Cloudinary
        if (existing?.image) {
            const publicId = getPublicId(existing.image);
            await cloudinary.uploader.destroy(publicId);
        }

        // 🗑️ Delete category
        await prisma.category.delete({
            where: { id },
        });

        return Response.json({ success: true });

    } catch (error) {
        console.error("DELETE CATEGORY ERROR:", error);
        return Response.json({ error: "Delete failed" }, { status: 500 });
    }
}