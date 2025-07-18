import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, MessageCircleHeart } from "lucide-react";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <div className=" text-purple-100 my-5">
      <div className="text-xl md:text-3xl flex justify-center items-center my-2">
        <MessageCircleHeart className="text-purple-950" size={"30px"} />
        <span className="text-purple-100">About Me</span>
      </div>

      <div className="bg-black leading-loose py-3 px-1.5 text-sm md:text-base">
        <p>
          Hi! I’m Bita, a frontend developer who loves turning ideas into clean,
          functional, and interactive web experiences.
        </p>
        <p>
          This site is a personal project which brings code & play together to
          show my skills and practice new things.
        </p>
        <div className="justify-end flex">
          <Button size={"sm"} asChild>
            <Link href={"/aboutme"}>
              Read More <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
