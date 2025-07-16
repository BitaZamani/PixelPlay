"use client";
import Image from "next/image";
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
import { GameDetailProps } from "@/lib/types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table";
import Divider from "./ui/divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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
          <Drawer>
            <DrawerTrigger className="text-left underline underline-offset-4">
              Read full description
            </DrawerTrigger>
            <DrawerContent className="bg-fuchsia-950 text-purple-100">
              <DialogTitle>Description</DialogTitle>
              <DrawerDescription>{data.description_raw}</DrawerDescription>
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
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
        <Divider name="Platforms" />

        <Table className="md:p-14">
          <TableHeader>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Release Date</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xs">
            {data.platforms.map((platform) => (
              <TableRow key={platform.platform.id}>
                <TableCell>
                  <Link href={`/platforms/${platform.platform.id}`}>
                    {platform.platform.name}
                  </Link>
                </TableCell>
                <TableCell>{platform.released_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <section>
        <Divider name="Screenshots" />
        <Carousel className="h-350px">
          <CarouselPrevious />
          <CarouselContent>
            {screens?.results.map((screen) => (
              <CarouselItem key={screen.id} className="basis-1/2 md:basis-1/3">
                <div className="w-[200px] md:w-[240px] gap-2 h-full">
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
