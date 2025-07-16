"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/Redux/store";
import GamesGrid from "@/components/gamesGrid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  fetchAllGames,
  setPage,
} from "@/lib/Redux/stateManagements/fetchGames";

export default function GamesClient({ pageNum }: { pageNum: number }) {
  const dispatch = useDispatch<AppDispatch>();
  const { allGames, status, error, page } = useSelector(
    (state: RootState) => state.games
  );

  const [input, setInput] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const query = new URLSearchParams();
      if (input) query.set("search", input);
      dispatch(setPage(1));

      dispatch(fetchAllGames(query.toString()));
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [input, dispatch]);

  // initial fetch on mount or page change (without search)
  useEffect(() => {
    if (!input) {
      const query = new URLSearchParams();
      query.set("page", page.toString());
      dispatch(fetchAllGames(query.toString()));
    }
  }, [page, dispatch, input]);

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
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search games..."
              className="px-3 py-1 rounded bg-black text-white border border-purple-500"
            />
          </div>
        </div>
      </div>
      <GamesGrid
        games={allGames}
        count={allGames.count}
        page={pageNum}
        urlBase="games"
      />
    </div>
  );
}
