import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import slugify from "slugify";

// ✅ GET ALL PRODUCTS
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });

    return Response.json(products);
  } catch (error) {
    return Response.json({ error: "Fetch failed" }, { status: 500 });
  }
}


// ✅ CREATE PRODUCT
export async function POST(req: Request) {
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

    // ✅ VALIDATION
    if (!name || !description || !categoryId) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!image1File || image1File.size === 0) {
      return Response.json({ error: "Image1 is required" }, { status: 400 });
    }

    // ✅ SAFE FEATURES
    let features: string[] = [];
    let specifications: any[] = [];

    try {
      features = featuresRaw ? JSON.parse(featuresRaw) : [];
      specifications = specsRaw ? JSON.parse(specsRaw) : [];
    } catch {
      features = [];
      specifications = [];
    }

    const slug = slugify(name, {
      lower: true,
      strict: true,
      trim: true,
    });

    // 🔁 Upload helper
    const uploadImage = async (file: File, folder: string) => {
      const buffer = Buffer.from(await file.arrayBuffer());

      const upload: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      return upload.secure_url;
    };

    // ✅ Upload required image
    const image1 = await uploadImage(image1File, "medsprings/products/main");

    // ✅ Optional images
    let image2: string | null = null;
    let image3: string | null = null;

    if (image2File && image2File.size > 0) {
      image2 = await uploadImage(image2File, "medsprings/products/gallery");
    }

    if (image3File && image3File.size > 0) {
      image3 = await uploadImage(image3File, "medsprings/products/headers");
    }

    const product = await prisma.product.create({
      data: {
        name,
        slug,
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

    return Response.json(product);

  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);
    return Response.json({ error: "Create failed" }, { status: 500 });
  }
}