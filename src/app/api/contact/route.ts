import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, phone, projectType, timeline, budget } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailJsResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_co7zyuh',
        template_id: 'template_7rvpdxr',
        user_id: 'jwKCtJuUAK8s1gFNv', // Public Key
        template_params: {
          name,
          email,
          phone: phone || 'N/A',
          service: projectType || 'N/A',
          projectType: projectType || 'N/A',
          timeline: timeline || 'N/A',
          budget: budget || 'N/A',
          message,
          reply_to: email
        }
      })
    });

    if (!emailJsResponse.ok) {
        const errorText = await emailJsResponse.text();
        console.error("EmailJS Error:", errorText);
        throw new Error("Failed to send email");
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out! We'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
