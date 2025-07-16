import Banner from "@/components/banner";
import TypesGrid from "@/components/typesGrid";
import { fetchGenres } from "@/lib/API";
import { PropsSearch } from "@/lib/types";
import React from "react";

const Genres = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  console.log(searchParams);
  const data = await fetchGenres(page);

  return (
    <div className="my-5">
      <Banner name={"Genres"} src={"/pagesBanner/genres.jpg"} />
      <TypesGrid data={data} page={page} name="genres" />
    </div>
  );
};

export default Genres;
