import Link from "@/components/Link/Link";
import { colophon } from "@/content/colophon";

export default function Colophon() {
  return (
    <footer className="mt-12 max-w-measure text-small text-fg-muted">
      <p className="phone:hidden">{colophon.long}</p>
      <p className="hidden phone:block">{colophon.short}</p>
      <p className="mt-2">
        <Link kind="arrow-small" href="/workshop">
          {colophon.workshopLink}
        </Link>
      </p>
    </footer>
  );
}
