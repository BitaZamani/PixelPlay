import PaginationSection from "@/components/paginationSection";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { fetchAGenre } from "@/lib/API";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import Banner from "@/components/banner";

const Genre = async (props: {
  searchParams?: { page: number };
  params: { id: string };
}) => {
  const { searchParams, params } = props;
  const page = Number(searchParams?.page || 1);
  const id = Number(params.id);
  console.log(id);

  const { data, games } = await fetchAGenre(page, id);
  console.log(games);
  return (
    <div>
      <Banner name={data.name} src={data?.image_background} />

      <section className="grid grid-cols-2 md:gap-8 gap-4 md:grid-cols-4 lg:grid-cols-5 mt-2">
        {games.results?.map((game) => (
          <Link key={game.id} href={"/"}>
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
      <PaginationSection
        count={data.count}
        page={page}
        urlBase="genres"
        subUrl={id}
      />
    </div>
  );
};

export default Genre;
