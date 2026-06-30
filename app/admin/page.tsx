import { AdminDashboard } from "@/components/AdminDashboard";
import { PageTransition } from "@/components/Animated";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Admin Dashboard | usahomeservices",
  description: "Private usahomeservices admin dashboard for Google Sheets lead, contact message, and job application management.",
  path: "/admin",
  noIndex: true
});

export default function AdminPage() {
  return (
    <PageTransition>
      <AdminDashboard />
    </PageTransition>
  );
}
