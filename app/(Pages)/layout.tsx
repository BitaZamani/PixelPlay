import Menu from "@/components/menu/menu";
import React, { ReactNode } from "react";
import Footer from "@/components/menu/footer";
import { Toaster } from "@/components/ui/sonner";
const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`antialiased bg-black pattern-cross-dots-md pattern-color-purple-700 min-h-screen`}
    >
      <div className="min-h-screen flex flex-col">
        <div className="flex-1">
          <div className="pt-3">
            <Menu />
          </div>
          <div className="w-11/12 mx-auto my-5">{children}</div>
          <Toaster />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
