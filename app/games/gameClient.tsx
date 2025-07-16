"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGames } from "@/lib/Redux/stateManagements/fetchGames";
import { AppDispatch, RootState } from "@/lib/Redux/store";
import GamesGrid from "@/components/gamesGrid";

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
    <GamesGrid
      games={filteredGames}
      count={filteredGames.count}
      page={page}
      urlBase="games"
    />
  );
}
