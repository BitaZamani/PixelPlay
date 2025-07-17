"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/Redux/store";
import GamesGrid from "@/components/pageSections/gamesGrid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fetchAllGames } from "@/lib/Redux/features/games/gamesSlice";
import ErrorMessage from "@/components/states/errorMessage";
import GridSkeleton from "@/components/states/gridSkeleton";

export default function GamesClient({ page }: { page: number }) {
  const dispatch = useDispatch<AppDispatch>();
  const { allGames, status, error } = useSelector(
    (state: RootState) => state.games
  );

  const [input, setInput] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const query = new URLSearchParams();
      if (input) query.set("search", input);
      query.set("page", "1");

      dispatch(fetchAllGames(query.toString()));
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [input, dispatch]);

  useEffect(() => {
    if (!input) {
      const query = new URLSearchParams();
      query.set("page", page.toString());
      dispatch(fetchAllGames(query.toString()));
    }
  }, [page, dispatch, input]);

  if (status === "pending") return <GridSkeleton length={10} />;
  if (status === "failed")
    return (
      <ErrorMessage
        message={error}
        onRetry={() => {
          const query = new URLSearchParams();
          if (input) query.set("search", input);
          query.set("page", page.toString());
          dispatch(fetchAllGames(query.toString()));
        }}
      />
    );

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
        page={page}
        urlBase="games"
      />
    </div>
  );
}
