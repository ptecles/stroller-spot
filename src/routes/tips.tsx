import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteChrome";

export const Route = createFileRoute("/tips")({
  component: TipsLayout,
});

function TipsLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}
