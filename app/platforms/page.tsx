import Banner from "@/components/banner";
import TypesGrid from "@/components/typesGrid";
import { fetchPlatforms } from "@/lib/API";
import {  PropsSearch } from "@/lib/types";
import React from "react";

const Platforms = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  const data = await fetchPlatforms(page);

  return (
    <div className="my-5">
      <Banner src="/pagesBanner/platforms.jpg" name="Platforms" />
      <TypesGrid data={data} page={page} name="platforms" />
    </div>
  );
};

export default Platforms;
