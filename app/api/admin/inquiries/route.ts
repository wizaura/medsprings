import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: { createdAt: "desc" },
    });

    return Response.json(inquiries);

  } catch (error) {
    console.error("GET INQUIRIES ERROR:", error);
    return Response.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}