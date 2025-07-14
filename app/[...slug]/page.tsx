import { fetchAGame } from "@/lib/API";
import { Props } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Game = async ({ params }: Props) => {
  const param = await params;
  const slug = param.slug;
  let id;
  if (slug?.length === 2 && slug[0] === "games") id = slug[slug.length - 1];
  else if (slug?.length === 4 && slug[2] === "games")
    id = slug[slug.length - 1];
  const data = await fetchAGame(Number(id));

  return (
    <div className="bg-green-100 h-screen z-40 text-white">
      <Image
        src={data.background_image}
        height={200}
        width={200}
        alt="dxfghjm,"
        unoptimized
      />
      {data.name}
    </div>
  );
};

export default Game;
