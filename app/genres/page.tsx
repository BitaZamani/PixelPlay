import Banner from "@/components/pageSections/banner";
import TypesGrid from "@/components/pageSections/typesGrid";
import ErrorMessage from "@/components/states/errorMessage";
import GridSkeleton from "@/components/states/gridSkeleton";
import { fetchGenres } from "@/lib/API";
import { PropsSearch } from "@/lib/types";
import React from "react";

const Genres = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;

  let data;
  let err: string | null = null;
  try {
    data = await fetchGenres(page);
  } catch (error) {
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = "Something went wrong";
    }
  }
  if (!data) return <GridSkeleton length={10} />;
  if (err) return <ErrorMessage message={err} />;
  return (
    <div className="my-5">
      <Banner name={"Genres"} src={"/pagesBanner/genres.jpg"} />
      <TypesGrid data={data} page={page} name="genres" />
    </div>
  );
};

export default Genres;
