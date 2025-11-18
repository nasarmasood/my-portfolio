// app/api/contact/route.ts
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.resendApiKey);

export async function POST(request: NextRequest) {
  try {
    const { name, email,subject, message } = await request.json();

    // Simple validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Optional: basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: 'Invalid email' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // works out of the box
      to: ['nasarmasood111@gmail.com'],           
      replyTo: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // Optional: beautiful HTML version (uncomment next line + import if you want)
      // react: ContactEmail({ name, email, message }),
    });

    return Response.json({ success: true, message: 'Sent!' });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}