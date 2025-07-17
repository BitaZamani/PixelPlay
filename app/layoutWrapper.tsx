"use client";

import HeroSection from "@/components/section/heroSection";
import Menu from "@/components/menu/menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/ui/footer";
import { Toaster } from "@/components/ui/sonner";
const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  return (
    <body
      className={`antialiased bg-black pattern-cross-dots-md pattern-color-purple-700`}
    >
      <StoreProvider>
        <div className={`${pathName === "/" && "bg-purple-950 "} `}>
          <div className="w-11/12 mx-auto">
            <Menu
              className={`${
                pathName === "/login" || pathName === "/profile"
                  ? "hidden"
                  : "block"
              }`}
            />
            <div
              className={`${
                pathName === "/" ? "block bg-purple-950 " : "hidden"
              }`}
            >
              <HeroSection />
            </div>
          </div>
        </div>
        <div
          className={`absolute w-full -z-10 ${pathName !== "/" && "hidden"}`}
        >
          <Image
            src="/layerd.svg"
            alt="Layered background"
            width={0}
            height={0}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="w-11/12 mx-auto my-5">{children}</div>
        <Toaster />
        <Footer
          className={`${
            pathName === "/login" || pathName === "/profile"
              ? "hidden"
              : "block"
          }`}
        />
      </StoreProvider>
    </body>
  );
};

export default LayoutWrapper;
