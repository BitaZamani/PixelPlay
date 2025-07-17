import { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 relative">
        <div className="w-full bg-gradient-to-tr from-black to-purple-950">
          {children}
        </div>
        <Toaster />
      </div>
    </div>
  );
}
