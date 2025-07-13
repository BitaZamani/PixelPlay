import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="my-6 flex justify-center items-center gap-1 md:gap-4 flex-col">
      <span className="text-3xl md:text-6xl text-purple-100 font-bitcount">
        Your Portal to Every Pixel
      </span>
      <span className="text-gray-200 text-sm md:text-lg">
        Discover, explore, and dive into the world of gaming like never before.
      </span>
      <Button className="w-[120px] md:w-[200px] md:text-xl">Explore</Button>
    </section>
  );
};

export default HeroSection;
