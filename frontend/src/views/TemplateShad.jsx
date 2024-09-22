import { Button } from "@/components/ui/button";

export const TemplateShad = () => {
  return (
    <>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Welcome to the Dashboard
          </h3>
          <p className="text-sm text-muted-foreground">
            you can start clicking in the Sidebar to navigate through the pages
          </p>
        </div>
      </div>
    </>
  );
};
