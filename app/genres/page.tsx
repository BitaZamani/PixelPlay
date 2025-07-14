import Banner from "@/components/banner";
import PaginationSection from "@/components/paginationSection";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { fetchGenres } from "@/lib/API";
import { Category, PropsSearch } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Genres = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  console.log(searchParams);
  const data = await fetchGenres(page);

  return (
    <div className="my-5">
      <Banner name={"Genres"} src={"/pagesBanner/genres.jpg"} />
      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {data.results?.map((genre: Category) => (
          <Link key={genre.id} href={`genres/${genre.id}`}>
            <Card className="h-[200px] relative hover:scale-105 transition-all duration-300">
              <CardContent>
                <Image
                  src={genre.image_background}
                  alt={`${genre.name}`}
                  height={200}
                  width={200}
                  unoptimized
                  className="w-full h-32"
                />

                <CardTitle className="text-xs pt-2">{genre.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <PaginationSection count={data.count} page={page} urlBase="genres" />
    </div>
  );
};

export default Genres;
