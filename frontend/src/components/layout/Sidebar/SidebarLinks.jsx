import Link from "next/link";
import {
  Map,
} from "lucide-react";

import { Button } from "@/components/ui/button";
export const SidebarLinks = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/country"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Map className="h-4 w-4" />
        Country List
      </Link>
    </nav>
  );
};
