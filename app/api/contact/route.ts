import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      role,
      email,
      phone,
      organisation,
      helpType,
      message,
    } = body;

    // Validation
    if (!fullName || !email || !helpType) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to DB
    const inquiry = await prisma.inquiry.create({
      data: {
        fullName,
        role,
        email,
        phone,
        organisation,
        helpType,
        message,
      },
    });

    // Email Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin Email
    await transporter.sendMail({
      from: `"Medsprings Inquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Medsprings Inquiry - ${helpType}`,
      html: `
  <div style="background:#f4f6f8;padding:0 0;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="600" style="background:#ffffff;border-radius:10px;padding:30px;border:1px solid #e5e7eb;">
      
      <tr>
        <td>
          <h2 style="margin:0;color:#0ea5a4;">New Inquiry Received</h2>
          <p style="color:#6b7280;font-size:14px;">
            A new inquiry has been submitted on the Medsprings website.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding-top:20px;">
          <table width="100%" style="border-collapse:collapse;">
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Full Name: </td>
              <td style="padding:8px 0;"><strong>${fullName}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Title / Role: </td>
              <td style="padding:8px 0;"><strong>${role}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Email: </td>
              <td style="padding:8px 0;"><strong>${email}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Phone:</td>
              <td style="padding:8px 0;">
                <a href="tel:${phone}" style="color:#0ea5a4;text-decoration:none;font-weight:bold;">
                  ${phone}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Organisation: </td>
              <td style="padding:8px 0;"><strong>${organisation}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b7280;">Inquiry Type: </td>
              <td style="padding:8px 0;"><strong>${helpType}</strong></td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding-top:20px;">
          <p style="color:#6b7280;margin-bottom:5px;">Requirement Details</p>
          <div style="background:#f9fafb;padding:15px;border-radius:8px;border:1px solid #e5e7eb;">
            ${message}
          </div>
        </td>
      </tr>

      <tr>
        <td style="padding-top:25px;color:#9ca3af;font-size:12px;">
          Submitted at: ${new Date().toLocaleString()}
        </td>
      </tr>

    </table>
  </div>
`
    });

    // Auto Reply to User
    await transporter.sendMail({
      from: `"Medsprings Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your inquiry - Medsprings",
      html: `
  <div style="background:#f4f6f8;padding:0 0;font-family:Arial,Helvetica,sans-serif;">
    <table align="center" width="600" style="background:#ffffff;border-radius:10px;padding:30px;border:1px solid #e5e7eb;">
      
      <tr>
        <td>
          <h2 style="margin:0;color:#0ea5a4;">Thank You for Contacting Medsprings</h2>
          <p style="color:#6b7280;font-size:14px;">
            We have received your inquiry. Our team will respond within 24 hours.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding-top:20px;">
          <p style="margin:0;">Dear <strong>${fullName}</strong>,</p>
          <p style="color:#6b7280;">
            Thank you for reaching out to Medsprings. We appreciate your interest and our team will get back to you shortly.
          </p>
        </td>
      </tr>

      <tr>
        <td style="padding-top:15px;">
          <table width="100%" style="border-collapse:collapse;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">
            <tr>
              <td style="padding:12px;color:#6b7280;">Inquiry Type</td>
              <td style="padding:12px;"><strong>${helpType}</strong></td>
            </tr>
            <tr>
              <td style="padding:12px;color:#6b7280;">Message</td>
              <td style="padding:12px;"><strong>${message}</strong></td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td style="padding-top:25px;">
          <p style="margin:0;">Best regards,</p>
          <p style="margin:5px 0 0 0;"><strong>Medsprings Team</strong></p>
          <p style="color:#6b7280;font-size:14px;">
            Email: 
            <a href="mailto:info@medsprings.com" style="color:#0ea5a4;text-decoration:none;">
              info@medsprings.com
            </a>
            <br/>
            Phone: 
            <a href="tel:+917200820012" style="color:#0ea5a4;text-decoration:none;">
              +91 7200820012
            </a>
          </p>
        </td>
      </tr>

    </table>
  </div>
`
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