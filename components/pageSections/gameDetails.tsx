"use client";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTrigger,
} from "../ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Bookmark, Heart } from "lucide-react";
import { GameDetailProps } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Divider from "../ui/divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const GameDetails = ({ data, screens }: GameDetailProps) => {
  const openImages = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <div className="p-2.5 bg-black text-purple-100">
      <section className="flex items-center md:justify-between gap-12 flex-col md:flex-row relative">
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
        <div className="flex flex-col md:flex-row gap-1.5">
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
            <span>Average Play Time: {data.playtime} Hours</span>
            <Drawer>
              <DrawerTrigger className="text-left underline underline-offset-4">
                Read full description
              </DrawerTrigger>
              <DrawerContent className="bg-primary text-purple-100">
                <DialogTitle>Description</DialogTitle>
                <DrawerDescription>{data.description_raw}</DrawerDescription>
                <DrawerFooter>
                  <DrawerClose>Close</DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
          <div>
            <div>
              <span>Publishers: </span>
              <span>
                {data.publishers.map((publisher) => (
                  <Link key={publisher.id} href={`/publishers/${publisher.id}`}>
                    {publisher.name}
                  </Link>
                ))}
              </span>
            </div>
            {data.platforms.map((platform) => (
              <div key={platform.platform.id}>
                <Link href={`/platforms/${platform.platform.id}`}>
                  {platform.platform.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute right-2 bottom-2 gap-2.5 flex">
          <Tooltip>
            <TooltipTrigger>
              <Heart />
            </TooltipTrigger>
            <TooltipContent>Favorite</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Bookmark />
            </TooltipTrigger>
            <TooltipContent>Bookmark</TooltipContent>
          </Tooltip>
        </div>
      </section>

      <section>
        <Divider name="Screenshots" />
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            {screens?.results.map((screen) => (
              <CarouselItem
                key={screen.id}
                className="basis-1/2 md:basis-1/3 gap-3"
              >
                <div className="w-[200px] md:w-[240px] gap-2 max-h-[140px] min-h-[140px]">
                  <Image
                    src={screen.image}
                    alt=""
                    width={300}
                    height={300}
                    onClick={() => openImages(screen.image)}
                    className="w-full h-full cursor-pointer"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default GameDetails;
