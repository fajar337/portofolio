import { NextResponse } from "next/server";

const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  error?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!accessKey) {
      return NextResponse.json(
        { error: "Contact form is not configured yet" },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeSubject = escapeHtml(String(subject));
    const safeMessage = escapeHtml(String(message)).replaceAll("\n", "<br />");
    const payload = {
      access_key: accessKey,
      name: String(name),
      email: String(email),
      subject: `Portfolio Contact: ${subject}`,
      message: String(message),
      from_name: "Portfolio Contact Form",
      botcheck: "",
      html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Subject:</strong> ${safeSubject}</p><p><strong>Message:</strong><br />${safeMessage}</p>`,
    };

    const web3FormsResponse = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseText = await web3FormsResponse.text();
    let result: Web3FormsResponse = {};

    try {
      result = JSON.parse(responseText) as Web3FormsResponse;
    } catch {
      result = {};
    }

    if (!web3FormsResponse.ok || result.success === false) {
      const detail =
        result.message ??
        result.error ??
        responseText ??
        "Web3Forms failed to send the message.";
      console.error("Web3Forms contact email failed:", detail);
      return NextResponse.json(
        {
          error: "Failed to send message",
          detail,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
