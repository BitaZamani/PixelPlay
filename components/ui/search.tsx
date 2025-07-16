"use client";
import React, { useEffect, useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  useEffect(() => {
    console.log(query);
  }, [query]);
  return (
    <form>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white"
      />
    </form>
  );
};

export default Search;
