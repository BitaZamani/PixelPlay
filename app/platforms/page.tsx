import PaginationSection from "@/components/paginationSection";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { fetchPlatforms } from "@/lib/API";
import { Category, PropsSearch } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Platforms = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  const data = await fetchPlatforms(page);

  return (
    <div className="my-5">
      <div className="overflow-hidden relative h-[200px]">
        <div className="h-full">
          <div className="bg-black opacity-60 z-10 h-full w-full absolute top-0" />
          <Image
            src={"/pagesBanner/platforms.jpg"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-1/2 right-1/2 translate-1/2 z-20">
          <span className=" text-3xl md:text-5xl text-purple-100">
            Platforms
          </span>
        </div>
      </div>

      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {data.results?.map((platform: Category) => (
          <Link key={platform.id} href={`/platforms/${platform.id}`}>
            <Card className="h-[200px] relative hover:scale-105 transition-all duration-300">
              <CardContent>
                <Image
                  src={platform.image_background}
                  alt={`${platform.name}`}
                  height={200}
                  width={200}
                  unoptimized
                  className="w-full h-32"
                />

                <CardTitle className="text-xs pt-2">{platform.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <PaginationSection count={data.count} page={page} urlBase="platforms" />
    </div>
  );
};

export default Platforms;
