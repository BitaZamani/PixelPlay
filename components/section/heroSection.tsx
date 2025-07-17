import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-8 px-3 flex justify-center items-center gap-3 flex-col">
      <span className="text-4xl  text-center md:text-7xl text-purple-100 font-bitcount">
        Your Portal to Every Pixel
      </span>
      <span className="text-gray-200 text-center text-xs md:text-lg">
        Discover, explore, and dive into the world of gaming like never before.
      </span>
      <Button
        className="w-[120px] my-3 md:w-[200px] md:text-xl hover:transition-colors duration-500"
        asChild
      >
        <Link href={"/games"}>Explore</Link>
      </Button>
    </section>
  );
};

export default HeroSection;
