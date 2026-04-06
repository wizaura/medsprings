import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
    });

    console.log(categories,'car')

    return Response.json(categories);

  } catch (error) {
    console.error("GET CATEGORIES ERROR:", error);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}