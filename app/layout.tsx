import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, pageMetadata, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "usahomeservices | Premium Home Services in Indianapolis",
    description:
      "usahomeservices provides premium home repair, emergency response, HVAC, roofing, plumbing, locksmith, electrical, and maintenance services for homeowners in Indianapolis and surrounding areas."
  }),
  metadataBase: new URL("https://usahomeservices.in"),
  applicationName: "usahomeservices",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
