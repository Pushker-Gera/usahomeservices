import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const fallbackScriptUrl = "https://script.google.com/macros/s/AKfycbyxWjQnH89q7MveBuFleYPmIvS8PDVy5feJpbfQf6oU75WZRnpWMPVTUIIAjIa7svdXGg/exec";

export async function POST(request: Request) {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || fallbackScriptUrl;
  const payload = await request.json();

  if (!scriptUrl) {
    return NextResponse.json({ success: true, demo: true });
  }

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload),
      redirect: "follow"
    });

    const text = await response.text();

    if (!response.ok) {
      return NextResponse.json({ success: false, error: text || "Google Sheets submission failed." }, { status: 502 });
    }

    return NextResponse.json({ success: true, demo: false, response: text });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Google Sheets submission failed."
      },
      { status: 502 }
    );
  }
}
