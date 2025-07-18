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
import { RootState } from "@/lib/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addBookmark,
  addFavorite,
  removeBookmark,
  removeFavorite,
} from "@/lib/Redux/features/auth/authSlice";
import { useState } from "react";
import Modal from "../ui/modal";

const GameDetails = ({ data, screens }: GameDetailProps) => {
  const [showModal, setShowModal] = useState(false);
  const openImages = (url: string) => {
    window.open(url, "_blank");
  };
  const { bookmarks, favorites } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const isfaved = favorites.some((f) => f.id === data.id);
  const isMarked = bookmarks.some((b) => b.id === data.id);
  const fave = () => {
    if (isLoggedIn) {
      if (isfaved) dispatch(removeFavorite(data.id));
      else dispatch(addFavorite(data));
    } else {
      setShowModal(true);
    }
  };
  const bookmark = () => {
    if (isLoggedIn) {
      if (isMarked) dispatch(removeBookmark(data.id));
      else dispatch(addBookmark(data));
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="p-2.5 bg-black text-purple-100 text-sm">
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
          <div className="flex flex-col justify-start w-1/2 gap-3 ">
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
        <div className="absolute right-2 bottom-1 gap-2.5 flex">
          <FullTooltip
            trigger={<Heart className={`${isfaved ? "fill-red-600" : ""}`} />}
            content={
              isfaved
                ? "Remove from your favorites. "
                : "Add to your favorite games."
            }
            onClick={fave}
          />
          <FullTooltip
            trigger={<Bookmark className={`${isMarked ? "fill-white" : ""}`} />}
            content={
              isfaved
                ? "Remove from your bookmarks. "
                : "Add to your bookmarks."
            }
            onClick={bookmark}
          />
        </div>
      </section>
      {showModal && (
        <Modal
          open={showModal}
          onOpenChange={setShowModal}
          title="Warning"
          description="You can not add this game to your collections. First login."
          isClose={true}
        />
      )}
      <section>
        <Divider name="Screenshots" />
        <Carousel>
          <CarouselPrevious />
          <CarouselContent>
            {screens?.results.map((screen) => (
              <CarouselItem
                key={screen.id}
                className="basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div className="flex justify-center items-center w-full h-[140px] sm:h-[200px]">
                  <div className="w-full h-full ">
                    <Image
                      src={screen.image}
                      onClick={() => openImages(screen.image)}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-full cursor-pointer p-3"
                    />
                  </div>
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
