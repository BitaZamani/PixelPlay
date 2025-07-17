"use client";

import GamesGrid from "@/components/pageSections/gamesGrid";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "@/components/states/errorMessage";
import GridSkeleton from "@/components/states/gridSkeleton";

export default function GamesClient({ page }: { page: number }) {
  const [games, setGames] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<"pending" | "succeeded" | "failed">(
    "pending"
  );
  const [error, setError] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchGames = async (search: string, page: number) => {
    setStatus("pending");
    setError(null);
    try {
      const params = new URLSearchParams();
      if (search) params.set("search", search);
      params.set("page", page.toString());

      const res = await fetch(`/api/games?${params.toString()}`);
      if (!res.ok) throw new Error("Failed to fetch games");

      const data = await res.json();
      setGames(data.results || []);
      setCount(data.count || 0);
      setStatus("succeeded");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else setError("Something went Wrong.");
      setStatus("failed");
    }
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fetchGames(input, 1);
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [input]);

  useEffect(() => {
    if (!input) fetchGames("", page);
  }, [page, input]);

  if (status === "pending") return <GridSkeleton length={10} />;
  if (status === "failed") return <ErrorMessage message={error!} />;

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
        games={{ results: games }}
        count={count}
        page={page}
        urlBase="games"
      />
    </div>
  );
}
