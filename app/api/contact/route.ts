import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, country, quantity, product, message } = body;

    // ✅ Basic validation
    if (!name || !email || !product) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Save to DB
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        country,
        quantity,
        product,
        message,
      },
    });

    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Medsprings Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // you receive it
      subject: `New Inquiry - ${product}`,
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Product:</strong> ${product}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("CONTACT ERROR:", error);
    return Response.json(
      { error: "Failed to send inquiry" },
      { status: 500 }
    );
  }
}