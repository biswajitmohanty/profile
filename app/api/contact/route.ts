import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${user}>`,
    to: user,
    replyTo: email,
    subject: `[Portfolio] ${subject} — from ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto">
        <h2 style="color:#00d4ff;margin-bottom:4px">New message from your portfolio</h2>
        <hr style="border:1px solid #e2e8f0;margin-bottom:20px"/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:1px solid #e2e8f0;margin:20px 0"/>
        <p style="white-space:pre-wrap;color:#334155">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
