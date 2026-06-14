import { AdminDashboard } from "@/components/AdminDashboard";
import { PageTransition } from "@/components/Animated";

export default function AdminPage() {
  return (
    <PageTransition>
      <AdminDashboard />
    </PageTransition>
  );
}
