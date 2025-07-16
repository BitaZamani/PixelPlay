import Banner from "@/components/banner";
import TypesGrid from "@/components/typesGrid";
import { fetchPublishers } from "@/lib/API";
import { PropsSearch } from "@/lib/types";
import React from "react";

const Publishers = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;

  const data = await fetchPublishers(page);

  return (
    <div className="my-5">
      <Banner src="/pagesBanner/publishers.jpg" name="Publishers" />
      <TypesGrid data={data} page={page} name="publishers" />
    </div>
  );
};

export default Publishers;
