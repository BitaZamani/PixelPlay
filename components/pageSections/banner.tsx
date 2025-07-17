import Image from "next/image";
import React from "react";

const Banner = ({
  src = "/pagesBanner/fallBack.jpg",
  name,
}: {
  src: string;
  name: string;
}) => {
  console.log(src);
  return (
    <div className="overflow-hidden relative h-[200px] md:h-[350px]">
      <div className="h-full">
        <div className="bg-black opacity-60 z-10 h-full w-full absolute top-0" />
        <Image src={src} fill alt="" className="object-cover " unoptimized />
      </div>
      <div className="absolute  bottom-1/2 right-1/2 translate-1/2 z-20">
        <span className=" text-3xl md:text-5xl text-purple-100">{name}</span>
      </div>
    </div>
  );
};

export default Banner;
