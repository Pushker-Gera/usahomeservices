# usahomeservices

Premium Next.js home-services website with service quote forms, contact messages, careers/job applications, Google Sheets storage, and a Google Sheets-oriented admin page.

## Run locally

```bash
npm install
npm run dev
```

The site runs in demo mode when `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is missing. Forms show a demo success message and do not crash.

## Environment Variables

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=
NEXT_PUBLIC_LEADS_SHEET_URL=
NEXT_PUBLIC_JOB_APPLICATIONS_SHEET_URL=
NEXT_PUBLIC_CONTACT_MESSAGES_SHEET_URL=
```

Only `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is required for submissions. The sheet URL variables are optional convenience links for the admin page buttons.

## Google Apps Script Code

Create a Google Sheet, then add this code in Apps Script:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();
  const data = JSON.parse(e.postData.contents);
  const formType = data.formType || "unknown";

  let tabName = "Service Leads";

  if (formType === "contact_message") {
    tabName = "Contact Messages";
  }

  if (formType === "job_application") {
    tabName = "Job Applications";
  }

  let tab = sheet.getSheetByName(tabName);

  if (!tab) {
    tab = sheet.insertSheet(tabName);
  }

  const timestamp = new Date();

  if (tab.getLastRow() === 0) {
    tab.appendRow(Object.keys({ timestamp, ...data }));
  }

  tab.appendRow(Object.values({ timestamp, ...data }));

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Google Sheets Setup

1. Create Google Sheet
2. Extensions -> Apps Script
3. Paste code
4. Deploy -> New deployment
5. Select Web app
6. Execute as: Me
7. Who has access: Anyone
8. Copy Web App URL
9. Paste it into `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
10. Test all forms

## Pages

- `/`
- `/services`
- `/services/[slug]`
- `/about`
- `/careers`
- `/contact`
- `/faq`
- `/privacy-policy`
- `/terms-of-service`
- `/quote-request`
- `/admin`
