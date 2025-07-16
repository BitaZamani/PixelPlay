"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "@/lib/Redux/stateManagements/fetchGames";
import { AppDispatch, RootState } from "@/lib/Redux/store";
import GamesGrid from "@/components/gamesGrid";
import Image from "next/image";
import Search from "@/components/ui/search";

interface Props {
  page: number;
  search: string;
}

export default function GamesClient({ page, search }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredGames, status, error } = useSelector(
    (state: RootState) => state.games
  );

  useEffect(() => {
    const query = new URLSearchParams();
    if (search) query.set("search", search);
    query.set("page", page.toString());

    dispatch(fetchAllGames(query.toString()));
  }, [dispatch, search, page]);

  if (status === "pending") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div>
      <div className="overflow-hidden relative h-[200px] md:h-[350px]">
        <div className="h-full">
          <div className="bg-black opacity-60 z-10 h-full w-full absolute top-0" />
          <Image
            src={"/pagesBanner/games.jpg"}
            fill
            alt="Games Banner"
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-20 text-center space-y-4">
          <span className="text-3xl md:text-5xl text-purple-100 block">
            Games
          </span>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Search />
          </div>
        </div>
      </div>
      <GamesGrid
        games={filteredGames}
        count={filteredGames.count}
        page={page}
        urlBase="games"
      />
    </div>
  );
}
