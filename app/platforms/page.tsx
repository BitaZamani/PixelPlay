import Banner from "@/components/pageSections/banner";
import TypesGrid from "@/components/pageSections/typesGrid";
import ErrorMessage from "@/components/states/errorMessage";
import GridSkeleton from "@/components/states/gridSkeleton";
import { fetchPlatforms } from "@/lib/API";
import { PropsSearch } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Platforms = async ({ searchParams }: PropsSearch) => {
  const searchParam = await searchParams;
  const page = Number(searchParam.page) || 1;
  let data;
  let err: string | null = null;
  try {
    data = await fetchPlatforms(page);
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
      <div className="overflow-hidden relative h-[200px]">
        <div className="h-full">
          <div className="bg-black opacity-60 z-10 h-full w-full absolute top-0" />
          <Image
            src={"/pagesBanner/platforms.jpg"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="absolute bottom-1/2 right-1/2 translate-1/2 z-20">
          <span className=" text-3xl md:text-5xl text-purple-100">
            Platforms
          </span>
        </div>
      </div>
      <Banner src="/pagesBanner/platforms.jpg" name="Platforms" />
      <TypesGrid data={data} page={page} name="platforms" />
    </div>
  );
};

export default Platforms;
