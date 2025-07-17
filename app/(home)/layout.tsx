import HeroSection from "@/components/section/heroSection";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import React, { ReactNode } from "react";
import Footer from "@/components/menu/footer";
import { Toaster } from "@/components/ui/sonner";
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`antialiased bg-black pattern-cross-dots-md pattern-color-purple-700 min-h-screen`}
    >
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 relative">
          <div className="flex flex-col">
            <div className="bg-purple-950 pt-3">
              <Menu />
              <div className=" bg-purple-950 ">
                <HeroSection />
              </div>
            </div>

            <div className="w-full h-full">
              <Image
                src="/layerd.svg"
                alt="Layered background"
                width={0}
                height={0}
                className="w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="w-11/12 mx-auto my-5">{children}</div>
          <Toaster />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
