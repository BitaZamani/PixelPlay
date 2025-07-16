import { fetchAGenre } from "@/lib/API";
import React from "react";
import Banner from "@/components/banner";
import {Props } from "@/lib/types";
import GamesGrid from "@/components/gamesGrid";

const Genre = async ({ searchParams, params }: Props) => {
  const searchParam = await searchParams;
  const param = await params;
  const page = Number(searchParam.page || 1);
  const id = Number(param.id);

  const { data, games } = await fetchAGenre(page, id);

  return (
    <div>
      <Banner name={data.name} src={data?.image_background} />

      <GamesGrid
        count={data.count}
        games={games}
        page={page}
        urlBase="genres"
        id={id}
      />
    </div>
  );
};

export default Genre;
