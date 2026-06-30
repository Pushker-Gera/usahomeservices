export type GoogleSheetPayload = Record<string, string | number | undefined>;

export async function submitToGoogleSheet(payload: GoogleSheetPayload) {
  const response = await fetch("/api/google-sheets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Google Sheets submission failed.");
  }

  return result as { demo: boolean; success: boolean };
}
