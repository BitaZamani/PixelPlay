"use client";
import Image from "next/image";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Bookmark, Heart } from "lucide-react";

const GameDetails = ({ data }) => {
  return (
    <div>
      <section className="flex items-center  md:justify-between gap-12 flex-col md:flex-row relative">
        <div className="h-[200px] pattern-diagonal-lines-sm pattern-color-purple-100">
          <Image
            src={data.background_image}
            height={200}
            width={200}
            alt=""
            unoptimized
            className="h-full w-auto translate-4"
          />
        </div>
        <div className="flex flex-col justify-start w-full gap-3 text-sm">
          <div className="space-x-1.5 text-xl">
            <span>{data.name}</span>
            <span>{data.released.split("-")[0]}</span>
          </div>
          <span>
            {data.genres.map((genre) => (
              <Link
                key={genre.id}
                href={`/genres/${genre.id}`}
                className="pr-4"
              >
                {genre.name}
              </Link>
            ))}
          </span>
          <div className="space-x-1.5">
            <span>Release Date:</span>
            <span>{data.tba ? "NR" : data.released}</span>
          </div>
          <span>Metacritic: {data.metacritic}</span>
          <span>Play Time: {data.playtime} Hours</span>
          <Drawer>
            <DrawerTrigger className="text-left underline underline-offset-4">
              Read full description
            </DrawerTrigger>
            <DrawerContent className="bg-fuchsia-950 text-purple-100">
              <DialogTitle>Description</DialogTitle>
              <DrawerDescription>{data.description}</DrawerDescription>
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
      <div className="absolute right-2 bottom-2 md:top-2 ">
        <Heart/>
        <Bookmark/>
      </div>
    </div>
  );
};

export default GameDetails;
