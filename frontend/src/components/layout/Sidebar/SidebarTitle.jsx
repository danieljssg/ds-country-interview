import Link from "next/link";
import { MapPinned } from "lucide-react";

export const SidebarTitle = () => {
  return (
    <div className="flex h-14 items-center border-b lg:px-4">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <MapPinned className="h-6 w-6" />
        <span className="">Country App</span>
      </Link>
    </div>
  );
};
