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
    const description = formData.get("description") as string;
    const categoryId = formData.get("categoryId") as string;

    const benefitsRaw = formData.get("benefits") as string;

    const image1File = formData.get("image1") as File | null;
    const image2File = formData.get("image2") as File | null;

    console.log(formData,'fm')

    // ✅ VALIDATION
    if (!name || !description || !categoryId) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!image1File || image1File.size === 0) {
      return Response.json({ error: "Image1 is required" }, { status: 400 });
    }

    // ✅ SAFE BENEFITS
    let benefits: string[] = [];

    try {
      benefits = benefitsRaw ? JSON.parse(benefitsRaw) : [];
    } catch {
      benefits = [];
    }

    const slug = slugify(name, {
            lower: true,
            strict: true,
            trim: true,
        });

    const uploadImage = async (file: File) => {
      const buffer = Buffer.from(await file.arrayBuffer());

      const upload: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "medsprings/products" }, (err, result) => {
            if (err) reject(err);
            else resolve(result);
          })
          .end(buffer);
      });

      return upload.secure_url;
    };

    // ✅ Upload required image
    const image1 = await uploadImage(image1File);

    // ✅ Optional image
    let image2: string | null = null;

    if (image2File && image2File.size > 0) {
      image2 = await uploadImage(image2File);
    }

    console.log(benefits,'jd', image1, image2, categoryId, description,'hh',slug,name)

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        categoryId,
        benefits,
        image1,
        image2,
      },
    });

    return Response.json(product);

  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);
    return Response.json({ error: "Create failed" }, { status: 500 });
  }
}   