import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

// Escape user-supplied values before interpolating into the HTML email body.
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      phone,
      email,
      service,
      origin,
      destination,
      cargoType,
      weight,
      message,
    } = body;

    // Minimal server-side validation (forms validate client-side too).
    if (!name || !phone || !email) {
      return NextResponse.json(
        { success: false, error: "Name, phone and email are required." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      // Misconfiguration — surface it instead of silently "succeeding".
      console.error(
        "[quote API] SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS."
      );
      return NextResponse.json(
        { success: false, error: "Mail service is not configured." },
        { status: 500 }
      );
    }

    const port = Number(process.env.SMTP_PORT) || 465;
    // Port 465 uses implicit TLS (secure); 587/25 upgrade via STARTTLS.
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      requireTLS: !secure, // enforce STARTTLS on 587
    });

    const rows = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone],
      ["Service", service],
      ["Origin", origin],
      ["Destination", destination],
      ["Cargo Type", cargoType],
      ["Weight", weight],
    ]
      .filter(([, v]) => v)
      .map(
        ([label, v]) =>
          `<tr>
             <td style="padding:6px 14px 6px 0;color:#6B7280;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(
               label
             )}</td>
             <td style="padding:6px 0;color:#0F1D4A;font-size:14px;font-weight:600;">${esc(
               v
             )}</td>
           </tr>`
      )
      .join("");

    const htmlBody = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;">
        <div style="background:#0F1D4A;padding:20px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#ffffff;margin:0;font-size:18px;">New Website Enquiry</h2>
          <p style="color:#F47920;margin:4px 0 0;font-size:13px;font-weight:600;">Apexnova Logistics</p>
        </div>
        <div style="border:1px solid #E5E7EB;border-top:0;padding:20px 24px;border-radius:0 0 12px 12px;">
          <table style="border-collapse:collapse;width:100%;">${rows}</table>
          ${
            message
              ? `<div style="margin-top:16px;padding-top:16px;border-top:1px solid #E5E7EB;">
                   <div style="color:#6B7280;font-size:13px;margin-bottom:6px;">Message / Extra Info</div>
                   <div style="color:#0F1D4A;font-size:14px;line-height:1.6;">${esc(
                     message
                   ).replace(/\n/g, "<br/>")}</div>
                 </div>`
              : ""
          }
        </div>
        <p style="color:#9CA3AF;font-size:11px;text-align:center;margin-top:14px;">
          Sent automatically from apexnovalogistics.com
        </p>
      </div>
    `;

    const textBody = [
      ["Name", name],
      ["Company", company],
      ["Email", email],
      ["Phone", phone],
      ["Service", service],
      ["Origin", origin],
      ["Destination", destination],
      ["Cargo Type", cargoType],
      ["Weight", weight],
      ["Message", message],
    ]
      .filter(([, v]) => v)
      .map(([label, v]) => `${label}: ${v}`)
      .join("\n");

    await transporter.sendMail({
      from: `"Apexnova Website" <${user}>`,
      to: process.env.CONTACT_EMAIL || user,
      replyTo: email, // lets the team reply straight to the customer
      subject: `New Enquiry from ${name} — Apexnova Logistics`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, message: "Request received" });
  } catch (error) {
    console.error("Error in quote API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
