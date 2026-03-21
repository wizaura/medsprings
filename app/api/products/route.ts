// /app/api/products/route.ts

import { prisma } from "@/lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany({
    where: { isActive: true },
    select: {
      id: true,
      name: true,
      slug: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return Response.json(products);
}