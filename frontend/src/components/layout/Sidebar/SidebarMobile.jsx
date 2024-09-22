import Link from "next/link";
import { Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/layout/ModeToggle";
import { SidebarLinks } from "./SidebarLinks";
import { SidebarTitle } from "./SidebarTitle";

export const SidebarMobile = () => {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 justify-between md:justify-end">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SidebarTitle />
          <SidebarLinks />
        </SheetContent>
      </Sheet>
      <ModeToggle />
    </header>
  );
};
