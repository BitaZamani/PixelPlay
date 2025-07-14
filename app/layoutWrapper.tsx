"use client";

import HeroSection from "@/components/heroSection";
import Menu from "@/components/menu";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();
  return (
    <body
      className={`antialiased bg-black pattern-cross-dots-md pattern-color-fuchsia-800`}
    >
      <div className={`${pathName === "/" && "bg-fuchsia-950 "} `}>
        <div className="w-11/12 mx-auto">
          <Menu />
          <div
            className={`${
              pathName === "/" ? "block h-[170px] md:h-[100px]" : "hidden"
            }`}
          >
            <HeroSection />
          </div>
        </div>
      </div>
      <div className={`absolute w-full -z-10 ${pathName !== "/" && "hidden"}`}>
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
    </body>
  );
};

export default LayoutWrapper;
