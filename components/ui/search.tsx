"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search")||""
  const [searchQuery, setSearchQuery] = useState(search)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchQuery) {
        params.set("search", searchQuery);
        params.set("page", "1");
      } else {
        params.delete("search");
      }

      router.push(`/games?${params.toString()}`);
    }, 500); 

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchQuery]); 

  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search games..."
      className="px-3 py-1 rounded bg-black text-white"
    />
  );
}
