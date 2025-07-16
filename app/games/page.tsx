"use client";

import GamesGrid from "@/components/gamesGrid";
import Search from "@/components/ui/search";
import { fetchAllGames } from "@/lib/Redux/stateManagements/fetchGames";
import { AppDispatch, RootState } from "@/lib/Redux/store";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Games = () => {
  const queryString = useSearchParams();
  const page = Number(queryString.get("page")) || 1;
  const search = queryString.get("search") || "";
  const dispatch = useDispatch<AppDispatch>();
  const { filteredGames } = useSelector(
    (state: RootState) => state.games
  );

  useEffect(() => {
    const query = new URLSearchParams();
    if (search) query.set("search", search);
    query.set("page", page.toString());

    dispatch(fetchAllGames(query.toString()));
  }, [dispatch, search, page]);
  return (
    <div className="my-5">
      {/* بنر بالای صفحه */}
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

      {/* ادامه صفحه */}
      {/* <Banner name="Games" src={"/pagesBanner/games.jpg"} /> */}
      <GamesGrid
        games={filteredGames}
        count={filteredGames.count}
        page={page}
        urlBase="games"
      />
    </div>
  );
};

export default Games;
