"use client";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllGames } from "@/lib/Redux/stateManagements/fetchGames";
import { AppDispatch } from "@/lib/Redux/store";

export default function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const [input, setInput] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const query = new URLSearchParams();
      if (input) query.set("search", input);
      query.set("page", "1");

      dispatch(fetchAllGames(query.toString())); // fetch جدید بدون تغییر URL
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [input, dispatch]);

  return (
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Search games..."
      className="px-3 py-1 rounded bg-black text-white"
    />
  );
}
