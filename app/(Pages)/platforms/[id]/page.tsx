import { fetchAPlatform } from "@/lib/API";
import React from "react";
import Banner from "@/components/pageSections/banner";
import { Props } from "@/lib/types";
import GamesGrid from "@/components/pageSections/gamesGrid";
import GridSkeleton from "@/components/states/gridSkeleton";
import ErrorMessage from "@/components/states/errorMessage";
const Platform = async ({ searchParams, params }: Props) => {
  const searchParam = await searchParams;
  const param = await params;
  const page = Number(searchParam.page || 1);
  const id = Number(param.id);

  let data;
  let games;
  let err: string | null = null;
  let result;
  try {
    result = await fetchAPlatform(page, id);
    data = result.data;
    games = result.games;
  } catch (error) {
    if (error instanceof Error) {
      err = error.message;
    } else {
      err = "Something went wrong";
    }
  }
  if (!result) return <GridSkeleton length={10} />;
  if (err) return <ErrorMessage message={err} />;

  return (
    <div>
      <Banner name={data.name} src={data?.image_background} />

      <GamesGrid
        count={data.count}
        games={games}
        page={page}
        urlBase="platforms"
        id={id}
      />
    </div>
  );
};

export default Platform;
