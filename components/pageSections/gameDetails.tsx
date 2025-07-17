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
import Divider from "../ui/divider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import FullTooltip from "../ui/fullTooltip";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  addFavorite,
  removeBookmark,
  removeFavorite,
} from "@/lib/Redux/features/auth/authSlice";

const GameDetails = ({ data, screens }: GameDetailProps) => {
  const openImages = (url: string) => {
    window.open(url, "_blank");
  };
  const { bookmarks, favorites } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const [isfaved, setIsFaved] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  useEffect(() => {
    if (favorites.find((fave) => fave.id === data.id)) setIsFaved(true);
    if (bookmarks.find((mark) => mark.id === data.id)) setIsMarked(true);
  }, [bookmarks, data.id, favorites]);
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
        <div className="flex flex-col md:flex-row gap-1.5 w-full">
          <div className="flex flex-col justify-start w-1/2 gap-3 text-sm">
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
              <DrawerContent className="bg-purple-950 text-purple-100">
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
            <div>
              <span>Platforms: </span>
              <span>
                {data.platforms.map((platform) => (
                  <>
                    <Link
                      href={`/platforms/${platform.platform.id}`}
                      key={platform.platform.id}
                    >
                      {platform.platform.name}
                    </Link>
                    <span className="px-1">-</span>
                  </>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute right-2 bottom-2 gap-2.5 flex">
          <FullTooltip
            trigger={<Heart className={`${isfaved ? "fill-red-600" : ""}`} />}
            content={
              isfaved
                ? "Remove from your favorites. "
                : "Add to your favorite games."
            }
            onClick={() =>
              isfaved
                ? dispatch(removeFavorite(data.id))
                : dispatch(addFavorite(data))
            }
          />
          <FullTooltip
            trigger={
              <Bookmark className={`${isMarked ? "fill-red-600" : ""}`} />
            }
            content={
              isfaved
                ? "Remove from your bookmarks. "
                : "Add to your bookmarks."
            }
            onClick={() =>
              isfaved
                ? dispatch(removeBookmark(data.id))
                : dispatch(addBookmark(data))
            }
          />
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
