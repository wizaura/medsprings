import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";

// ✅ GET ALL CATEGORIES
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(categories);

  } catch (error) {
    console.error("GET CATEGORIES ERROR:", error);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}


// ✅ CREATE CATEGORY
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const file = formData.get("image") as File | null;

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const slug = slugify(name, {
                lower: true,
                strict: true,
                trim: true,
            });

    const existing = await prisma.category.findUnique({
      where: { slug },
    });

    if (existing) {
      return Response.json({ error: "Category exists" }, { status: 400 });
    }

    let imageUrl = "";

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "medsprings/categories" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      imageUrl = upload.secure_url;
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        image: imageUrl,
      },
    });

    return Response.json(category);

  } catch (error) {
    console.error("CREATE CATEGORY ERROR:", error);
    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}