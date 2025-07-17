import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 relative">
        <div className="w-full bg-gradient-to-tr from-black to-purple-950">
          {children}
        </div>
        <Toaster />
      </div>
    </div>
  );
}
