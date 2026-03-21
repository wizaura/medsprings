import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [productsCount, categoriesCount, inquiriesCount, recentProducts] =
      await Promise.all([
        prisma.product.count(),
        prisma.category.count(),
        prisma.inquiry.count(),
        prisma.product.findMany({
          take: 5,
          orderBy: { createdAt: "desc" },
          include: { category: true },
        }),
      ]);

    return Response.json({
      stats: {
        products: productsCount,
        categories: categoriesCount,
        inquiries: inquiriesCount,
      },
      recentProducts,
    });

  } catch (error) {
    console.error("DASHBOARD ERROR:", error);
    return Response.json(
      { error: "Failed to load dashboard" },
      { status: 500 }
    );
  }
}