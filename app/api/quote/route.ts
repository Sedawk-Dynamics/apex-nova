import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, phone, email, service, origin, destination, cargoType, weight, message } = body;

    // Optional: send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const htmlBody = `
        <h3>New Request Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        ${origin ? `<p><strong>Origin:</strong> ${origin}</p>` : ''}
        ${destination ? `<p><strong>Destination:</strong> ${destination}</p>` : ''}
        ${cargoType ? `<p><strong>Cargo Type:</strong> ${cargoType}</p>` : ''}
        ${weight ? `<p><strong>Weight:</strong> ${weight}</p>` : ''}
        ${message ? `<p><strong>Message / Extra Info:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>` : ''}
      `;

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: `New Request from ${name} - Apexnova Logistics`,
        html: htmlBody,
      });
    }

    return NextResponse.json({ success: true, message: "Request received" });
  } catch (error) {
    console.error("Error in quote API:", error);
    return NextResponse.json({ success: false, error: "Failed to process request" }, { status: 500 });
  }
}
