export type GoogleSheetPayload = Record<string, string | number | undefined>;

export async function submitToGoogleSheet(payload: GoogleSheetPayload) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

  if (!url) {
    return { demo: true, success: true };
  }

  const body = JSON.stringify(payload);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body
    });

    if (!response.ok) {
      throw new Error("Google Sheets submission failed.");
    }

    return { demo: false, success: true };
  } catch (error) {
    try {
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body
      });

      return { demo: false, success: true };
    } catch {
      throw error instanceof Error ? error : new Error("Google Sheets submission failed.");
    }
  }
}
