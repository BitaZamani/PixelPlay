import Link from "next/link";
import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import Image from "next/image";
import PaginationSection from "../section/paginationSection";
import { GamesGridProps } from "@/lib/types";

const GamesGrid = ({ games, page, id, urlBase, count }: GamesGridProps) => {
  return (
    <div>
      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-2">
        {games.results?.map((game) => (
          <Link
            key={game.id}
            href={`${
              urlBase !== "games"
                ? `/${urlBase}/${id}/games/${game.id}`
                : `/games/${game.id}`
            }`}
          >
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
                  {game.metacritic}
                </span>
                <CardTitle className="text-xs pt-2">{game.name}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
      <PaginationSection
        count={count}
        page={page}
        urlBase={urlBase}
        subUrl={id}
      />
    </div>
  );
};

export default GamesGrid;
