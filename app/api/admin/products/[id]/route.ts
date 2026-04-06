import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";

function getPublicId(url: string) {
    const parts = url.split("/");
    const file = parts.pop();
    const folder = parts.pop();
    const name = file?.split(".")[0];
    return `medsprings/products/${folder}/${name}`;
}

export async function GET(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    const product = await prisma.product.findUnique({
        where: { id },
        include: { category: true },
    });

    return Response.json(product);
}

export async function PUT(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const tagline = formData.get("tagline") as string;
        const shortDesc = formData.get("shortDesc") as string;
        const description = formData.get("description") as string;
        const categoryId = formData.get("categoryId") as string;

        const featuresRaw = formData.get("features") as string;
        const specsRaw = formData.get("specifications") as string;

        const image1File = formData.get("image1") as File | null;
        const image2File = formData.get("image2") as File | null;
        const image3File = formData.get("image3") as File | null;

        // ✅ Validation
        if (!name || !categoryId) {
            return Response.json(
                { error: "Name and category are required" },
                { status: 400 }
            );
        }

        // ✅ Parse JSON safely
        let features: string[] = [];
        let specifications: any[] = [];

        try {
            features = featuresRaw ? JSON.parse(featuresRaw) : [];
            specifications = specsRaw ? JSON.parse(specsRaw) : [];
        } catch {
            features = [];
            specifications = [];
        }

        // 🔥 Generate slug
        const baseSlug = slugify(name, {
            lower: true,
            strict: true,
            trim: true,
        });

        let finalSlug = baseSlug;

        const existingSlug = await prisma.product.findFirst({
            where: {
                slug: baseSlug,
                NOT: { id },
            },
        });

        if (existingSlug) {
            finalSlug = `${baseSlug}-${Date.now().toString().slice(-4)}`;
        }

        const existing = await prisma.product.findUnique({
            where: { id },
        });

        if (!existing) {
            return Response.json({ error: "Product not found" }, { status: 404 });
        }

        // 🔁 Upload helper
        const uploadImage = async (file: File, folder: string) => {
            const buffer = Buffer.from(await file.arrayBuffer());

            const upload: any = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        { folder },
                        (err, result) => {
                            if (err) reject(err);
                            else resolve(result);
                        }
                    )
                    .end(buffer);
            });

            return upload.secure_url;
        };

        let image1 = existing.image1;
        let image2 = existing.image2;
        let image3 = existing.image3;

        // Replace image1
        if (image1File && image1File.size > 0) {
            if (existing.image1) {
                await cloudinary.uploader.destroy(getPublicId(existing.image1));
            }
            image1 = await uploadImage(image1File, "medsprings/products/main");
        }

        // Replace image2
        if (image2File && image2File.size > 0) {
            if (existing.image2) {
                await cloudinary.uploader.destroy(getPublicId(existing.image2));
            }
            image2 = await uploadImage(image2File, "medsprings/products/gallery");
        }

        // Replace image3 (header)
        if (image3File && image3File.size > 0) {
            if (existing.image3) {
                await cloudinary.uploader.destroy(getPublicId(existing.image3));
            }
            image3 = await uploadImage(image3File, "medsprings/products/headers");
        }

        // Prevent slug change if name unchanged
        if (existing.name === name) {
            finalSlug = existing.slug;
        }

        const updated = await prisma.product.update({
            where: { id },
            data: {
                name,
                slug: finalSlug,
                tagline,
                shortDesc,
                description,
                categoryId,
                features,
                specifications,
                image1,
                image2,
                image3,
            },
        });

        return Response.json(updated);

    } catch (error) {
        console.error("UPDATE PRODUCT ERROR:", error);
        return Response.json({ error: "Update failed" }, { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const existing = await prisma.product.findUnique({
            where: { id },
        });

        // Delete images
        if (existing?.image1) {
            await cloudinary.uploader.destroy(getPublicId(existing.image1));
        }

        if (existing?.image2) {
            await cloudinary.uploader.destroy(getPublicId(existing.image2));
        }

        if (existing?.image3) {
            await cloudinary.uploader.destroy(getPublicId(existing.image3));
        }

        await prisma.product.delete({
            where: { id },
        });

        return Response.json({ success: true });

    } catch (error) {
        console.error(error);
        return Response.json({ error: "Delete failed" }, { status: 500 });
    }
}