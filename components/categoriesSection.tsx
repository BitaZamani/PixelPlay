import { Gamepad2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoriesSection = () => {
  const categories = [
    { name: "games", pic: "/categories/games.jpg" },
    { name: "genres", pic: "/categories/genres.jpg" },
    { name: "platforms", pic: "/categories/platforms.jpg" },
    { name: "publishers", pic: "/categories/publishers.jpg" },
  ];
  return (
    <section className="mt-[17vw]">
      <div className="text-xl md:text-3xl flex justify-center items-center">
        <Gamepad2 color="purple" size={"30px"} />
        <span className="text-purple-100">Popular Categories</span>
      </div>
      <section className="grid grid-cols-4 grid-rows-6 h-[600px] gap-2.5 my-5 md:grid-cols-8">
        {categories.map((category, index) => (
          <Link
            href={`/${category.name}`}
            key={index}
            className="relative overflow-hidden md:row-span-3 group row-span-2 col-span-2"
          >
            <Image
              src={category.pic}
              fill
              alt={category.name}
              priority
              loading="eager"
              className="object-cover group-hover:opacity-80 pb-4"
            />
            <span className="absolute bottom-5 right-1/2 translate-1/2  text-md italic font-semibold bg-purple-400 py-0.5 px-2 group-hover:bottom-1/2 transition-all duration-300">
              {category.name}
            </span>
          </Link>
        ))}
      </section>
    </section>
  );
};

export default CategoriesSection;
