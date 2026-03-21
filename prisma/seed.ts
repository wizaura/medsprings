import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const existing = await prisma.user.findUnique({
    where: { email: "admin@medsprings.com" },
  });

  if (existing) {
    console.log("Admin already exists");
    return;
  }

  const hashed = await bcrypt.hash("admin123", 10);

  await prisma.user.create({
    data: {
      email: "admin@medsprings.com",
      password: hashed,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin created");
}

main();