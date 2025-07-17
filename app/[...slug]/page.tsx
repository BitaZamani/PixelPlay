import GameDetails from "@/components/pageSections/gameDetails";
import { fetchAGame } from "@/lib/API";
import { Props } from "@/lib/types";
import React from "react";

const Game = async ({ params }: Props) => {
  const param = await params;
  const slug = param.slug;
  let id;
  if (slug?.length === 2 && slug[0] === "games") id = slug[slug.length - 1];
  else if (slug?.length === 4 && slug[2] === "games")
    id = slug[slug.length - 1];
  const { data, screens } = await fetchAGame(Number(id));

  return (
    <div>
      <GameDetails data={data} screens={screens} />
    </div>
  );
};

export default Game;
