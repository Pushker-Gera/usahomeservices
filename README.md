# usahomeservices

Premium Next.js home-services website for `https://usahomeservices.in` with service quote forms, contact messages, careers/job applications, Google Sheets storage, launch-ready SEO metadata, sitemap, robots.txt, structured data, app icons, and a Google Sheets-oriented admin page.

## Run locally

```bash
npm install
npm run dev
```

The site runs in demo mode when `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is missing. Forms show a demo success message and do not crash.

## Environment Variables

```bash
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=
NEXT_PUBLIC_ADMIN_EMAIL=cyberbrandzup@gmail.com
NEXT_PUBLIC_LEADS_SHEET_URL=
NEXT_PUBLIC_JOB_APPLICATIONS_SHEET_URL=
NEXT_PUBLIC_CONTACT_MESSAGES_SHEET_URL=
```

Only `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` is required for submissions. `NEXT_PUBLIC_ADMIN_EMAIL` controls which email can access the admin dashboard. The sheet URL variables are optional convenience links for the admin page buttons.

Production domain:

- Website: `https://usahomeservices.in`
- Sitemap: `https://usahomeservices.in/sitemap.xml`
- Robots: `https://usahomeservices.in/robots.txt`
- Social image: `https://usahomeservices.in/og-image.png`

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

## Google Search Console Setup

1. Go to Google Search Console and add `usahomeservices.in` as a Domain property.
2. Verify the domain using the DNS TXT record Google provides.
3. After verification, open Sitemaps and submit `https://usahomeservices.in/sitemap.xml`.
4. Use URL Inspection for the homepage and key pages, then request indexing after deployment.
5. Check Pages/Coverage reports over the next few days for crawl or indexing issues.

SEO is configured so Google can crawl, understand, and index the website properly. It does not guarantee instant ranking.

## Launch Checklist

- Domain connected in Vercel: `usahomeservices.in`
- `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` added in Vercel
- `NEXT_PUBLIC_ADMIN_EMAIL` added in Vercel
- Optional Google Sheet URLs added for admin buttons
- Service quote form tested
- Contact form tested
- Job application form tested
- Admin login tested with the authorized email
- Sitemap opens at `https://usahomeservices.in/sitemap.xml`
- Robots opens at `https://usahomeservices.in/robots.txt`
- Google Search Console domain verified
- Sitemap submitted in Search Console
- Key URLs inspected and indexing requested
- Vercel redeployed after environment variable changes

## Production Checks

```bash
npm run build
```

The project includes app icons, Open Graph/Twitter metadata, JSON-LD schema, a dynamic sitemap, robots.txt, accessible form labels, and responsive pages for launch readiness.

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
