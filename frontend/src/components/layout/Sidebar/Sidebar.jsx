import { SidebarTitle } from "./SidebarTitle";
import { SidebarLinks } from "./SidebarLinks";

export const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <SidebarTitle />
        <div className="flex-1">
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};
