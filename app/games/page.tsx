import Banner from "@/components/banner";
import PaginationSection from "@/components/paginationSection";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { fetchGames } from "@/lib/API";
import { Game, PropsSearch } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Games = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;

  const data = await fetchGames(page);
  return (
    <div className="my-5">
      <Banner name="Games" src={"/pagesBanner/games.jpg"} />

      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-4">
        {data.results?.map((game: Game) => (
          <Link key={game.id} href={`./${game.id}`}>
            <Card className="h-[200px] relative hover:scale-105 transition-all duration-300">
              <CardContent>
                <Image
                  src={game.background_image}
                  alt={`${game.name}`}
                  height={200}
                  width={200}
                  unoptimized
                  className="w-full h-32"
                />
                <span className="absolute top-2 right-3.5 bg-purple-200 rounded-full text-xs font-extralight size-8 flex justify-center items-center border border-purple-500">
                  {game.rating}
                </span>
                <CardTitle className="text-xs pt-2">{game.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <PaginationSection count={data.count} page={page} urlBase="games" />
    </div>
  );
};

export default Games;
