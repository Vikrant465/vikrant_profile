import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(10, "Subject must be at least 10 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

/**
 * Sends the contact form to the site owner's inbox via SMTP.
 * Requires SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL
 * to be set (see .env.example). Without them, this route returns a 503
 * instead of silently pretending to succeed.
 */
export async function POST(request: Request) {
  const body: unknown = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    console.error("Contact form is not configured: missing SMTP environment variables.");
    return NextResponse.json(
      { error: "The email service is not configured yet." },
      { status: 503 },
    );
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      replyTo: email,
      to: CONTACT_TO_EMAIL,
      subject: `[Portfolio contact] ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
